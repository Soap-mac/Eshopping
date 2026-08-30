import React, { useState, useMemo } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ProductsTable({
    allProducts,
    setAllProducts,
    category,
    setCategory,
    setPage
}) {
    // const [category, setCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };


    const filteredProducts = useMemo(() => {

        if (!allProducts) return [];

        return allProducts.filter(item =>
            item.name.toLowerCase().includes(searchQuery)
        );

    }, [allProducts, searchQuery]);

    // console.log(props);

    const handleChange = (event) => {
        setCategory(event.target.value);
        setPage(1);
    };

    const deleteProduct = async (id) => {
        console.log(id);
        const formData = new FormData();
        formData.append('id', id);
        try {
            const url = `${import.meta.env.VITE_API_URL}/deleteproducts/${id}`;
            const response = await fetch(url, {
                method: 'DELETE',
                credentials: 'include',
            });


            const result = await response.json();
            console.log(result.success);
            if (result.success) {
                setAllProducts(prev =>
                    prev.filter(product => product._id !== id)
                );
            }
            console.log(result);
        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen bg-transparent !p-6 !mt-[20px]">
            <div className="max-w-7xl !mx-auto">
                <h3 className='text-orange-500 text-3xl font-bold !mb-8 !px-2'>PRODUCTS</h3>

                <div className="flex items-center justify-between">
                    <div className="!text-gray-200">
                        <Select


                            value={category}
                            label="Age"
                            onChange={handleChange}
                            className='!text-gray-200 !w-[200px] border border-amber-50 !pl-[20px] !mb-[20px] !bg-transparent'
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',

                                        color: 'white',
                                        marginLeft: '0px',
                                        padding: '10px',
                                        width: '180px'
                                    }
                                }
                            }}
                        >
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'Fashion'}>Fashion</MenuItem>
                            <MenuItem value={'Electronics'}>Electronics</MenuItem>
                            <MenuItem value={'Beauty'}>Beauty</MenuItem>
                            <MenuItem value={'Books'}>Books</MenuItem>
                            <MenuItem value={'Groceries'}>Groceries</MenuItem>
                            <MenuItem value={'Home'}>Home</MenuItem>
                        </Select>
                    </div>
                    <div className="!mr-[50px]">
                        <Box
                        >

                            <TextField value={searchQuery}
                                onChange={handleSearchChange} sx={{
                                    '& .MuiInput-input': {
                                        color: 'white'
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#d1d5db'
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#6b7280'
                                    },
                                }} id="standard-basic" label={<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <FaMagnifyingGlass />
                                    <span>Search</span>
                                </div>} variant="standard" className='!text-gray-200' />
                        </Box>
                    </div>

                </div>

                <div className="backdrop-blur-lg bg-gray-900/40 border border-gray-700/50 rounded-2xl shadow-2xl">
                    <div className="">
                        <table className="w-full text-sm text-left overflow-hidden">
                            <thead className="text-base text-amber-100 uppercase bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-b border-gray-700/50">
                                <tr>
                                    <th scope="col" className="!px-6 !py-5 font-semibold">
                                        ID
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        Image
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        Product
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold  text-center">
                                        Category
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        Sub Category
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        Price
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        Sales
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(allProducts)}
                                {allProducts &&


                                    filteredProducts.map((item, index) => (
                                        <tr
                                            key={item._id}
                                            className={`border-b border-gray-700/30 hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-600/20 transition-all duration-300 transform hover:scale-[1.01] ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'
                                                }`}
                                        >
                                            <th scope="row" className="!px-6 !py-6 font-semibold text-amber-400 whitespace-nowrap">
                                                {item._id}
                                            </th>
                                            <td className="!px-6 !py-6">
                                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700/30 border border-gray-600/30 shadow-lg">
                                                    <img
                                                        src={item.images[0]}
                                                        alt={item.product}
                                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </td>
                                            <td className="!px-6 !py-6 text-gray-200 max-w-xs">
                                                <div className="font-medium text-base">
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td className="!px-6 !py-6 text-center">
                                                <div className="!px-3 !py-2 rounded-full text-sm font-medium text-gray-200 shadow-md">
                                                    {item.catName}
                                                </div>
                                            </td>
                                            <td className="!px-6 !py-6 text-gray-200 font-semibold text-base">
                                                {item.SubcatName}
                                            </td>
                                            <td className="!px-6 !py-6 text-green-400 font-bold text-lg">
                                                ${item.price}
                                            </td>
                                            <td className="!px-6 !py-6 text-blue-400 font-semibold text-base">
                                                {item.sales}
                                            </td>
                                            <td className="!px-6 !py-6">
                                                <div className="flex items-center justify-center gap-3">
                                                    <Tooltip title="View" placement="top">
                                                        <button className="flex items-center justify-center !p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-200 hover:scale-110 shadow-md">
                                                            <FaEye size={16} />
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Edit" placement="top">
                                                        <Link to={`/editproduct/${item._id}`}>
                                                            <button className="flex items-center justify-center !p-2 rounded-lg bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/30 hover:border-amber-400/50 text-amber-400 hover:text-amber-300 transition-all duration-200 hover:scale-110 shadow-md">
                                                                <CiEdit size={16} />
                                                            </button>
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip title="Delete" placement="top">
                                                        <button className="flex items-center justify-center !p-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 hover:border-red-400/50 text-red-400 hover:text-red-300 transition-all duration-200 hover:scale-110 shadow-md">
                                                            <FaRegTrashCan size={16} onClick={() => deleteProduct(item._id)} />
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductsTable