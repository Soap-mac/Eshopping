import React from 'react'
import Sidebar from '../adminComponents/Sidebar'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import QtyBox from '../components/QtyBox/QtyBox';
import ProductDetailComp from '../components/ProductDetailComponent/ProductDetailComp';
import ProductZoom from '../components/ProductZoom/ProductZoom';
import { IoMdClose } from "react-icons/io";

function ViewProducts() {
    const [size, setSize] = useState('xs');
    const [qtyVal, setQtyval] = useState(1);

    const handleCloseProductModal = () => {
        // Add your close modal logic here
        console.log('Modal closed');
    };

    return (
        <>
            <div className="flex min-h-screen bg-black">
                <div className="sticky top-0 left-0 h-screen overflow-y-auto">
                    <Sidebar />
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-[1400px] mx-auto !p-8">
                        {/* Page Header */}
                        <div className="!mb-8">
                            <h1 className="text-amber-50 text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                                Product Details
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full !mt-2"></div>
                        </div>

                        <div className="productDetailModalContainer bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl !p-8">
                            <div className="flex flex-col lg:flex-row items-start gap-8 relative">

                                <div className="w-full lg:w-[50%]">
                                    <div className="bg-gradient-to-br from-orange-900/10 to-black border border-orange-900/30 rounded-xl !p-4 sm:!p-6 shadow-xl min-h-[380px] lg:min-h-[600px] flex items-center justify-center">
                                        <ProductZoom />
                                    </div>
                                </div>
                                <div className="w-full lg:w-[48%] relative">
                                    <div className="bg-gradient-to-br from-gray-800/50 to-transparent border border-gray-700 rounded-xl !p-6">
                                        <ProductDetailComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProducts