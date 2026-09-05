import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-800/95 backdrop-blur-sm !p-4 rounded-xl border border-slate-600 shadow-2xl">
                <p className="text-white font-semibold !mb-2">{`${label}`}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm !mb-1" style={{ color: entry.color }}>
                        {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ payload }) => {
    return (
        <div className="flex justify-center gap-6 !mt-4">
            {payload.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-gray-300 text-sm font-medium">
                        {entry.dataKey === 'TotalSales' ? 'Total Sales' : 'New Signups'}
                    </span>
                </div>
            ))}
        </div>
    );
};

// `data` comes from GET /getDashboardStats - 12 months of
// { name, TotalSales, TotalUser } - fetched by the parent DashBoard page.
function Chart1({ data }) {
    const chartData = data && data.length > 0 ? data : [];
    const loading = !data;

    const totalSales = chartData.reduce((sum, item) => sum + item.TotalSales, 0);
    const totalNewUsers = chartData.reduce((sum, item) => sum + item.TotalUser, 0);

    return (
        <div className="!mx-4 md:!mx-6 lg:!mx-10 !my-6">
            <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm">
                    <div className="!mb-6">
                        <h3 className="text-2xl font-bold text-white !mb-2">
                            Total Sales and New Signups
                        </h3>
                        <p className="text-gray-400">
                            Last 12 months of your business performance
                        </p>
                    </div>

                    <div className="w-full h-[400px]">
                        {loading ? (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                Loading chart...
                            </div>
                        ) : chartData.length === 0 ? (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                No data yet.
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={chartData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend content={<CustomLegend />} />
                                    <Line
                                        type="monotone"
                                        dataKey="TotalSales"
                                        stroke="#f97316"
                                        strokeWidth={3}
                                        dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                                        activeDot={{ r: 8, stroke: '#f97316', strokeWidth: 2, fill: '#fff', style: { filter: 'drop-shadow(0 0 6px #f97316)' } }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="TotalUser"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                                        activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2, fill: '#fff', style: { filter: 'drop-shadow(0 0 6px #3b82f6)' } }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 !mt-6 !pt-6 border-t border-slate-600">
                        <div className="text-center !p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                            <div className="text-2xl font-bold text-orange-500 !mb-1">
                                {loading ? '—' : `₹${totalSales.toLocaleString('en-IN')}`}
                            </div>
                            <div className="text-gray-400 text-sm">Total Sales</div>
                            <div className="text-xs text-gray-500 !mt-1">Last 12 months</div>
                        </div>
                        <div className="text-center !p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                            <div className="text-2xl font-bold text-blue-400 !mb-1">
                                {loading ? '—' : totalNewUsers.toLocaleString('en-IN')}
                            </div>
                            <div className="text-gray-400 text-sm">New Signups</div>
                            <div className="text-xs text-gray-500 !mt-1">Last 12 months</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart1