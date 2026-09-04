import React, { useEffect, useState } from 'react'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { MdShoppingCart, MdArrowBack } from 'react-icons/md'
import CartItem from '../../components/CartItem/CartItem'
import { handleError } from "../../utils"

function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true)

                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/getCart`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                )

                const data = await res.json()

                if (!res.ok) {
                    setCartProducts([])
                    return
                }

                setCartProducts(
                    Array.isArray(data.cart) ? data.cart : []
                )
            } catch (error) {
                console.error("Failed to fetch cart:", error)
                setCartProducts([])
                handleError("Failed to load cart")
            } finally {
                setLoading(false)
            }
        }

        fetchCart()
    }, [])

    const removeFromCart = (id) => {
        setCartProducts((prev) =>
            prev.filter((item) => item._id !== id)
        )
    }

    const getItemPrice = (item) => {
        return Number(
            item.variantDetails?.price ??
            item.productId?.price ??
            0
        )
    }

    const totalItems = cartProducts.reduce(
        (sum, item) =>
            sum + Number(item.quantity || 0),
        0
    )

    const subtotal = cartProducts.reduce(
        (sum, item) => {
            const quantity = Number(item.quantity || 0)
            const price = getItemPrice(item)

            return sum + quantity * price
        },
        0
    )

    const taxes = Number(
        (subtotal * 0.10).toFixed(2)
    )

    const deliveryCharge = subtotal > 250 ? 0 : 50

    const grandTotal = Number(
        (subtotal + taxes + deliveryCharge).toFixed(2)
    )

    return (
        <>
            {/* <Top /> */}
            <Header />
            <Navbar />

            <main className="!min-h-screen !w-full !bg-transparent !text-amber-50">
                <div className="!w-full !max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10 lg:!py-12">

                    {loading ? (
                        <div className="!min-h-[500px] !w-full !flex !items-center !justify-center">
                            <div className="!h-10 !w-10 !rounded-full !border-4 !border-gray-700 !border-t-amber-500 !animate-spin" />
                        </div>
                    ) : cartProducts.length === 0 ? (

                        <div className="!min-h-[550px] !w-full !flex !flex-col !items-center !justify-center !text-center !px-4">

                            <div className="!mb-6 !flex !h-20 !w-20 !items-center !justify-center !rounded-full !bg-amber-500/10">
                                <MdShoppingCart className="!text-amber-500 !text-5xl" />
                            </div>

                            <h1 className="!m-0 !mb-3 !text-3xl sm:!text-4xl !font-bold !text-amber-50">
                                Your Cart is Empty
                            </h1>

                            <p className="!m-0 !mb-8 !max-w-md !text-base sm:!text-lg !leading-relaxed !text-gray-400">
                                Looks like you haven't added anything to your cart yet.
                            </p>

                            <Button
                                component={Link}
                                to="/"
                                className="!m-0 !bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !px-8 !py-3 !rounded-xl !text-white !font-semibold !normal-case !shadow-lg !transition-all !duration-200"
                            >
                                <MdArrowBack className="!mr-2 !text-xl" />
                                Continue Shopping
                            </Button>

                        </div>

                    ) : (

                        <div className="!w-full !grid !grid-cols-1 lg:!grid-cols-[minmax(0,1fr)_360px] !gap-8 xl:!gap-10">

                            <section className="!w-full !min-w-0">

                                <div className="!mb-8 !pb-4 !border-b-2 !border-gray-700">

                                    <div className="!flex !flex-col sm:!flex-row sm:!items-end sm:!justify-between !gap-2">

                                        <div>
                                            <h1 className="!m-0 !mb-2 !text-3xl sm:!text-4xl !font-bold !text-amber-50">
                                                Your Cart
                                            </h1>

                                            <p className="!m-0 !text-base sm:!text-lg !text-gray-400">
                                                <span className="!font-semibold !text-amber-400">
                                                    {totalItems}
                                                </span>{" "}
                                                {totalItems === 1 ? "item" : "items"} in your cart
                                            </p>
                                        </div>

                                        <span className="!text-sm !text-gray-500">
                                            Review your items before checkout
                                        </span>

                                    </div>

                                </div>

                                <div className="!w-full !space-y-6">

                                    {cartProducts.map((product) => (
                                        <CartItem
                                            key={product._id}
                                            item={product}
                                            onRemove={removeFromCart}
                                        />
                                    ))}

                                </div>

                            </section>

                            <aside className="!w-full">

                                <div className="!w-full !bg-gray-800/60 !backdrop-blur-sm !border !border-gray-700/50 !rounded-2xl !p-6 lg:!p-7 lg:!sticky lg:!top-8 !shadow-2xl">

                                    <div className="!mb-6 !pb-4 !border-b !border-gray-700/50">

                                        <h2 className="!m-0 !text-2xl !font-bold !text-amber-50">
                                            Order Summary
                                        </h2>

                                    </div>

                                    <div className="!w-full !space-y-4">

                                        <div className="!flex !items-center !justify-between !gap-4">
                                            <span className="!text-gray-300">
                                                Items
                                            </span>

                                            <span className="!font-medium !text-amber-50">
                                                {totalItems}
                                            </span>
                                        </div>

                                        <div className="!flex !items-center !justify-between !gap-4">
                                            <span className="!text-gray-300">
                                                Subtotal
                                            </span>

                                            <span className="!font-semibold !text-amber-50">
                                                ₹{subtotal.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="!flex !items-center !justify-between !gap-4">
                                            <span className="!text-gray-300">
                                                Taxes
                                            </span>

                                            <span className="!font-semibold !text-amber-50">
                                                ₹{taxes.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="!flex !items-center !justify-between !gap-4">
                                            <span className="!text-gray-300">
                                                Delivery Charge
                                            </span>

                                            <span className="!font-semibold !text-amber-50">
                                                ₹{deliveryCharge.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="!flex !items-center !justify-between !gap-4">
                                            <span className="!text-gray-300">
                                                Estimated For
                                            </span>

                                            <span className="!font-medium !text-amber-400">
                                                India
                                            </span>
                                        </div>

                                    </div>

                                    <div className="!mt-6 !pt-5 !border-t !border-gray-700/50">

                                        <div className="!flex !items-center !justify-between !gap-4">

                                            <span className="!text-xl !font-bold !text-amber-50">
                                                Grand Total
                                            </span>

                                            <span className="!text-2xl !font-black !text-amber-400">
                                                ₹{grandTotal.toFixed(2)}
                                            </span>

                                        </div>

                                    </div>

                                    <Button
                                        component={Link}
                                        to="/Checkout"
                                        className="!w-full !mt-7 !bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !text-white !py-4 !rounded-xl !font-bold !text-base sm:!text-lg !normal-case !transition-all !duration-200 !shadow-lg hover:!shadow-xl"
                                    >
                                        <MdShoppingCart className="!mr-2 !text-xl" />
                                        Proceed to Checkout
                                    </Button>

                                    <Button
                                        component={Link}
                                        to="/"
                                        variant="text"
                                        className="!w-full !mt-3 !text-gray-400 hover:!text-amber-400 !normal-case !font-medium"
                                    >
                                        Continue Shopping
                                    </Button>

                                    <div className="!mt-5 !pt-4 !border-t !border-gray-700/50">

                                        <p className="!m-0 !text-center !text-xs !leading-relaxed !text-gray-500">
                                            Free delivery on orders over ₹250
                                        </p>

                                    </div>

                                </div>

                            </aside>

                        </div>

                    )}

                </div>
            </main>

            <Footer />
        </>
    )
}

export default Cart