import React, { useEffect, useState } from 'react'
import Sidebar from '../adminComponents/Sidebar'
import ProductsTable from '../adminComponents/ProductsTable'
import { handleError } from '../utils';
import { Link } from 'react-router-dom';

function AllProducts() {

    const [category, setCategory] = useState("All");
    const [subCategory, setSubCategory] = useState("");
    const [innerSubCategory, setInnerSubCategory] = useState("");

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                let url =
                    `${import.meta.env.VITE_API_URL}/getproducts?page=${page}&limit=10`;

                if (category !== "All") {
                    url += `&category=${category}`;
                }

                if (subCategory) {
                    url += `&subCategory=${subCategory}`;
                }

                if (innerSubCategory) {
                    url += `&innerSubCategory=${innerSubCategory}`;
                }
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include'
                });
                const result = await response.json();
                console.log(result);
                setAllProducts(result.allProducts);
            } catch (error) {
                console.log(error);
                handleError(error);
            }
        }
        fetchingProducts();
    }, [
        category,
        subCategory,
        innerSubCategory,
        page
    ]);
    return (
        <div className="flex justify-between !h-full">

            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>

            <div className="flex-1 h-full bg-transparent min-w-0">

                <div className="bg-transparent rounded-xl !p-6 border border-slate-700 !mx-4 md:mx-6 lg:mx-10 !my-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 !mb-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-white !mb-2">
                                All Products
                            </h1>
                            <p className="text-gray-400">
                                Manage your entire product inventory
                            </p>
                        </div>
                        <Link to='/addproducts'>
                            <button className="!px-6 !py-3 w-full sm:!w-[300px] bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group flex items-center justify-center hover:cursor-pointer">
                                <span className="!mr-2 text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
                                <div className="">Add Product</div>

                            </button>
                        </Link>
                    </div>
                </div>

                <div className="!mx-4 md:mx-6 lg:mx-10">
                    <ProductsTable
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        category={category}
                        setCategory={setCategory}
                        subCategory={subCategory}
                        setSubCategory={setSubCategory}
                        innerSubCategory={innerSubCategory}
                        setInnerSubCategory={setInnerSubCategory}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default AllProducts