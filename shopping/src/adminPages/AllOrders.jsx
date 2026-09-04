import React from 'react'
import Sidebar from '../adminComponents/Sidebar'
import RecentTable from '../adminComponents/RecentTable'

function AllOrders() {
    return (
        <div className="flex justify-between !h-full">

            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>

            <div className="flex-1 h-full bg-transparent min-w-0">

                <div className="bg-transparent rounded-xl !p-6 border border-slate-700 !mx-4 md:mx-6 lg:mx-10 !my-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between !mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-orange-500 !mb-2">
                                All Orders
                            </h1>
                            <p className="text-gray-400">
                                Manage All The Recent orders Of The Store
                            </p>
                        </div>


                    </div>
                </div>

                <div className="!mx-4 md:mx-6 lg:mx-10">
                    <RecentTable />
                </div>
            </div>
        </div>
    )
}

export default AllOrders