import React, { useEffect, useState } from 'react'
import { handleSucess, handleError } from '../utils'

const STATUS_OPTIONS = ["placed", "confirmed", "processing", "shipped", "delivered", "cancelled"];

function RecentTable() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getAllOrders`, {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await res.json();
                if (data.success) {
                    setOrders(data.orders);
                } else {
                    setOrders([]);
                }
            } catch (error) {
                console.log(error);
                setOrders([]);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        const previous = orders;
        setUpdatingId(orderId);
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/updateOrderStatus/${orderId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                handleSucess(`Order ${orderId} marked as ${newStatus}`);
            } else {
                setOrders(previous);
                handleError(data.message || "Failed to update order status");
            }
        } catch (error) {
            console.log(error);
            setOrders(previous);
            handleError("Failed to update order status");
        } finally {
            setUpdatingId(null);
        }
    };

    const getStatusBadge = (status) => {
        const baseClasses = "!px-3 !py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
        switch (status?.toLowerCase()) {
            case 'delivered':
                return `${baseClasses} bg-green-900/30 text-green-400 border border-green-700/50`;
            case 'shipped':
                return `${baseClasses} bg-blue-900/30 text-blue-400 border border-blue-700/50`;
            case 'processing':
                return `${baseClasses} bg-amber-900/30 text-amber-400 border border-amber-700/50`;
            case 'confirmed':
                return `${baseClasses} bg-cyan-900/30 text-cyan-400 border border-cyan-700/50`;
            case 'placed':
                return `${baseClasses} bg-gray-900/30 text-gray-300 border border-gray-700/50`;
            case 'cancelled':
                return `${baseClasses} bg-red-900/30 text-red-400 border border-red-700/50`;
            default:
                return `${baseClasses} bg-gray-900/30 text-gray-400 border border-gray-700/50`;
        }
    };

    return (
        <div className="">
            <h3 className='text-orange-500 text-[25px] !py-[20px] !px-[30px]'>RECENT ORDERS</h3>
            <div className=" backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden !mx-[15px]">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[16px] text-amber-100 uppercase bg-gray-900/80 border-b border-gray-700/50">
                            <tr>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Order ID</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Date</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Customer</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Items</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold text-center">Qty</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Total</th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (
                                <tr>
                                    <td colSpan={7} className="!px-6 !py-8 text-center text-gray-400">
                                        Loading orders...
                                    </td>
                                </tr>
                            )}

                            {!loading && orders.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="!px-6 !py-8 text-center text-gray-400">
                                        No orders yet.
                                    </td>
                                </tr>
                            )}

                            {!loading && orders.map((order, index) => (
                                <tr
                                    key={order.id}
                                    className={`border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'
                                        }`}
                                >
                                    <th scope="row" className="!px-6 !py-4 font-medium text-amber-400 whitespace-nowrap">
                                        {order.id}
                                    </th>
                                    <td className="!px-6 !py-4 text-gray-300">
                                        {new Date(order.date).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'short', day: 'numeric'
                                        })}
                                    </td>
                                    <td className="!px-6 !py-4 text-gray-300">
                                        <div className="truncate max-w-[160px]" title={order.customerEmail}>
                                            {order.customerName}
                                        </div>
                                    </td>
                                    <td className="!px-6 !py-4 text-gray-300 max-w-xs">
                                        <div className="truncate" title={order.items}>
                                            {order.items}
                                        </div>
                                    </td>
                                    <td className="!px-6 !py-4 text-gray-300 text-center">
                                        <span className="bg-gray-700/50 !px-2 !py-1 rounded-md text-sm">
                                            {order.quantity}
                                        </span>
                                    </td>
                                    <td className="!px-6 !py-4 text-amber-400 font-semibold">
                                        ₹{order.total}
                                    </td>
                                    <td className="!px-6 !py-4">
                                        <div className="flex items-center gap-2">
                                            <span className={getStatusBadge(order.status)}>
                                                {order.status}
                                            </span>
                                            <select
                                                value={order.status}
                                                disabled={updatingId === order.id}
                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                className="bg-gray-900/70 border border-gray-700/50 rounded-md text-xs text-gray-200 !px-2 !py-1"
                                            >
                                                {STATUS_OPTIONS.map(status => (
                                                    <option key={status} value={status}>{status}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RecentTable