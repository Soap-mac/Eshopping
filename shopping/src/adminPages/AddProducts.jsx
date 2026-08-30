import React, { useState } from 'react'

import Rating from '@mui/material/Rating';
import UploadImg from '../adminComponents/uploadImg';
import { IoMdClose } from "react-icons/io";
import { handleError, handleSucess } from '../utils';
import { ToastContainer } from 'react-toastify';


function AddProducts() {

    const CATEGORY_SUBCATEGORIES = {
        Fashion: {
            Mens: ["Shirts", "Tshirts", "Trousers"],
            Womens: ["Dresses", "Tops", "Jeans"],
            Footwear: ["Mens Footwear", "Womens Footwear"],
        },
        Electronics: {
            Mobile_Accessories: ["SmartPhones", "Accessories"],
            Computer_Accessories: ["Laptops", "Peripherals"],
            Audio: ["HeadPhones", "Speakers"],
        },
        Beauty: {
            SkinCare: ["Face Care", "BodyCare"],
            HairCare: ["Shampoo & Conditioner", "Hair Styling"],
            Makeup: ["Eyes", "Lips"],
        },
        Books: {
            Fiction: ["Romance", "Science Fiction"],
            Non_Fiction: ["Biographies", "SelfHelp"],
            Academic: ["School Textbooks", "Competitive TextBooks"],
        },
        Groceries: {
            "Fresh Produce": ["Fruits", "Vegetables"],
            "Packaged Food": ["Snacks", "Beverages"],
            "Dairy & Bakery": ["Dairy", "Bakery"],
        },
        Home: {
            Furniture: ["Living Room", "Bed Room"],
            "Kitchen & Dining": ["CookWare", "TableWare"],
            "Home Decor": ["Lighting", "Furnishing"],
        },
    };


    const VARIANTS_LIST = {
        size: ["", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], // dropdown
        ram: ["", "2 GB", "4 GB", "6 GB", "8 GB", "12 GB", "16 GB"], // dropdown
        material: null,
        fit: null,
        color: null,
        weight: null,
        features: null,
    };

    const [name, setname] = useState('');
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [variants, setVariants] = useState({});

    const [ratings, setRatings] = useState(0);
    const [image, setImage] = useState([]);
    const [previews, setPreviews] = useState([]);

    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [innerSubCategory, setInnerSubCategory] = useState('');

    const handleChangeCategory = (event) => {
        const selectedCat = event.target.value;
        setCategory(selectedCat);
        setSubCategory('');
    };


    const filteredSubCategories = category ? Object.keys(CATEGORY_SUBCATEGORIES[category]) : [];

    const filteredInnerSubCategories =
        category && subCategory
            ? CATEGORY_SUBCATEGORIES[category][subCategory] || []
            : [];


    const handleChangeSubCategory = (event) => {
        console.log(event.target.value);
        setSubCategory(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(subCategory);
        console.log(variants);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('oldPrice', oldPrice);
        formData.append('brand', brand);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('subCategory', subCategory);
        formData.append('innerSubCategory', innerSubCategory);
        formData.append('count', count);
        formData.append('discount', discount);
        formData.append('ratings', ratings);
        formData.append("variants", JSON.stringify(variants));

        image.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const url = `${import.meta.env.VITE_API_URL}/addproduct`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            const result = await response.json();
            console.log(result);
            console.log(result.message);
            handleSucess(result.message);
        } catch (error) {
            console.log(error);
            handleError(error);
        }
    };

    const handleVariantChange = (e, key) => {
        const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setVariants(prev => ({ ...prev, [key]: selected }));
    };



    return (
        <div className="!p-6 min-h-screen" style={{ background: 'linear-gradient(to bottom right, black, #1a202c 50%, black)' }}>
            <div className="max-w-6xl !mx-auto">

                <div className="bg-transparent rounded-xl !p-6 border border-slate-700 !mb-6 hover:border-orange-500/50 transition-all duration-300">
                    <h1 className="text-3xl font-bold text-white !mb-2">Add New Product</h1>
                    <p className="text-gray-400">Create a new product for your store</p>
                </div>


                <div className="!space-y-6">

                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Basic Information</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product Name</h3>
                                    <input
                                        type="text"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="Enter product name"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Brand</h3>
                                    <input
                                        type="text"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="Enter brand name"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-medium !mb-2">Product Description</h3>
                                <textarea
                                    rows="4"
                                    className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Enter product description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Category & Pricing</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product Category</h3>
                                    <select
                                        value={category}
                                        onChange={handleChangeCategory}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Category</option>
                                        {Object.keys(CATEGORY_SUBCATEGORIES).map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Sub-Category</h3>
                                    <select
                                        value={subCategory}
                                        onChange={handleChangeSubCategory}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={!category}
                                    >
                                        <option value="">Select Sub-Category</option>
                                        {filteredSubCategories.map(sub => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Sub-Category</h3>
                                    <select
                                        value={innerSubCategory}
                                        onChange={(e) => setInnerSubCategory(e.target.value)}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={!subCategory}
                                    >
                                        <option value="">Select Inner-Sub-Category</option>
                                        {filteredInnerSubCategories.map(inner => (
                                            <option key={inner} value={inner}>{inner}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Price</h3>
                                    <input
                                        type="number"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="0.00"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Old Price</h3>
                                    <input
                                        type="number"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="0.00"
                                        value={oldPrice}
                                        onChange={(e) => setOldPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Inventory & Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product Stock</h3>
                                    <input
                                        type="number"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="0"
                                        value={count}
                                        onChange={(e) => setCount(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Discount (%)</h3>
                                    <input
                                        type="number"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="0"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Ratings</h3>
                                    <div className="!p-3 bg-slate-700 border border-slate-600 rounded-lg">
                                        <div className="flex items-center justify-center">
                                            <Rating name='size-small' defaultValue={1} size='medium' className='text-white gap-3' value={ratings}
                                                onChange={(event, newValue) => setRatings(newValue)} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Specifications & Variants</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Object.keys(VARIANTS_LIST || {}).map((variantKey) => {
                                    const options = VARIANTS_LIST[variantKey];
                                    return (
                                        <div key={variantKey} className="flex flex-col gap-2">
                                            <label className="text-white capitalize">{variantKey}:</label>

                                            {options && options.length > 0 ? (
                                                <select

                                                    value={variants[variantKey] || []}
                                                    onChange={(e) => {
                                                        const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
                                                        setVariants(prev => ({ ...prev, [variantKey]: selected }));
                                                    }}
                                                    className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                                >
                                                    {options.map(opt => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <textarea
                                                    value={variants[variantKey] || ""}
                                                    onChange={(e) =>
                                                        setVariants(prev => ({ ...prev, [variantKey]: e.target.value.split(",").map(s => s.trim()) }))
                                                    }
                                                    placeholder={`Enter ${variantKey} (only one at a time)`}
                                                    className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                                    rows={1}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Product Images</h2>

                            {/* <div className="relative inline-block">
                                <div className="relative bg-slate-700 rounded-lg !p-2 border border-slate-600">
                                    <button className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full !p-1 transition-colors !w-[25px]">
                                        <IoMdClose className="!w-4 !h-4" />
                                    </button>
                                    <img
                                        src="https://m.media-amazon.com/images/I/61udmH26auL._SY550_.jpg"
                                        alt="Product"
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                </div>
                            </div> */}

                            <UploadImg multiple={true} setImg={setImage} img={image} preview={previews} setpre={setPreviews} />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="!px-8 !py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
                        >
                            <span className="!mr-2 text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddProducts



// <div>
//                                     <h3 className="text-white font-medium !mb-2">Ratings</h3>
//                                     <div className="!p-3 bg-slate-700 border border-slate-600 rounded-lg">
//                                         <div className="flex items-center justify-center">
//                                             <Rating name='size-small' defaultValue={1} size='medium' className='text-white gap-3' value={ratings}
//                                                 onChange={(event, newValue) => setRatings(newValue)} />

//                                         </div>
//                                     </div>
//                                 </div>