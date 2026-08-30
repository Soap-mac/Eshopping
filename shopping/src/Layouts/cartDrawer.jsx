import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from 'react-icons/io';
import { MdShoppingCart, MdOutlineDeleteOutline, MdAdd, MdRemove } from 'react-icons/md';
import { MyContext } from '../App';
import { handleSucess, handleError } from "../utils";

function CartDrawer() {
    const { openCartDrawer, setOpenCartDrawer } = useContext(MyContext);
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!openCartDrawer) return;

        fetchCart();
    }, [openCartDrawer]);

    const fetchCart = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/getCart`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            const data = await res.json();

            if (!res.ok) {
                setCartProducts([]);
                return;
            }

            setCartProducts(
                Array.isArray(data.cart) ? data.cart : []
            );

        } catch (error) {
            console.error(error);
            setCartProducts([]);
            handleError("Failed to load cart");
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (cartItemId, newQty) => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/changeQuantity`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        cartItemId,
                        qty: newQty
                    })
                }
            );

            const data = await res.json();

            if (!res.ok) {
                handleError(data.message || "Failed to update quantity");
                return;
            }

            if (newQty === 0) {
                setCartProducts(prev =>
                    prev.filter(item => item._id !== cartItemId)
                );
            } else {
                setCartProducts(prev =>
                    prev.map(item =>
                        item._id === cartItemId
                            ? { ...item, quantity: newQty }
                            : item
                    )
                );
            }

        } catch (error) {
            console.error(error);
            handleError("Failed to update quantity");
        }
    };

    const removeItem = async (cartItemId) => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/removeFromcart`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        cartItemId
                    })
                }
            );

            const data = await res.json();

            if (!res.ok) {
                handleError(data.message || "Failed to remove item");
                return;
            }

            setCartProducts(prev =>
                prev.filter(item => item._id !== cartItemId)
            );

            handleSucess("Product removed from cart");

        } catch (error) {
            console.error(error);
            handleError("Failed to remove item");
        }
    };

    const handleClose = () => {
        setOpenCartDrawer(false);
    };

    const totalItems = cartProducts.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );

    const subtotal = cartProducts.reduce(
        (sum, item) => {
            const qty = Number(item.quantity || 0);
            const price = Number(
                item.variantDetails?.price ??
                item.productId?.price ??
                0
            );

            return sum + qty * price;
        },
        0
    );

    const taxes = Number(
        (subtotal * 0.10).toFixed(2)
    );

    const deliveryCharge = subtotal > 250 ? 0 : 50;

    const grandTotal = Number(
        (subtotal + taxes + deliveryCharge).toFixed(2)
    );

    return (
        <Drawer
            open={openCartDrawer}
            anchor="right"
            onClose={handleClose}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 440 },
                    bgcolor: '#000',
                    backgroundImage: 'none',
                    boxShadow: '-12px 0 32px rgba(0,0,0,0.5)'
                }
            }}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(1px)'
                }
            }}
        >
            <div className="!flex !h-full !flex-col !bg-black !text-amber-50">

                <div className="!flex !items-center !justify-between !border-b !border-white/10 !px-6 !py-5">
                    <div className="!flex !items-center !gap-3">
                        <span className="!flex !h-9 !w-9 !items-center !justify-center !rounded-full !bg-amber-500/10 !text-amber-400">
                            <MdShoppingCart size={17} />
                        </span>

                        <div>
                            <h3 className="!m-0 !text-[15px] !font-semibold !tracking-tight !text-amber-50">
                                Your Cart
                            </h3>

                            {totalItems > 0 && (
                                <p className="!m-0 !text-[11px] !uppercase !tracking-wide !text-neutral-500">
                                    {totalItems} item{totalItems > 1 ? 's' : ''}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={handleClose}
                        aria-label="Close cart"
                        className="!rounded-full !p-2 !text-neutral-400 !transition-colors hover:!bg-white/5 hover:!text-amber-50"
                    >
                        <IoMdClose size={19} />
                    </button>
                </div>

                <div className="!flex-1 !overflow-y-auto !px-5 !py-5">

                    {loading ? (
                        <div className="!flex !h-full !items-center !justify-center">
                            <span className="!h-6 !w-6 !animate-spin !rounded-full !border-2 !border-neutral-700 !border-t-amber-500" />
                        </div>
                    ) : cartProducts.length === 0 ? (
                        <EmptyCart onClose={handleClose} />
                    ) : (
                        <ul className="!m-0 !w-full !list-none !space-y-3 !p-0">
                            {cartProducts.map((item) => (
                                <CartItemRow
                                    key={item._id}
                                    item={item}
                                    onQuantityChange={updateQuantity}
                                    onRemove={removeItem}
                                />
                            ))}
                        </ul>
                    )}
                </div>

                {cartProducts.length > 0 && (
                    <>
                        <div className="!relative !px-6">
                            <div className="!border-t !border-dashed !border-amber-500/25" />
                        </div>

                        <div className="!bg-neutral-950/80 !px-6 !py-5">

                            <div className="!space-y-2 !text-[13px]">

                                <div className="!flex !justify-between !text-neutral-400">
                                    <span>Subtotal</span>
                                    <span className="!tabular-nums !text-neutral-200">
                                        ₹{subtotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className="!flex !justify-between !text-neutral-400">
                                    <span>Taxes</span>
                                    <span className="!tabular-nums !text-neutral-200">
                                        ₹{taxes.toFixed(2)}
                                    </span>
                                </div>

                                <div className="!flex !justify-between !text-neutral-400">
                                    <span>Delivery</span>
                                    <span className="!tabular-nums !text-neutral-200">
                                        ₹{deliveryCharge.toFixed(2)}
                                    </span>
                                </div>

                            </div>

                            <div className="!mt-3 !flex !items-center !justify-between !border-t !border-white/10 !pt-3">
                                <span className="!text-[15px] !font-semibold !text-amber-50">
                                    Total
                                </span>

                                <span className="!tabular-nums !text-[19px] !font-bold !text-orange-400">
                                    ₹{grandTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="!mt-5 !flex !gap-3">

                                <Button
                                    component={Link}
                                    to="/Cart"
                                    onClick={handleClose}
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'rgba(255,255,255,0.15)',
                                        color: '#fef3c7',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '13.5px',
                                        borderRadius: '10px',
                                        py: 1.15,
                                        '&:hover': {
                                            borderColor: 'rgba(245,158,11,0.5)',
                                            bgcolor: 'rgba(245,158,11,0.06)'
                                        }
                                    }}
                                >
                                    View Cart
                                </Button>

                                <Button
                                    component={Link}
                                    to="/Checkout"
                                    onClick={handleClose}
                                    fullWidth
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '13.5px',
                                        borderRadius: '10px',
                                        py: 1.15,
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #d97706, #c2410c)'
                                        }
                                    }}
                                >
                                    Checkout
                                </Button>

                            </div>
                        </div>
                    </>
                )}

            </div>
        </Drawer>
    );
}

function CartItemRow({ item, onQuantityChange, onRemove }) {
    const product = item.productId || {};
    const qty = Number(item.quantity || 0);

    const price = Number(
        item.variantDetails?.price ??
        product.price ??
        0
    );

    const lineTotal = qty * price;

    return (
        <li className="!group !flex !gap-3 !rounded-xl !border !border-white/5 !bg-white/[0.03] !p-3 !transition-colors hover:!border-white/10 hover:!bg-white/[0.05]">

            <div className="!h-[72px] !w-[72px] !flex-shrink-0 !overflow-hidden !rounded-lg !bg-neutral-900">
                <img
                    src={product.images?.[0]}
                    alt={product.name || 'Product'}
                    className="!h-full !w-full !object-cover"
                />
            </div>

            <div className="!flex !min-w-0 !flex-1 !flex-col !justify-between">

                <div className="!flex !items-start !justify-between !gap-2">

                    <div className="!min-w-0">
                        <p className="!m-0 !truncate !text-[13.5px] !font-medium !text-amber-50">
                            {product.name}
                        </p>

                        <p className="!m-0 !text-[11px] !uppercase !tracking-wide !text-neutral-500">
                            {product.brand}
                        </p>
                    </div>

                    <button
                        onClick={() => onRemove(item._id)}
                        aria-label="Remove item"
                        className="!flex-shrink-0 !rounded-full !p-1.5 !text-neutral-500 !transition-all hover:!bg-red-500/10 hover:!text-red-400"
                    >
                        <MdOutlineDeleteOutline size={16} />
                    </button>

                </div>

                <div className="!flex !items-center !justify-between">

                    <div className="!flex !items-center !gap-1 !rounded-full !border !border-white/10 !bg-black/40 !p-0.5">

                        <button
                            onClick={() =>
                                onQuantityChange(
                                    item._id,
                                    Math.max(1, qty - 1)
                                )
                            }
                            disabled={qty <= 1}
                            aria-label="Decrease quantity"
                            className="!flex !h-6 !w-6 !items-center !justify-center !rounded-full !text-neutral-400 !transition-colors hover:!bg-white/10 hover:!text-amber-50 disabled:!cursor-not-allowed disabled:!opacity-30"
                        >
                            <MdRemove size={13} />
                        </button>

                        <span className="!w-5 !text-center !text-[12px] !font-medium !tabular-nums !text-amber-50">
                            {qty}
                        </span>

                        <button
                            onClick={() =>
                                onQuantityChange(
                                    item._id,
                                    qty + 1
                                )
                            }
                            aria-label="Increase quantity"
                            className="!flex !h-6 !w-6 !items-center !justify-center !rounded-full !text-neutral-400 !transition-colors hover:!bg-white/10 hover:!text-amber-50"
                        >
                            <MdAdd size={13} />
                        </button>

                    </div>

                    <span className="!tabular-nums !text-[13.5px] !font-semibold !text-orange-400">
                        ₹{lineTotal.toFixed(2)}
                    </span>

                </div>

            </div>
        </li>
    );
}

function EmptyCart({ onClose }) {
    return (
        <div className="!flex !h-full !flex-col !items-center !justify-center !px-6 !text-center">

            <span className="!mb-5 !flex !h-16 !w-16 !items-center !justify-center !rounded-full !bg-amber-500/10 !text-amber-400">
                <MdShoppingCart size={26} />
            </span>

            <h3 className="!m-0 !mb-1.5 !text-[16px] !font-semibold !text-amber-50">
                Nothing in here yet
            </h3>

            <p className="!m-0 !mb-6 !max-w-[230px] !text-[13px] !leading-relaxed !text-neutral-500">
                Everything you add will show up right here, ready when you are.
            </p>

            <Button
                component={Link}
                to="/"
                onClick={onClose}
                disableElevation
                sx={{
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '13.5px',
                    borderRadius: '10px',
                    px: 4,
                    py: 1.15,
                    color: '#fff',
                    '&:hover': {
                        background: 'linear-gradient(to right, #d97706, #c2410c)'
                    }
                }}
            >
                Browse Products
            </Button>

        </div>
    );
}

export default CartDrawer;