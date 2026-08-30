import React, { useEffect, useState } from 'react'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { MdShoppingCart } from "react-icons/md"
import CartItem from '../../components/CartItem/CartItem'
import Footer from '../../components/Footer/Footer'
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
        setCartProducts(prev =>
            prev.filter(item => item._id !== id)
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
            <Top />
            <Header />
            <Navbar />

            <div className="min-h-screen bg-transparent">
                <div className="container mx-auto px-4 lg:px-[100px] py-8">

                    {loading ? (
                        <div className="min-h-[500px] flex items-center justify-center">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-amber-500" />
                        </div>
                    ) : cartProducts.length === 0 ? (

                        <div className="min-h-[500px] flex flex-col items-center justify-center text-center">

                            <MdShoppingCart className="text-amber-500 text-7xl mb-5" />

                            <h2 className="text-3xl font-bold text-amber-50 mb-3">
                                Your Cart is Empty
                            </h2>

                            <p className="text-gray-400 text-lg mb-7">
                                Add some products to your cart and they will appear here.
                            </p>

                            <Button
                                component={Link}
                                to="/"
                                className="!bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !text-white !px-8 !py-3 !rounded-lg !font-semibold"
                            >
                                Continue Shopping
                            </Button>

                        </div>

                    ) : (

                        <div className="flex flex-col lg:flex-row gap-8 w-full">

                            <div className="flex-1 lg:w-[70%]">

                                <div className="mb-5 pb-3 border-b-2 border-[#8b7a7a]">

                                    <h2 className="text-3xl font-bold text-amber-50 mb-2">
                                        Your Cart
                                    </h2>

                                    <p className="text-gray-400 text-lg">
                                        <span className="text-amber-400 font-semibold">
                                            {totalItems}
                                        </span>{" "}
                                        {totalItems === 1 ? "Item" : "Items"} in your cart
                                    </p>

                                </div>

                                <div className="space-y-6">

                                    {cartProducts.map((product) => (
                                        <CartItem
                                            key={product._id}
                                            item={product}
                                            onRemove={removeFromCart}
                                        />
                                    ))}

                                </div>

                            </div>

                            <div className="lg:w-[30%]">

                                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sticky top-8">

                                    <h3 className="text-2xl font-bold text-amber-50 mb-6 pb-3 border-b border-gray-700/50">
                                        Order Summary
                                    </h3>

                                    <div className="space-y-4 mb-6">

                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Subtotal</span>

                                            <span className="font-semibold text-amber-50">
                                                ₹{subtotal.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Taxes</span>

                                            <span className="font-semibold text-amber-50">
                                                ₹{taxes.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Delivery Charge</span>

                                            <span className="font-semibold text-amber-50">
                                                ₹{deliveryCharge.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center text-gray-300">
                                            <span>Estimated For</span>

                                            <span className="text-amber-400 font-medium">
                                                India
                                            </span>
                                        </div>

                                        <div className="border-t border-gray-700/50 pt-4">

                                            <div className="flex justify-between items-center">

                                                <span className="text-lg font-semibold text-amber-50">
                                                    Grand Total
                                                </span>

                                                <span className="text-2xl font-bold text-amber-400">
                                                    ₹{grandTotal.toFixed(2)}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <Button
                                        component={Link}
                                        to="/Checkout"
                                        className="!w-full !bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !text-white !py-4 !rounded-lg !font-semibold !text-lg !transition-all !duration-200 !shadow-lg hover:!shadow-xl !border-0"
                                    >
                                        <MdShoppingCart className="!mr-2" />
                                        Proceed to Checkout
                                    </Button>

                                    <p className="text-gray-400 text-sm text-center mt-4">
                                        Free delivery on orders over ₹250
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart