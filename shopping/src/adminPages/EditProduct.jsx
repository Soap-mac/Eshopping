import React, { useEffect, useState } from 'react'

import Rating from '@mui/material/Rating';
import UploadImg from '../adminComponents/uploadImg';
import { IoMdClose } from "react-icons/io";
import { handleError, handleSucess } from '../utils';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';


function EditProducts() {
    const [name, setname] = useState('');
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = React.useState('');
    const [subCategory, setSubCategory] = React.useState('');
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [weight, setWeight] = useState(0);
    const [ram, setRam] = React.useState('');
    const [size, setSize] = React.useState('');
    const [ratings, setRatings] = useState(0);
    const [image, setImage] = useState([]);
    const [previews, setPreviews] = useState([]);

    const { id } = useParams();
    // console.log(id);

    const handleChangeCategory = (event) => {
        console.log(event.target.value);
        setCategory(event.target.value);
    };
    const handleChangeSubCategory = (event) => {
        console.log(event.target.value);
        setSubCategory(event.target.value);
    };
    const handleChangeRam = (event) => {
        setRam(event.target.value);
    };
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };

    useEffect(() => {
        const fetchingProduct = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/getproduct/${id}`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                console.log(result.product);
                setname(result.product.name);
                setBrand(result.product.brand);
                setDescription(result.product.description);
                setCategory(result.product.catName);
                setSubCategory(result.product.SubcatName);
                setPrice(result.product.price);
                setOldPrice(result.product.oldPrice);
                setCount(result.product.count);
                setDiscount(result.product.discount);
                setWeight(result.product.weight[0]);
                setRam(result.product.ram);
                setSize(result.product.size[0]);
                setRatings(result.product.rating);

                console.log(result);

            } catch (error) {
                console.log(error);
                handleError(error);
            }
        }
        fetchingProduct();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(subCategory);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('oldPrice', oldPrice);
        formData.append('brand', brand);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('subCategory', subCategory);
        formData.append('count', count);
        formData.append('discount', discount);
        formData.append('weight', weight);
        formData.append('ram', ram);
        formData.append('size', size);
        formData.append('ratings', ratings);

        // Append files correctly
        image.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const url = `${import.meta.env.VITE_API_URL}/editProduct/${id}`;
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

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product Category</h3>
                                    <select
                                        value={category}
                                        onChange={handleChangeCategory}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Beauty">Beauty</option>
                                        <option value="Wellness">Wellness</option>
                                    </select>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Sub-Category</h3>
                                    <select
                                        value={subCategory}
                                        onChange={handleChangeSubCategory}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Sub-Category</option>
                                        <option value="Mens">Mens</option>
                                        <option value="Womens">Womens</option>
                                        <option value="Children">Children</option>
                                        <option value="Girls">Girls</option>
                                        <option value="Boys">Boys</option>
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
                                    <h3 className="text-white font-medium !mb-2">Product Weight</h3>
                                    <input
                                        type="number"
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg !text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors !h-[50px]"
                                        placeholder="0.0 kg"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent rounded-xl !p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                        <div className="bg-slate-800/50 rounded-xl !p-6 border border-slate-600 backdrop-blur-sm !space-y-6">
                            <h2 className="text-xl font-semibold text-white !mb-4">Specifications</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product RAM</h3>
                                    <select
                                        value={ram}
                                        onChange={handleChangeRam}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select RAM</option>
                                        <option value="2">2 GB</option>
                                        <option value="4">4 GB</option>
                                        <option value="6">6 GB</option>
                                        <option value="8">8 GB</option>
                                        <option value="12">12 GB</option>
                                        <option value="16">16 GB</option>
                                    </select>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium !mb-2">Product Size</h3>
                                    <select
                                        value={size}
                                        onChange={handleChangeSize}
                                        className="w-full !p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Size</option>
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                    </select>
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
                            {/* <span className="!mr-2 text-xl group-hover:rotate-90 transition-transform duration-300">+</span> */}
                            Confirm Edit
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default EditProducts