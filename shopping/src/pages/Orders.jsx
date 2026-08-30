import React, { useState, useEffect } from 'react'
import ProfileSide from '../components/ProfileSide/ProfileSide';
import { FaShoppingBag, FaBoxOpen, FaTruck, FaCalendarAlt, FaHashtag } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Footer from '../components/Footer/Footer';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/getMyOrders`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );
                const data = await response.json();
                console.log(data);
                if (data.success) {
                    setOrders(data.orders);
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchOrders();
    }, []);


    const [totalSpent, setTotalSpent] = React.useState(0);
    const [activeOrders, setActiveOrders] = React.useState(0);
    useEffect(() => {
        let total = 0;
        let activeCount = 0;
        orders.forEach(order => {
            total += Number(order.total);
            if (order.status.toLowerCase() !== 'delivered' && order.status.toLowerCase() !== 'cancelled') {
                activeCount++;
            }
        });
        setTotalSpent(total.toFixed(2));
        setActiveOrders(activeCount);
    }, [orders]);

    const formatCurrency = (amount) =>
        `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // Pill badge — literal class strings so Tailwind's build-time scanner picks them up
    const getStatusBadge = (status) => {
        const base = "!px-3 !py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border whitespace-nowrap inline-flex items-center gap-1.5";
        switch (status.toLowerCase()) {
            case 'delivered':
                return `${base} bg-green-900/30 text-green-400 border-green-700/50`;
            case 'shipped':
                return `${base} bg-blue-900/30 text-blue-400 border-blue-700/50`;
            case 'processing':
                return `${base} bg-amber-900/30 text-amber-400 border-amber-700/50`;
            case 'confirmed':
                return `${base} bg-purple-900/30 text-purple-400 border-purple-700/50`;
            case 'cancelled':
                return `${base} bg-red-900/30 text-red-400 border-red-700/50`;
            default:
                return `${base} bg-gray-900/30 text-gray-400 border-gray-700/50`;
        }
    };

    // Left accent stripe on each order card, keyed to the same statuses
    const getStatusStripe = (status) => {
        switch (status.toLowerCase()) {
            case 'delivered': return 'bg-green-500';
            case 'shipped': return 'bg-blue-500';
            case 'processing': return 'bg-amber-500';
            case 'confirmed': return 'bg-purple-500';
            case 'cancelled': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const stats = [
        {
            label: 'Total Orders',
            value: orders.length,
            valueClass: 'text-amber-400',
            icon: <FaShoppingBag />,
            iconClass: 'bg-yellow-900/25 text-yellow-400 border-yellow-800/40',
            accent: 'border-t-amber-500/70'
        },
        {
            label: 'Total Spent',
            value: formatCurrency(totalSpent),
            valueClass: 'text-green-400',
            icon: <PiCurrencyDollarBold />,
            iconClass: 'bg-green-900/20 text-green-400 border-green-800/40',
            accent: 'border-t-green-500/70'
        },
        {
            label: 'Active Orders',
            value: activeOrders,
            valueClass: 'text-blue-400',
            icon: <AiFillThunderbolt />,
            iconClass: 'bg-blue-900/25 text-blue-400 border-blue-800/40',
            accent: 'border-t-blue-500/70'
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="container !mx-auto !px-4 sm:!px-8 lg:!px-16 xl:!px-[100px] !py-8 !pt-[60px] !w-full !bg-transparent">
                <div className="flex flex-col lg:flex-row gap-8 !w-full">
                    <ProfileSide />
                    <div className="flex-1 w-full min-w-0 bg-transparent">
                        <div className="!mb-8 !pb-4 border-b-[2px] border-[#8b7a7a]">
                            <h2 className="text-3xl font-bold text-amber-50 !mb-2">Your Orders</h2>
                            <p className="text-gray-400 text-lg">
                                <span className="text-amber-400 font-semibold">{orders.length}</span> Orders found in your account
                            </p>
                        </div>

                        {/* Stat cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 !mb-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className={`bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 border-t-2 ${stat.accent} rounded-xl !p-6 shadow-xl flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-600/60 hover:shadow-2xl`}
                                >
                                    <div>
                                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider !mb-1.5">{stat.label}</p>
                                        <p className={`text-[28px] leading-none font-bold tabular-nums ${stat.valueClass}`}>{stat.value}</p>
                                    </div>
                                    <div className={`border !p-3.5 rounded-xl text-xl ${stat.iconClass}`}>
                                        {stat.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Loading skeleton */}
                        {loading && (
                            <div className="flex flex-col gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-gray-800/40 border border-gray-700/50 rounded-2xl !p-6 animate-pulse">
                                        <div className="flex justify-between !mb-4">
                                            <div className="h-5 w-36 bg-gray-700/50 rounded"></div>
                                            <div className="h-5 w-20 bg-gray-700/50 rounded-full"></div>
                                        </div>
                                        <div className="h-3 w-2/3 bg-gray-700/40 rounded !mb-2"></div>
                                        <div className="h-3 w-1/3 bg-gray-700/40 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Order cards */}
                        {!loading && orders.length > 0 && (
                            <div className="flex flex-col gap-4">
                                {orders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="relative overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl !pt-6 !pr-6 !pb-6 !pl-7 transition-all duration-200 hover:border-gray-600/60 hover:shadow-2xl"
                                    >
                                        <span className={`absolute inset-y-0 left-0 w-1 ${getStatusStripe(order.status)}`}></span>

                                        <div className="flex flex-wrap items-center justify-between gap-3 !mb-4">
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <span className="font-mono text-xs font-semibold bg-gray-900/60 border border-gray-700/50 rounded !px-2 !py-1 text-amber-400 tracking-wide inline-flex items-center gap-1.5 shrink-0">
                                                    <FaHashtag className="text-[10px] text-amber-500/70" />
                                                    {order.id}
                                                </span>
                                                <span className="text-gray-600 hidden sm:inline">•</span>
                                                <span className="text-gray-500 text-xs items-center gap-1.5 hidden sm:flex shrink-0">
                                                    <FaCalendarAlt className="text-[10px]" /> {formatDate(order.date)}
                                                </span>
                                            </div>
                                            <span className={getStatusBadge(order.status)}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                {order.status}
                                            </span>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/60 to-transparent !mb-4"></div>

                                        <div className="grid grid-cols-2 md:grid-cols-[2.2fr_0.7fr_1fr_1.3fr] gap-x-4 gap-y-4">
                                            <div className="col-span-2 md:col-span-1 min-w-0">
                                                <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider !mb-1.5 flex items-center gap-1.5">
                                                    <FaBoxOpen className="text-[10px]" /> Items
                                                </p>
                                                <p className="text-neutral-100 font-medium text-[15px] tracking-tight truncate" title={order.items}>
                                                    {order.items}
                                                </p>
                                                <span className="text-gray-500 text-xs !mt-1 flex items-center gap-1.5 sm:hidden">
                                                    <FaCalendarAlt className="text-[10px]" /> {formatDate(order.date)}
                                                </span>
                                            </div>

                                            <div>
                                                <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider !mb-1.5">Qty</p>
                                                <span className="bg-gray-900/50 border border-gray-700/40 !px-2.5 !py-1 rounded-md text-sm text-gray-200 tabular-nums">
                                                    {order.quantity}
                                                </span>
                                            </div>

                                            <div>
                                                <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider !mb-1.5">Total</p>
                                                <p className="text-amber-400 font-bold text-lg tabular-nums">
                                                    {formatCurrency(order.total)}
                                                </p>
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider !mb-1.5 flex items-center gap-1.5">
                                                    <FaTruck className="text-[10px]" /> Tracking
                                                </p>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className={`font-mono text-xs ${order.trackingId ? 'text-gray-300' : 'text-gray-600 italic'}`}>
                                                        {order.trackingId || 'Not assigned yet'}
                                                    </span>
                                                    {order.status.toLowerCase() === 'shipped' && (
                                                        <button className="text-amber-400 hover:text-amber-300 hover:bg-amber-900/20 text-xs font-semibold !px-2 !py-0.5 rounded-md border border-amber-700/40 hover:border-amber-500/60 transition-colors">
                                                            Track
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Empty state */}
                        {!loading && orders.length === 0 && (
                            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl !p-12 text-center shadow-xl">
                                <div className="!mb-5 inline-flex items-center justify-center rounded-full bg-gray-900/40 border border-gray-700/40 !p-5">
                                    <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-300 !mb-2">No Orders Yet</h3>
                                <p className="text-gray-400 !mb-6">You haven't placed any orders yet. Start shopping to see your orders here!</p>
                                <Button
                                    component={Link}
                                    to='/'
                                    className="!bg-amber-600 hover:!bg-amber-700 hover:!cursor-pointer !text-white !px-6 !py-3 !rounded-lg !font-semibold !transition-colors !w-full sm:!w-auto sm:!min-w-[280px]"
                                >
                                    Start Shopping
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Orders