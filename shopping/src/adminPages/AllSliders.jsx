import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import Sidebar from '../adminComponents/Sidebar';
import sliderImage from '../assets/SliderImages/5092428.jpg';
import { handleError, handleSucess } from '../utils';

function AllSliders() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/allSliders`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();

                setSliders(result.allSliders);

            } catch (error) {
                console.log(error);
                handleError(error);
            }
        }
        fetchSliders();
    }, [])

    // const sliders = [
    //     {
    //         id: 1,
    //         image: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",

    //     },
    //     {
    //         id: 2,
    //         image: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",

    //     },
    //     {
    //         id: 3,
    //         image: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",

    //     },
    //     {
    //         id: 4,
    //         image: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",

    //     },
    //     {
    //         id: 5,
    //         image: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",

    //     },
    // ];

    return (
        <div className="flex justify-between !h-full">
            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>

            <div className="flex-1 h-full bg-transparent min-w-0">
                {/* Header Section */}
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl !p-8 border border-slate-700/50 !mx-4 md:mx-6 lg:mx-10 !my-6 hover:border-orange-500/50 transition-all duration-500 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 !mb-6">
                        <div className="flex items-center gap-4">
                            <div className="!p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
                                <BiCategory className="text-2xl text-orange-400" />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent !mb-2">
                                    All Sliders
                                </h1>
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Manage every Sliders of your store here
                                </p>
                            </div>
                        </div>

                        <button className="!px-8 !py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-full sm:!w-[200px] font-semibold rounded-xl hover:from-orange-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                                <HiSparkles className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                                <span>Add Slider</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="!mx-4 md:mx-6 lg:mx-10">
                    <div className="min-h-screen bg-transparent !p-6 !mt-[20px]">
                        <div className="max-w-7xl !mx-auto">


                            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

                                <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 !px-6 !py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                                        <h4 className="text-xl font-semibold text-white">Sliders Overview</h4>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left overflow-hidden">
                                        <thead className="text-base text-amber-100 uppercase bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-b border-gray-700/50">
                                            <tr>

                                                <th scope="col" className="!px-6 !py-6 font-semibold text-center">
                                                    Sliders
                                                </th>
                                                <th scope="col" className="!px-6 !py-6 font-semibold text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sliders && sliders.length > 0 &&
                                                <>
                                                    {sliders.map((item, index) => (
                                                        <tr
                                                            key={item._id}
                                                            className={`border-b border-gray-700/20 transition-all duration-500 transform hover:scale-[1.002] group ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'
                                                                }`}
                                                        >
                                                            <td className="!px-6 !py-8">
                                                                <div className="flex justify-center">
                                                                    <div className="w-32 h-20 sm:w-44 sm:h-28 rounded-xl overflow-hidden bg-gray-700/30 border border-gray-600/30 shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300 group-hover:border-orange-500/30">
                                                                        <img
                                                                            src={item.image}
                                                                            alt={item.name}
                                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="!px-6 !py-8">
                                                                <div className="flex items-center justify-center gap-3">
                                                                    <Tooltip title="View Details" placement="top">
                                                                        <button className="flex items-center justify-center !p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-blue-500/20 group/btn">
                                                                            <FaEye size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                                                                        </button>
                                                                    </Tooltip>
                                                                    <Tooltip title="Edit Category" placement="top">
                                                                        <button className="flex items-center justify-center !p-3 rounded-xl bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/30 hover:border-amber-400/50 text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-amber-500/20 group/btn">
                                                                            <CiEdit size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                                                                        </button>
                                                                    </Tooltip>
                                                                    <Tooltip title="Delete Category" placement="top">
                                                                        <button className="flex items-center justify-center !p-3 rounded-xl bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 hover:border-red-400/50 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-red-500/20 group/btn">
                                                                            <FaRegTrashCan size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                                                                        </button>
                                                                    </Tooltip>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            {/* Empty State */}
                            {!sliders && (
                                <div className="text-center !py-16">
                                    <BiCategory className="text-6xl text-gray-600 !mx-auto !mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-400 !mb-2">
                                        No Sliders found
                                    </h3>
                                    <p className="text-gray-500">
                                        Contact to the Database Operator
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSliders