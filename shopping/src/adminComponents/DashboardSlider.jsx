import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdBorderColor } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';

function DashboardSlider(props) {
    return (
        <div className="w-full max-w-[1260px] !mx-auto !px-4 md:px-6 lg:px-10 !my-6">
            <div className="!mb-6">
                <h2 className="text-2xl font-bold text-white !mb-2">Dashboard Overview</h2>
                <p className="text-gray-400">Track your business performance metrics</p>
            </div>

            <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="dashboard-swiper"
            >
                <SwiperSlide className="!w-auto">
                    <div className="min-w-[280px] w-[360px] bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-500/10">
                        <div className="flex items-start justify-between !mb-4">
                            <div className="flex items-center !space-x-4">
                                <div className="!p-3 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors duration-300">
                                    <MdBorderColor className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">New Orders</p>
                                    <b className="text-white text-2xl font-bold">1,390</b>
                                </div>
                            </div>
                            <div className="!p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                                <IoStatsChartSharp className="text-orange-500 text-[30px]" />
                            </div>
                        </div>

                        <div className="flex items-center !space-x-2 !mt-4 !pt-4 border-t border-slate-700">
                            <div className="flex items-center !space-x-1">
                                <FaAngleDoubleUp className="text-green-500 text-sm" />
                                <span className="text-green-500 font-semibold text-sm">+33.54%</span>
                            </div>
                            <p className="text-gray-400 text-xs">Increased last month</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <div className="min-w-[280px] w-[360px] bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-500/10">
                        <div className="flex items-start justify-between !mb-4">
                            <div className="flex items-center !space-x-4">
                                <div className="!p-3 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors duration-300">
                                    <IoBag className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Sales</p>
                                    <b className="text-white text-2xl font-bold">$984,367</b>
                                </div>
                            </div>
                            <div className="!p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                                <IoStatsChartSharp className="text-orange-500 text-[30px]" />
                            </div>
                        </div>

                        <div className="flex items-center !space-x-2 !mt-4 !pt-4 border-t border-slate-700">
                            <div className="flex items-center !space-x-1">
                                <FaAnglesDown className="text-red-500 text-sm" />
                                <span className="text-red-500 font-semibold text-sm">-5.12%</span>
                            </div>
                            <p className="text-gray-400 text-xs">Decreased last month</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <div className="min-w-[280px] w-[360px] bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-500/10">
                        <div className="flex items-start justify-between !mb-4">
                            <div className="flex items-center !space-x-4">
                                <div className="!p-3 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors duration-300">
                                    <RiMoneyRupeeCircleFill className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Revenue</p>
                                    <b className="text-white text-2xl font-bold">$13,890</b>
                                </div>
                            </div>
                            <div className="!p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                                <IoStatsChartSharp className="text-orange-500 text-[30px]" />
                            </div>
                        </div>

                        <div className="flex items-center !space-x-2 !mt-4 !pt-4 border-t border-slate-700">
                            <div className="flex items-center !space-x-1">
                                <FaAngleDoubleUp className="text-green-500 text-sm" />
                                <span className="text-green-500 font-semibold text-sm">+33.54%</span>
                            </div>
                            <p className="text-gray-400 text-xs">Increased last month</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <div className="min-w-[280px] w-[360px] bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-500/10">
                        <div className="flex items-start justify-between !mb-4">
                            <div className="flex items-center !space-x-4">
                                <div className="!p-3 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors duration-300">
                                    <FaUserAlt className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Customers</p>
                                    <b className="text-white text-2xl font-bold">2,847</b>
                                </div>
                            </div>
                            <div className="!p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                                <IoStatsChartSharp className="text-orange-500 text-[30px]" />
                            </div>
                        </div>

                        <div className="flex items-center !space-x-2 !mt-4 !pt-4 border-t border-slate-700">
                            <div className="flex items-center !space-x-1">
                                <FaAngleDoubleUp className="text-green-500 text-sm" />
                                <span className="text-green-500 font-semibold text-sm">+12.8%</span>
                            </div>
                            <p className="text-gray-400 text-xs">Increased last month</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

            <style jsx>{`
                .dashboard-swiper .swiper-button-next,
                .dashboard-swiper .swiper-button-prev {
                    color: #f97316;
                    background: rgba(30, 41, 59, 0.8);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid #475569;
                    transition: all 0.3s ease;
                }
                
                .dashboard-swiper .swiper-button-next:hover,
                .dashboard-swiper .swiper-button-prev:hover {
                    background: #f97316;
                    color: white;
                    border-color: #f97316;
                    transform: scale(1.1);
                }
                
                .dashboard-swiper .swiper-button-next::after,
                .dashboard-swiper .swiper-button-prev::after {
                    font-size: 16px;
                    font-weight: bold;
                }
                .dashboard-swiper .swiper-button-next{
                    right:10px
                }
                .dashboard-swiper .swiper-button-prev{
                    left:10px
                }
            `}</style>
        </div>
    );
}

export default DashboardSlider;