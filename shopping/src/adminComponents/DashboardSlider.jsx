import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdBorderColor } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

const formatCurrency = (value) =>
    `₹${Number(value || 0).toLocaleString('en-IN')}`;

const formatCount = (value) =>
    Number(value || 0).toLocaleString('en-IN');

// One summary card, driven entirely by real numbers from
// GET /getDashboardStats instead of hardcoded placeholders.
function StatCard({ icon, label, value, changePercent, loading }) {
    const isIncrease = changePercent >= 0;

    return (
        <div className="min-w-[280px] w-[360px] bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-orange-500/10">
            <div className="flex items-start justify-between !mb-4">
                <div className="flex items-center !space-x-4">
                    <div className="!p-3 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors duration-300">
                        {icon}
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm font-medium">{label}</p>
                        <b className="text-white text-2xl font-bold">
                            {loading ? '—' : value}
                        </b>
                    </div>
                </div>
                <div className="!p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                    <IoStatsChartSharp className="text-orange-500 text-[30px]" />
                </div>
            </div>

            <div className="flex items-center !space-x-2 !mt-4 !pt-4 border-t border-slate-700">
                {loading ? (
                    <p className="text-gray-500 text-xs">Loading...</p>
                ) : (
                    <>
                        <div className="flex items-center !space-x-1">
                            {isIncrease ? (
                                <FaAngleDoubleUp className="text-green-500 text-sm" />
                            ) : (
                                <FaAnglesDown className="text-red-500 text-sm" />
                            )}
                            <span className={`font-semibold text-sm ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                                {isIncrease ? '+' : ''}{changePercent}%
                            </span>
                        </div>
                        <p className="text-gray-400 text-xs">
                            {isIncrease ? 'Increased' : 'Decreased'} vs last month
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

function DashboardSlider({ stats }) {
    const loading = !stats;

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
                    <StatCard
                        icon={<MdBorderColor className="text-white text-xl" />}
                        label="New Orders"
                        value={!loading && formatCount(stats.newOrders.value)}
                        changePercent={!loading && stats.newOrders.changePercent}
                        loading={loading}
                    />
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <StatCard
                        icon={<IoBag className="text-white text-xl" />}
                        label="Sales"
                        value={!loading && formatCurrency(stats.sales.value)}
                        changePercent={!loading && stats.sales.changePercent}
                        loading={loading}
                    />
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <StatCard
                        icon={<RiMoneyRupeeCircleFill className="text-white text-xl" />}
                        label="Revenue"
                        value={!loading && formatCurrency(stats.revenue.value)}
                        changePercent={!loading && stats.revenue.changePercent}
                        loading={loading}
                    />
                </SwiperSlide>

                <SwiperSlide className="!w-auto">
                    <StatCard
                        icon={<FaUserAlt className="text-white text-xl" />}
                        label="Customers"
                        value={!loading && formatCount(stats.customers.value)}
                        changePercent={!loading && stats.customers.changePercent}
                        loading={loading}
                    />
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