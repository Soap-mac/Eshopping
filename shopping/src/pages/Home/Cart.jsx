import React, { useEffect, useState } from 'react'
// import Top from '../../components/top/top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaChevronDown } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import CartItem from '../../components/CartItem/CartItem'
import Footer from '../../components/Footer/Footer'

function Cart() {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getCart`, {
                    method: "GET",
                    credentials: "include"
                });
                const data = await res.json();
                console.log(data);
                setCartProducts(data.cart);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, []);

    const totalItems = cartProducts?.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartProducts?.reduce((sum, item) => sum + item.quantity * item.productId.price, 0);
    const taxes = +(subtotal * 0.10).toFixed(2);
    const grandTotal = +(subtotal + taxes).toFixed(2);


    return (
        <>
            <Top />
            <Header />
            <Navbar />

            <div className="!min-h-screen !bg-transparent">
                <div className="container !mx-auto !px-[100px] !py-8 !bg-transparent">
                    <div className="flex flex-col lg:flex-row !gap-8 !w-[100%] !bg-transparent">
                        <div className="flex-1 lg:!w-[70%] w-[70%]">
                            <div className="!mb-5 !pb-3 border-b-[2px] border-[#8b7a7a]">
                                <h2 className="text-3xl font-bold text-amber-50 !mb-2">Your Cart</h2>
                                <p className="text-gray-400 text-lg">
                                    <span className="text-amber-400 font-semibold">{totalItems}</span> Items are present currently
                                </p>
                            </div>

                            <div className="!space-y-6">

                                {cartProducts.map((product) => (
                                    <CartItem item={product} />
                                ))}
                            </div>
                        </div>


                        <div className="lg:!w-[30%] w-[30%]">
                            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl !p-6 sticky top-8">
                                <h3 className="text-2xl font-bold text-amber-50 !mb-6 !pb-3 border-b border-gray-700/50">
                                    Order Summary
                                </h3>

                                <div className="!space-y-4 !mb-6">
                                    <div className="flex justify-between items-center text-gray-300">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-amber-50">${grandTotal}</span>
                                    </div>

                                    <div className="flex justify-between items-center text-gray-300">
                                        <span>Delivery Charge</span>
                                        <span className="font-semibold text-amber-50">$15.00</span>
                                    </div>

                                    <div className="flex justify-between items-center text-gray-300">
                                        <span>Estimated For</span>
                                        <span className="text-amber-400 font-medium">India</span>
                                    </div>

                                    <div className="border-t border-gray-700/50 !pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-amber-50">Total</span>
                                            <span className="text-2xl font-bold text-amber-400">${grandTotal + 15}</span>
                                        </div>
                                    </div>
                                </div>

                                <Button component={Link} to='/Checkout' className="!w-full !bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !text-white !py-4 !rounded-lg !font-semibold !text-lg !transition-all !duration-200 !shadow-lg hover:!shadow-xl !border-0">
                                    <MdShoppingCart className="!mr-2" />
                                    Proceed to Checkout
                                </Button>

                                <p className="text-gray-400 text-sm text-center !mt-4">
                                    Free shipping on orders over $50
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart