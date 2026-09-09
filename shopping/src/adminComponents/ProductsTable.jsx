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
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

function ProductsTable({
    allProducts = [],
    setAllProducts,
    category = 'All',
    setCategory,
    page = 1,
    setPage,
    totalPages = 1,
    totalProducts = 0,
    loading = false,
    searchQuery = '',
    setSearchQuery
}) {
    const [searchInput, setSearchInput] = useState(searchQuery);

    useEffect(() => {
        setSearchInput(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchInput !== searchQuery) {
                setSearchQuery?.(searchInput);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [searchInput, searchQuery, setSearchQuery]);

    const handleCategoryChange = (event) => {
        const value = event.target.value;

        setCategory?.(value);
        setPage?.(1);
    };

    const handlePageChange = (_, value) => {
        setPage?.(value);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const deleteProduct = async (id) => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/deleteproducts/${id}`;

            const response = await fetch(url, {
                method: 'DELETE',
                credentials: 'include',
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                console.error(
                    result?.message || 'Failed to delete product'
                );
                return;
            }

            setAllProducts?.(prev =>
                prev.filter(product => product._id !== id)
            );

            if (
                allProducts.length === 1 &&
                page > 1
            ) {
                setPage?.(page - 1);
            }
        } catch (error) {
            console.error('Delete product error:', error);
        }
    };

    return (
        <div className="!min-h-screen !bg-transparent !p-6 !mt-[20px]">
            <div className="!mx-auto !max-w-7xl">

                <div className="!mb-8 !flex !flex-col !gap-5 sm:!flex-row sm:!items-center sm:!justify-between">
                    <div>
                        <h3 className="!m-0 !text-3xl !font-bold !text-orange-500">
                            PRODUCTS
                        </h3>

                        <p className="!m-0 !mt-2 !text-[13px] !text-gray-500">
                            {totalProducts} total product{totalProducts !== 1 ? 's' : ''}
                        </p>
                    </div>

                    <div className="!flex !w-full !flex-col !gap-4 sm:!w-auto sm:!flex-row sm:!items-center">

                        <Select
                            value={category || 'All'}
                            onChange={handleCategoryChange}
                            displayEmpty
                            className="!w-full sm:!w-[200px] !border !border-white/10 !bg-[#151515] !text-gray-200"
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#151515',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        marginTop: '6px'
                                    }
                                }
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                },
                                '& .MuiSelect-select': {
                                    padding: '10px 14px',
                                    color: '#e5e7eb'
                                },
                                '& .MuiSelect-icon': {
                                    color: '#f97316'
                                }
                            }}
                        >
                            <MenuItem value="All">
                                All
                            </MenuItem>

                            <MenuItem value="Fashion">
                                Fashion
                            </MenuItem>

                            <MenuItem value="Electronics">
                                Electronics
                            </MenuItem>

                            <MenuItem value="Beauty">
                                Beauty
                            </MenuItem>

                            <MenuItem value="Books">
                                Books
                            </MenuItem>

                            <MenuItem value="Groceries">
                                Groceries
                            </MenuItem>

                            <MenuItem value="Home">
                                Home
                            </MenuItem>
                        </Select>

                        <Box className="!w-full sm:!w-[240px]">
                            <TextField
                                value={searchInput}
                                onChange={(event) =>
                                    setSearchInput(event.target.value)
                                }
                                id="product-search"
                                fullWidth
                                label={
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <FaMagnifyingGlass />
                                        <span>Search products</span>
                                    </div>
                                }
                                variant="standard"
                                sx={{
                                    '& .MuiInput-input': {
                                        color: 'white'
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#9ca3af'
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f97316'
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#4b5563'
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: '#f97316'
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#f97316'
                                    }
                                }}
                            />
                        </Box>

                    </div>
                </div>

                <div className="!overflow-hidden !rounded-2xl !border !border-gray-700/50 !bg-gray-900/40 !shadow-2xl">

                    <div className="!overflow-x-auto">

                        <table className="!w-full !min-w-[1050px] !text-left !text-sm">

                            <thead className="!border-b !border-gray-700/50 !bg-gradient-to-r !from-gray-900/90 !to-gray-800/90 !text-base !uppercase !text-amber-100">
                                <tr>
                                    <th className="!px-6 !py-5 !font-semibold">
                                        ID
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold">
                                        Image
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold">
                                        Product
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold !text-center">
                                        Category
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold">
                                        Sub Category
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold">
                                        Price
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold">
                                        Sales
                                    </th>

                                    <th className="!px-6 !py-5 !font-semibold !text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="!px-6 !py-20"
                                        >
                                            <div className="!flex !flex-col !items-center !justify-center !gap-3">
                                                <CircularProgress
                                                    size={35}
                                                    sx={{
                                                        color: '#f97316'
                                                    }}
                                                />

                                                <p className="!m-0 !text-[13px] !text-white/40">
                                                    Loading products...
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : allProducts.length > 0 ? (
                                    allProducts.map((item, index) => (
                                        <tr
                                            key={item._id}
                                            className={`!border-b !border-gray-700/30 !transition-all !duration-300 hover:!bg-gray-700/20 ${index % 2 === 0
                                                    ? '!bg-gray-800/20'
                                                    : '!bg-gray-800/10'
                                                }`}
                                        >

                                            <th
                                                scope="row"
                                                className="!max-w-[180px] !break-all !px-6 !py-6 !font-semibold !text-amber-400"
                                            >
                                                {item._id}
                                            </th>

                                            <td className="!px-6 !py-6">
                                                <div className="!h-16 !w-16 !overflow-hidden !rounded-lg !border !border-gray-600/30 !bg-gray-700/30 !shadow-lg">
                                                    <img
                                                        src={item?.images?.[0]}
                                                        alt={
                                                            item?.name ||
                                                            'Product'
                                                        }
                                                        className="!h-full !w-full !object-cover !transition-transform !duration-300 hover:!scale-110"
                                                    />
                                                </div>
                                            </td>

                                            <td className="!max-w-xs !px-6 !py-6 !text-gray-200">
                                                <div className="!text-base !font-medium">
                                                    {item?.name || 'Unnamed Product'}
                                                </div>
                                            </td>

                                            <td className="!px-6 !py-6 !text-center">
                                                <div className="!rounded-full !px-3 !py-2 !text-sm !font-medium !text-gray-200">
                                                    {item?.catName || '—'}
                                                </div>
                                            </td>

                                            <td className="!px-6 !py-6 !text-base !font-semibold !text-gray-200">
                                                {item?.SubcatName || '—'}
                                            </td>

                                            <td className="!px-6 !py-6 !text-lg !font-bold !text-green-400">
                                                ₹{Number(item?.price || 0).toLocaleString()}
                                            </td>

                                            <td className="!px-6 !py-6 !text-base !font-semibold !text-blue-400">
                                                {item?.sales ?? 0}
                                            </td>

                                            <td className="!px-6 !py-6">
                                                <div className="!flex !items-center !justify-center !gap-3">

                                                    <Tooltip
                                                        title="View"
                                                        placement="top"
                                                    >
                                                        <Link
                                                            to={`/Productdetail/${item._id}`}
                                                            className="!flex !items-center !justify-center !rounded-lg !border !border-blue-500/30 !bg-blue-600/20 !p-2 !text-blue-400 !shadow-md !transition-all !duration-200 hover:!scale-110 hover:!border-blue-400/50 hover:!bg-blue-600/40 hover:!text-blue-300"
                                                        >
                                                            <FaEye size={16} />
                                                        </Link>
                                                    </Tooltip>

                                                    <Tooltip
                                                        title="Edit"
                                                        placement="top"
                                                    >
                                                        <Link
                                                            to={`/editproduct/${item._id}`}
                                                            className="!flex !items-center !justify-center !rounded-lg !border !border-amber-500/30 !bg-amber-600/20 !p-2 !text-amber-400 !shadow-md !transition-all !duration-200 hover:!scale-110 hover:!border-amber-400/50 hover:!bg-amber-600/40 hover:!text-amber-300"
                                                        >
                                                            <CiEdit size={16} />
                                                        </Link>
                                                    </Tooltip>

                                                    <Tooltip
                                                        title="Delete"
                                                        placement="top"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                deleteProduct(item._id)
                                                            }
                                                            className="!flex !items-center !justify-center !rounded-lg !border !border-red-500/30 !bg-red-600/20 !p-2 !text-red-400 !shadow-md !transition-all !duration-200 hover:!scale-110 hover:!border-red-400/50 hover:!bg-red-600/40 hover:!text-red-300"
                                                        >
                                                            <FaRegTrashCan size={16} />
                                                        </button>
                                                    </Tooltip>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="!px-6 !py-20 !text-center"
                                        >
                                            <p className="!m-0 !text-[16px] !font-semibold !text-white">
                                                No products found
                                            </p>

                                            <p className="!m-0 !mt-2 !text-[13px] !text-gray-500">
                                                Try changing your search or category filter.
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>

                    </div>
                </div>

                {totalPages > 1 && (
                    <div className="!mt-6 !flex !justify-center !px-2">

                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            siblingCount={1}
                            boundaryCount={1}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: '#fef3c7'
                                },
                                '& .MuiPaginationItem-root.Mui-selected': {
                                    backgroundColor: '#f97316',
                                    color: '#fff'
                                },
                                '& .MuiPaginationItem-root.Mui-selected:hover': {
                                    backgroundColor: '#ea580c'
                                },
                                '& .MuiPaginationItem-root:hover': {
                                    backgroundColor:
                                        'rgba(249,115,22,0.12)'
                                },
                                '& .MuiPaginationItem-root.Mui-disabled': {
                                    color: 'rgba(255,255,255,0.20)'
                                }
                            }}
                        />

                    </div>
                )}

                {!loading && allProducts.length > 0 && (
                    <p className="!mt-3 !text-center !text-[12px] !text-white/40">
                        Showing {(page - 1) * 10 + 1}
                        {' - '}
                        {Math.min(
                            page * 10,
                            totalProducts
                        )}
                        {' of '}
                        {totalProducts}
                    </p>
                )}

            </div>
        </div>
    )
}

export default ProductsTable