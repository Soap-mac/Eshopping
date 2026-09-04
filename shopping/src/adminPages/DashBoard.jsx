import React, { useEffect, useState } from 'react'
import Header from '../adminComponents/Header.jsx'
import Sidebar from '../adminComponents/Sidebar.jsx'
import DashboardSlider from '../adminComponents/DashboardSlider.jsx'
import { Button } from '@mui/material'
import admin_hero from '../assets/admin_hero.png';
import RecentTable from '../adminComponents/RecentTable.jsx'
import ProductsTable from '../adminComponents/ProductsTable.jsx'
import Chart1 from '../adminComponents/Chart1.jsx'

function DashBoard() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/getproducts`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        credentials: 'include',
                    }
                });
                const result = await response.json();
                console.log(result);
                setAllProducts(result.allProducts);
            } catch (error) {
                console.log(error);
                handleError(error);
            }
        }
        fetchingProducts();
    }, []);
    useEffect(() => {
        let present = Date.now();
        console.log(present.toString());
    }, []);
    return (
        <>
            <div className="flex justify-between !h-full">
                <div className="!sticky top-1 left-0 h-screen overfloy-y-auto">
                    <Sidebar />
                </div>

                <div className="h-full w-full lg:w-auto min-w-0">
                    <Header />

                    <div className="bg-transparent rounded-xl !p-8 border border-slate-700 !mx-4 md:mx-6 lg:mx-10 !my-6 hover:border-orange-500/50 transition-all duration-300">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                            <div className="flex-1 !space-y-6">
                                <div className="!space-y-4">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        Good Morning,
                                        <span className="text-orange-500 !ml-2">Admin</span>
                                    </h1>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                        Here's what happened to your store today. See the stats at once
                                    </p>
                                </div>

                                <button className="w-full sm:!w-[300px] !px-6 !py-3 bg-orange-500 text-white font-semibold rounded-[20px] hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group">
                                    <span className="!mr-2 text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                                    Add New Product
                                </button>


                            </div>

                            <div className="flex-shrink-0 relative">
                                <div className="relative">

                                    <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-2xl scale-110"></div>


                                    <div className="relative bg-slate-700/30 rounded-2xl !p-4 border border-slate-600 backdrop-blur-sm">
                                        <img
                                            src={admin_hero}
                                            alt="Admin Dashboard Illustration"
                                            className="w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

                    <DashboardSlider />

                    <RecentTable />

                    <ProductsTable allProducts={allProducts} />

                    <Chart1 />

                </div>

            </div>
        </>
    )
}

export default DashBoard