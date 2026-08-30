import React from 'react'

function RecentTable() {

    const orders = [
        {
            id: "ORD-2025-001",
            date: "2025-07-20",
            items: "Wireless Headphones, Phone Case",
            quantity: 2,
            total: "$149.99",
            status: "Delivered",
            trackingId: "TRK789456123"
        },
        {
            id: "ORD-2025-002",
            date: "2025-07-18",
            items: "Gaming Mouse, Keyboard",
            quantity: 2,
            total: "$89.99",
            status: "Shipped",
            trackingId: "TRK456789012"
        },
        {
            id: "ORD-2025-003",
            date: "2025-07-15",
            items: "Laptop Stand",
            quantity: 1,
            total: "$45.99",
            status: "Processing",
            trackingId: "TRK123456789"
        },
        {
            id: "ORD-2025-004",
            date: "2025-07-12",
            items: "USB-C Hub, Cable Organizer",
            quantity: 2,
            total: "$67.98",
            status: "Delivered",
            trackingId: "TRK987654321"
        },
        {
            id: "ORD-2025-005",
            date: "2025-07-10",
            items: "Bluetooth Speaker",
            quantity: 1,
            total: "$79.99",
            status: "Cancelled",
            trackingId: "TRK654321987"
        }
    ];

    const getStatusBadge = (status) => {
        const baseClasses = "!px-3 !py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
        switch (status.toLowerCase()) {
            case 'delivered':
                return `${baseClasses} bg-green-900/30 text-green-400 border border-green-700/50`;
            case 'shipped':
                return `${baseClasses} bg-blue-900/30 text-blue-400 border border-blue-700/50`;
            case 'processing':
                return `${baseClasses} bg-amber-900/30 text-amber-400 border border-amber-700/50`;
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
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Order ID
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Date
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Items
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold text-center">
                                    Qty
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Total
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Status
                                </th>
                                <th scope="col" className="!px-6 !py-4 font-semibold">
                                    Tracking
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
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
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
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
                                        {order.total}
                                    </td>
                                    <td className="!px-6 !py-4">
                                        <span className={getStatusBadge(order.status)}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="!px-6 !py-4 text-gray-400 font-mono text-xs">
                                        <div className="flex items-center gap-2">
                                            <span>{order.trackingId}</span>
                                            {order.status.toLowerCase() === 'shipped' && (
                                                <button className="text-amber-400 hover:text-amber-300 transition-colors">
                                                    Track
                                                </button>
                                            )}
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