import React, { useState } from 'react'
import UploadImg from '../adminComponents/uploadImg';
import { IoMdClose } from "react-icons/io";
import { BiCategory, BiImageAdd } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import Sidebar from '../adminComponents/Sidebar';
import { handleError, handleSucess } from '../utils';
import { ToastContainer } from 'react-toastify';

function AddSlider() {

    const [image, setImage] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image[0]);
        try {
            const url = `${import.meta.env.VITE_API_URL}/addSlider`;
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });
            const result = await response.json();
            console.log(result);
            if (result.success) {
                handleSucess(result.message);
                setPreviews([]);
                setImage([]);
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError(error);
        }
    };

    return (
        <div className="flex justify-between !h-full">

            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>


            <div className="flex-1 h-full bg-transparent min-w-0">
                <div className="!mx-4 md:mx-6 lg:mx-10 !my-6">

                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl !p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 shadow-2xl !mb-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="!p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
                                    <BiCategory className="text-2xl text-orange-400" />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent !mb-2">
                                        Add New Slider
                                    </h1>
                                    <p className="text-gray-400 text-base sm:text-lg">
                                        Create a new Slider for your store
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid lg:grid-cols-1 gap-8">



                        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

                            <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 !px-8 !py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                                    <h2 className="text-2xl font-semibold text-white">Slider Image</h2>
                                </div>
                            </div>


                            <div className="!p-8 !space-y-8">


                                <div className="!space-y-4">
                                    <h3 className="flex items-center gap-2 text-white font-semibold">
                                        <BiImageAdd className="text-blue-400" />
                                        Upload New Slider Image
                                    </h3>
                                    <div className="bg-slate-800/30 rounded-2xl !p-6 border border-slate-600/30 backdrop-blur-sm">
                                        <UploadImg multiple={false} setImg={setImage} img={image} preview={previews} setpre={setPreviews} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden !mt-[50px]">
                        <div className="!p-8">
                            <form onSubmit={handleSubmit} className="!space-y-8">

                                <div className="!pt-4">
                                    <button
                                        type="submit"
                                        className="!w-full !px-8 !py-4  bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-400 hover:to-orange-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-500/30 group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center justify-center gap-3 ">
                                            <FaSave className="text-xl group-hover:scale-110 transition-transform duration-300" />
                                            <span className="text-lg">Save Slider</span>
                                            <HiSparkles className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddSlider