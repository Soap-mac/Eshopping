import React, { useEffect, useState } from 'react'
import UploadImg from '../adminComponents/uploadImg';
import { IoMdClose } from "react-icons/io";
import { BiCategory, BiImageAdd } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import Sidebar from '../adminComponents/Sidebar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSucess } from '../utils';

function AddInnerCategory() {
    const [category, setACategory] = useState('Select Category');
    console.log(category);
    const [allCategory, setAllCategory] = useState([]);

    const handleChange = (event) => {

        setACategory(event.target.value);
    };
    const [subCategoryName, setSubCategoryName] = useState('');
    const [innerSubCategory, setInnerSubCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sub Category Name:', subCategoryName);
        console.log('Category Name:', category);

        try {
            const formData = new FormData();
            formData.append('parentCategory', category);
            formData.append('subCategory', subCategoryName);
            formData.append('name', innerSubCategory);
            formData.append('image', subCategoryImage[0]);
            const url = `${import.meta.env.VITE_API_URL}/addInnerCategory`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    credentials: 'include',
                },
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                handleSucess(result.message);
                setACategory('Select Category');
                setSubCategoryName('');
                setPreviews([]);
                setSubCategoryImage(null);
            } else {
                handleError(result.message);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
            handleError(error);
        }
    };

    const [subCategoryImage, setSubCategoryImage] = useState(null);
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        const allCategories = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/getcategory`
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        credentials: 'include',
                    }
                });
                const result = await response.json();
                console.log(result);
                console.log(result.allCategories);
                setAllCategory(result.allCategories);
            } catch (error) {
                console.log(error);
            }
        }
        allCategories();
    }, []);



    return (
        <div className="flex justify-between !h-full">

            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>


            <div className="flex-1 h-full bg-transparent">
                <div className="!mx-4 md:mx-6 lg:mx-10 !my-6">

                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl !p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 shadow-2xl !mb-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="!p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
                                    <BiCategory className="text-2xl text-orange-400" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent !mb-2">
                                        Add New Inner Category
                                    </h1>
                                    <p className="text-gray-400 text-lg">
                                        Create a new Inner Category for your store inventory
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

                            <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 !px-8 !py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                                    <h2 className="text-2xl font-semibold text-white">Inner Category Details</h2>
                                </div>
                            </div>


                            <div className="!p-8">
                                <form onSubmit={handleSubmit} className="!space-y-8">
                                    <div className="!space-y-4">
                                        <label className="block">
                                            <div className="flex items-center gap-2 text-white font-semibold !mb-3">
                                                <BiCategory className="text-orange-400" />
                                                <span>Category Name</span>

                                            </div>
                                            <div className="relative group">
                                                <Select

                                                    value={category}
                                                    label="Category"
                                                    onChange={handleChange}
                                                    className="w-full !p-4 !bg-slate-700/50 !border !border-slate-600/50 !rounded-xl !text-white !placeholder-gray-400 focus:!border-orange-500 focus:!outline-none focus:!ring-2 focus:!ring-orange-500/20 !transition-all !duration-300 !h-[60px] !text-lg group-hover:!border-slate-500/70"
                                                    MenuProps={{
                                                        PaperProps: {
                                                            sx: {
                                                                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',

                                                                color: 'white',
                                                                marginLeft: '0px',
                                                                padding: '10px',
                                                                width: '180px',
                                                                borderColor: ' rgba(249, 115, 22, 1)',
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {/* {console.log(allCategory)} */}
                                                    <MenuItem value={"Select Category"}>Select Category</MenuItem>
                                                    {
                                                        allCategory.map((category, index) => (
                                                            // console.log('inside loop');
                                                            console.log(category.name),
                                                            <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </div>
                                        </label>
                                        <label className="block">
                                            <div className="flex items-center gap-2 text-white font-semibold !mb-3">
                                                <BiCategory className="text-orange-400" />
                                                <span>Sub Category Name</span>

                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    value={subCategoryName}
                                                    onChange={(e) => setSubCategoryName(e.target.value)}
                                                    className="w-full !p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 !h-[60px] text-lg group-hover:border-slate-500/70"
                                                    placeholder="Enter category name (e.g., Fashion, Electronics)"
                                                    required
                                                />
                                            </div>
                                        </label>
                                        <label className="block">
                                            <div className="flex items-center gap-2 text-white font-semibold !mb-3">
                                                <BiCategory className="text-orange-400" />
                                                <span>Inner Category Name</span>

                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    value={innerSubCategory}
                                                    onChange={(e) => setInnerSubCategory(e.target.value)}
                                                    className="w-full !p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 !h-[60px] text-lg group-hover:border-slate-500/70"
                                                    placeholder="Enter category name (e.g., Fashion, Electronics)"
                                                    required
                                                />
                                            </div>
                                        </label>


                                    </div>

                                    <div className="!pt-4">
                                        <button
                                            type="submit"
                                            className="!w-full !px-8 !py-4  bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-400 hover:to-orange-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-500/30 group relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center justify-center gap-3 ">
                                                <FaSave className="text-xl group-hover:scale-110 transition-transform duration-300" />
                                                <span className="text-lg">Save Inner Category</span>
                                                <HiSparkles className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

                            <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 !px-8 !py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                                    <h2 className="text-2xl font-semibold text-white">Inner Category Image</h2>
                                </div>
                            </div>


                            <div className="!p-8 !space-y-8">


                                <div className="!space-y-4">
                                    <h3 className="flex items-center gap-2 text-white font-semibold">
                                        <BiImageAdd className="text-blue-400" />
                                        Upload New Image
                                    </h3>
                                    <div className="bg-slate-800/30 rounded-2xl !p-6 border border-slate-600/30 backdrop-blur-sm">
                                        <UploadImg multiple={false} setImg={setSubCategoryImage} img={subCategoryImage} preview={previews} setpre={setPreviews} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddInnerCategory