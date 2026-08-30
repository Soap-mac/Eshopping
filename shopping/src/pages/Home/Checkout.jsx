import React, { useEffect, useState } from 'react'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdLocationOn, MdPerson, MdPayment, MdCheck } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { handleSucess, handleError } from "../../utils";


function Checkout() {

    const [cartProducts, setCartProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState();
    const [phone, setPhone] = useState();
    const [addressId, setAddressId] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
    const [addressAdded, setAddressAdded] = useState(false);
    const [priceDetails, setPriceDetails] = useState({
        subtotal: 0,
        taxes: 0,
        deliveryCost: 0,
        totalAmount: 0
    });

    const [addresses, setAddresses] = useState([]);
    const [showAddressForm, setShowAddressForm] = useState(false);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/getAddresses`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                const data = await res.json();

                if (data.success) {
                    setAddresses(data.addresses);

                    if (data.addresses.length > 0) {
                        setAddressId(data.addresses[0]._id);
                    } else {
                        setShowAddressForm(true);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAddresses();
    }, []);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getCart`, {
                    method: "GET",
                    credentials: "include"
                });
                const data = await res.json();
                console.log(data);
                setCartProducts(data.cart || []);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, []);

    // Mirrors the price resolution used in create-order / create-cod-order on
    // the server: prefer the matched variant's price, fall back to the base
    // product price.
    const getUnitPrice = (item) => {
        const product = item.productId;
        if (!product) return 0;
        const variant = product.variants?.find(v => v.sku === item.variantSku);
        return (variant && variant.price) || product.price || 0;
    };

    // Populate the order summary as soon as the cart loads (and whenever it
    // changes), using the same subtotal/tax/delivery formula as the backend,
    // so the totals aren't stuck at zero until the payment button is clicked.
    useEffect(() => {
        if (!cartProducts || cartProducts.length === 0) {
            setPriceDetails({ subtotal: 0, taxes: 0, deliveryCost: 0, totalAmount: 0 });
            return;
        }

        const subtotal = cartProducts.reduce(
            (sum, item) => sum + item.quantity * getUnitPrice(item),
            0
        );
        const taxes = +(subtotal * 0.10).toFixed(2);
        const deliveryCost = subtotal > 250 ? 0 : 50;
        const totalAmount = +(subtotal + taxes + deliveryCost).toFixed(2);

        setPriceDetails({
            subtotal: +subtotal.toFixed(2),
            taxes,
            deliveryCost,
            totalAmount
        });
    }, [cartProducts]);


    const checkout = async () => {

        if (!cartProducts || cartProducts.length === 0) {
            handleError("Cart is empty");
            return;
        }

        if (!addressId) {
            handleError("Please select a delivery address");
            return;
        }

        if (paymentMethod === "COD") {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/create-cod-order`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            addressId
                        })
                    }
                );
                const result = await res.json();
                console.log(result);
                if (result.success) {
                    handleSucess(
                        "Payment Successful"
                    );
                    setTimeout(() => {
                        window.location.href = "/orders";
                    }, 1500);
                }
                else {
                    handleError(result.message);
                }
            }
            catch (error) {
                console.log(error);
            }
            return;
        }
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/create-order`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        addressId
                    })
                }
            );
            console.log(res)
            const result = await res.json();
            console.log(result);
            if (result.success) {
                setPriceDetails(result.priceDetails);
                openRazorpay(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    const addAddress = async () => {

        if (
            !name ||
            !email ||
            !street ||
            !city ||
            !state ||
            !pin ||
            !phone
        ) {
            handleError("Please fill all required address details");
            return;
        }

        let formData = new FormData();

        const addressLine = apartment ? `${street}, ${apartment}` : street;

        formData.append('name', name);
        formData.append('email', email);
        formData.append('address_line', addressLine);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('pincode', pin);
        formData.append('mobile', phone);
        formData.append('country', 'India');
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/addAddress`,
                {
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                }
            );
            const result = await res.json();
            console.log(result);
            if (result.success) {
                setAddressId(result.address._id);
                setAddressAdded(true);
                handleSucess("Address added successfully");
            }
            else {
                handleError(result.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // MUI TextField styling — kept identical to the existing site theme
    const textFieldStyles = {
        backgroundColor: '#363535',
        borderRadius: '12px',
        boxSizing: 'border-box',
        '& .MuiInputBase-root': {
            borderRadius: '12px',
        },
        input: {
            color: '#fef3c7',
            fontSize: '15px',
        },
        '& .MuiInputLabel-root': {
            color: '#d1d5db',
            fontSize: '14px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#f59e0b',
        },
        '& .MuiOutlinedInput-root': {
            color: '#fef3c7',
            borderRadius: '12px',
        },
        // The visible border is drawn by the notched-outline fieldset, which
        // inherits the app's theme shape by default (that's what was causing
        // the pill/stadium look) — force it explicitly so it always matches.
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '12px',
            borderColor: '#4b5563',
            borderWidth: '1px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f59e0b',
            borderWidth: '2px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f59e0b',
            borderWidth: '2px',
            boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.1)',
        },
    };

    // Solid amber CTA — used for the two primary actions on the page
    const primaryButtonSx = {
        width: '100%',
        boxSizing: 'border-box',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 700,
        padding: '14px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        boxShadow: '0 8px 20px -8px rgba(217, 119, 6, 0.6)',
        '&:hover': {
            background: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
            boxShadow: '0 10px 24px -8px rgba(217, 119, 6, 0.75)',
        },
        '&.Mui-disabled': {
            background: '#3f3f46',
            color: '#9ca3af',
            boxShadow: 'none',
        },
    };

    const ghostButtonSx = {
        width: 'fit-content',
        maxWidth: '100%',
        boxSizing: 'border-box',
        flex: '0 0 auto',
        textTransform: 'none',
        fontSize: '14.5px',
        fontWeight: 600,
        padding: '10px 20px',
        borderRadius: '10px',
        color: '#fbbf24',
        borderColor: 'rgba(245, 158, 11, 0.5)',
        '&:hover': {
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
        },
    };

    const openRazorpay = (data) => {
        const options = {
            key: data.key,
            amount: data.amount,
            currency: data.currency,
            name: "ArpitCart",
            description: "Order Payment",
            order_id: data.razorpayOrder.id,
            handler: async function (response) {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/verify-payment`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify(response)
                    }
                );
                const result = await res.json();
                console.log(result);
                if (result.success) {

                    handleSucess("Payment Successful");

                    window.location.href = "/orders";

                }
            }
        };
        const razor = new window.Razorpay(options);
        razor.on('payment.failed', async function (response) {

            await fetch(
                `${import.meta.env.VITE_API_URL}/payment-failed`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        razorpay_order_id:
                            response.error.metadata.order_id,

                        error:
                            response.error.description
                    })
                }
            );


            handleError("Payment failed");

        });
        razor.open();
    }

    return (
        <>
            <Top />
            <Header />
            <Navbar />

            <div className="checkout-container bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-amber-50">
                <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10 sm:!py-12">

                    <div className="!mb-8 sm:!mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-amber-50 !mb-1.5 tracking-tight">Checkout</h1>
                        <p className="text-gray-400 text-sm sm:text-base">Complete your order details below</p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">

                        {/* LEFT COLUMN — ADDRESS */}
                        <div className="lg:col-span-3 box-border">
                            <div className="box-border bg-gray-800/50 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">

                                <div className="flex items-center gap-3 !px-6 sm:!px-8 !py-5 border-b border-gray-700/50">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/15 text-amber-400 text-sm font-bold shrink-0">
                                        1
                                    </span>
                                    <MdLocationOn className="text-amber-400 text-xl shrink-0" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-amber-50">
                                        Delivery Address
                                    </h3>
                                </div>

                                <div className="!px-6 sm:!px-8 !py-6 sm:!py-7">

                                    {/* SAVED ADDRESSES */}
                                    {addresses.length > 0 && (
                                        <div className="!space-y-3 !mb-6">
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider !mb-3">
                                                Saved addresses
                                            </h4>

                                            {addresses.map((address, index) => {
                                                const selected = addressId === address._id;

                                                // Build one complete, readable address line from
                                                // whichever fields actually have data — matches the
                                                // real address document shape (address_line, city,
                                                // state, pincode), so incomplete records never show
                                                // a bare trailing "," or "-".
                                                const addressParts = [
                                                    address.address_line,
                                                    address.city,
                                                    address.state,
                                                ].filter(Boolean);
                                                let fullAddress = addressParts.join(', ');
                                                if (address.pincode) {
                                                    fullAddress = fullAddress
                                                        ? `${fullAddress} - ${address.pincode}`
                                                        : address.pincode;
                                                }
                                                const heading = address.name || `Saved address ${index + 1}`;
                                                const hasDetails = fullAddress || address.mobile;

                                                return (
                                                    <label
                                                        key={address._id}
                                                        htmlFor={`address-${address._id}`}
                                                        className={`box-border flex items-start gap-4 cursor-pointer !p-4 sm:!p-5 rounded-xl border transition-colors ${selected
                                                            ? "border-amber-500 bg-amber-500/10"
                                                            : "border-gray-700 bg-gray-900/40 hover:border-amber-500/40"
                                                            }`}
                                                    >
                                                        <span
                                                            className={`flex items-center justify-center w-5 h-5 rounded-full border-2 shrink-0 !mt-0.5 ${selected ? "border-amber-500 bg-amber-500" : "border-gray-500"
                                                                }`}
                                                        >
                                                            {selected && <MdCheck className="text-black text-xs" />}
                                                        </span>
                                                        <input
                                                            id={`address-${address._id}`}
                                                            type="radio"
                                                            name="savedAddress"
                                                            className="sr-only"
                                                            checked={selected}
                                                            onChange={() => setAddressId(address._id)}
                                                        />

                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <p className="font-bold text-amber-50 truncate">
                                                                    {heading}
                                                                </p>
                                                                {index === 0 && (
                                                                    <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 !px-2 !py-0.5 rounded-full shrink-0">
                                                                        Default
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {fullAddress && (
                                                                <p className="text-gray-300 !mt-1 text-sm leading-relaxed">
                                                                    {fullAddress}
                                                                </p>
                                                            )}
                                                            {address.mobile && (
                                                                <p className="text-gray-500 !mt-1 text-sm">
                                                                    {address.mobile}
                                                                </p>
                                                            )}
                                                            {!hasDetails && (
                                                                <p className="text-gray-500 !mt-1 text-sm italic">
                                                                    No further details on file
                                                                </p>
                                                            )}
                                                        </div>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* ADD NEW ADDRESS — content-sized so it can never be
                                        stretched full-width by a global button reset */}
                                    {!showAddressForm && (
                                        <span className="inline-block max-w-full">
                                            <Button
                                                variant="outlined"
                                                onClick={() => setShowAddressForm(true)}
                                                sx={ghostButtonSx}
                                            >
                                                + Add new address
                                            </Button>
                                        </span>
                                    )}

                                    {/* NEW ADDRESS FORM */}
                                    {showAddressForm && (
                                        <div className={`box-border ${addresses.length > 0 ? "!mt-8 !pt-7 border-t border-gray-700/50" : ""}`}>

                                            <div className="flex items-center gap-2 !mb-6">
                                                <MdPerson className="text-amber-400 text-xl shrink-0" />
                                                <h2 className="text-base sm:text-lg font-semibold text-amber-50">
                                                    {addresses.length > 0 ? "Add a new address" : "Enter your address"}
                                                </h2>
                                            </div>

                                            <form className="!space-y-5" onSubmit={(e) => e.preventDefault()}>
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <TextField
                                                        label="Full name *"
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <TextField
                                                        label="Email address *"
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>

                                                <TextField
                                                    label="Street address *"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={textFieldStyles}
                                                    onChange={(e) => setStreet(e.target.value)}
                                                />

                                                <TextField
                                                    label="Apartment / unit (optional)"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={textFieldStyles}
                                                    onChange={(e) => setApartment(e.target.value)}
                                                />

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <TextField
                                                        label="City *"
                                                        variant="outlined"
                                                        onChange={(e) => setCity(e.target.value)}
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                    />
                                                    <TextField
                                                        label="State / province *"
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                        onChange={(e) => setState(e.target.value)}
                                                    />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <TextField
                                                        label="PIN code / ZIP *"
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                        onChange={(e) => setPin(e.target.value)}
                                                    />
                                                    <TextField
                                                        label="Phone number *"
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={textFieldStyles}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>

                                                <Button
                                                    disabled={addressAdded}
                                                    onClick={addAddress}
                                                    sx={{ ...primaryButtonSx, marginTop: '4px' }}
                                                >
                                                    <MdShoppingCart className="!mr-2.5 text-lg" />
                                                    {addressAdded ? "Address added" : "Add address"}
                                                </Button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN — ORDER SUMMARY */}
                        <div className="lg:col-span-2 box-border lg:sticky lg:top-8">
                            <div className="box-border bg-gray-800/60 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">

                                <div className="flex items-center gap-3 !px-6 sm:!px-8 !py-5 border-b border-gray-700/50">
                                    <MdShoppingCart className="text-amber-400 text-xl shrink-0" />
                                    <h3 className="text-lg sm:text-xl font-bold text-amber-50">Order summary</h3>
                                </div>

                                <div className="!px-6 sm:!px-8 !py-6 sm:!py-7">

                                    {cartProducts.length === 0 ? (
                                        <div className="text-center !py-6 !mb-6 border border-dashed border-gray-700 rounded-xl">
                                            <p className="text-gray-300 font-medium">Your cart is empty</p>
                                            <p className="text-gray-500 text-sm !mt-1">Add items to see your order summary here.</p>
                                        </div>
                                    ) : (
                                        <div className="!space-y-3 !mb-6 max-h-72 overflow-y-auto !pr-1">
                                            {cartProducts.map((item) => {
                                                const product = item.productId;
                                                const unitPrice = getUnitPrice(item);
                                                const lineTotal = (unitPrice * item.quantity).toFixed(2);
                                                const thumb = item.variantDetails?.images?.[0] || product?.images?.[0];
                                                const optionsText = item.variantDetails?.options
                                                    ? Object.values(item.variantDetails.options).filter(Boolean).join(' / ')
                                                    : '';

                                                return (
                                                    <div key={item._id} className="flex items-center gap-3">
                                                        {thumb ? (
                                                            <img
                                                                src={thumb}
                                                                alt={product?.name || 'Product'}
                                                                className="w-12 h-12 rounded-lg object-cover border border-gray-700/50 shrink-0 bg-gray-900"
                                                            />
                                                        ) : (
                                                            <div className="w-12 h-12 rounded-lg border border-gray-700/50 shrink-0 bg-gray-900 flex items-center justify-center">
                                                                <MdShoppingCart className="text-gray-600 text-lg" />
                                                            </div>
                                                        )}
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-amber-50 truncate">
                                                                {product?.name || 'Product'}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                {optionsText && `${optionsText} · `}Qty {item.quantity} × ₹{unitPrice}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm font-semibold text-amber-50 shrink-0">
                                                            ₹{lineTotal}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div className="!mb-6">
                                        <div className="flex justify-between items-center !py-2.5 border-b border-gray-700/30">
                                            <span className="text-gray-400 text-sm">Subtotal</span>
                                            <span className="font-semibold text-amber-50">₹{priceDetails.subtotal}</span>
                                        </div>
                                        <div className="flex justify-between items-center !py-2.5 border-b border-gray-700/30">
                                            <span className="text-gray-400 text-sm">Taxes</span>
                                            <span className="font-semibold text-amber-50">₹{priceDetails.taxes}</span>
                                        </div>
                                        <div className="flex justify-between items-center !py-2.5 border-b border-gray-700/30">
                                            <span className="text-gray-400 text-sm">Delivery charge</span>
                                            <span className="font-semibold text-amber-50">₹{priceDetails.deliveryCost}</span>
                                        </div>
                                        <div className="flex justify-between items-center !py-2.5">
                                            <span className="text-gray-400 text-sm">Estimated for</span>
                                            <span className="text-amber-400 font-semibold bg-amber-400/10 !px-3 !py-1 rounded-full text-xs">
                                                India
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-xl !p-4 border border-amber-400/20 !mt-4">
                                            <span className="text-base font-bold text-amber-50">Grand total</span>
                                            <span className="text-2xl font-black text-amber-400">₹{priceDetails.totalAmount}</span>
                                        </div>
                                    </div>

                                    <div className="!mb-6">
                                        <div className="flex items-center gap-2 !mb-3">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold shrink-0">
                                                2
                                            </span>
                                            <MdPayment className="text-amber-400 text-lg shrink-0" />
                                            <h3 className="text-base font-bold text-amber-50">Payment method</h3>
                                        </div>

                                        <div className="!space-y-2.5">
                                            {[
                                                { value: "RAZORPAY", label: "Online payment", hint: "Cards, UPI & wallets" },
                                                { value: "COD", label: "Cash on delivery", hint: "Pay when it arrives" },
                                            ].map((option) => {
                                                const selected = paymentMethod === option.value;
                                                return (
                                                    <label
                                                        key={option.value}
                                                        htmlFor={`pay-${option.value}`}
                                                        className={`box-border flex items-center gap-3 cursor-pointer !p-3.5 rounded-xl border transition-colors ${selected
                                                            ? "border-amber-500 bg-amber-500/10"
                                                            : "border-gray-700 bg-gray-900/40 hover:border-amber-500/40"
                                                            }`}
                                                    >
                                                        <span
                                                            className={`flex items-center justify-center w-5 h-5 rounded-full border-2 shrink-0 ${selected ? "border-amber-500 bg-amber-500" : "border-gray-500"
                                                                }`}
                                                        >
                                                            {selected && <MdCheck className="text-black text-xs" />}
                                                        </span>
                                                        <input
                                                            id={`pay-${option.value}`}
                                                            type="radio"
                                                            name="paymentMethod"
                                                            value={option.value}
                                                            className="sr-only"
                                                            checked={selected}
                                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                                        />
                                                        <span className="min-w-0">
                                                            <span className="block text-gray-100 font-medium text-sm">{option.label}</span>
                                                            <span className="block text-gray-500 text-xs !mt-0.5">{option.hint}</span>
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <Button
                                        onClick={checkout}
                                        disabled={cartProducts.length === 0}
                                        sx={primaryButtonSx}
                                    >
                                        <MdShoppingCart className="!mr-2.5 text-lg" />
                                        Proceed to payment
                                    </Button>

                                    <div className="!mt-5 text-center !space-y-1.5">
                                        <p className="text-gray-400 text-xs flex items-center justify-center gap-1.5">
                                            <TbTruckDelivery className="text-base shrink-0" /> Free shipping on orders over $50
                                        </p>
                                        <p className="text-gray-600 text-xs">
                                            Secure checkout powered by SSL encryption
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout