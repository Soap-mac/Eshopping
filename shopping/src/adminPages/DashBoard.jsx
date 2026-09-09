import React, { useEffect, useState } from 'react'
import Header from '../adminComponents/Header.jsx'
import Sidebar from '../adminComponents/Sidebar.jsx'
import DashboardSlider from '../adminComponents/DashboardSlider.jsx'
import admin_hero from '../assets/admin_hero.png'
import RecentTable from '../adminComponents/RecentTable.jsx'
import ProductsTable from '../adminComponents/ProductsTable.jsx'
import Chart1 from '../adminComponents/Chart1.jsx'
import { handleError } from '../utils'

function DashBoard() {
    const [allProducts, setAllProducts] = useState([])
    const [dashboardStats, setDashboardStats] = useState(null)
    const [chartData, setChartData] = useState([])

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalProducts, setTotalProducts] = useState(0)

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [productsLoading, setProductsLoading] = useState(false)

    const API = import.meta.env.VITE_API_URL

    useEffect(() => {
        const controller = new AbortController()

        const fetchingProducts = async () => {
            setProductsLoading(true)

            try {
                const params = new URLSearchParams()

                params.set('page', String(page))
                params.set('limit', '10')

                if (search.trim()) {
                    params.set('search', search.trim())
                }

                const url = `${API}/getproducts?${params.toString()}`

                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    signal: controller.signal
                })

                const result = await response.json()

                if (!response.ok || !result.success) {
                    throw new Error(
                        result?.message || 'Failed to load products'
                    )
                }

                setAllProducts(
                    Array.isArray(result.allProducts)
                        ? result.allProducts
                        : []
                )

                setTotalPages(
                    Math.max(
                        Number(result.totalPages) || 1,
                        1
                    )
                )

                setTotalProducts(
                    Number(result.totalProducts) || 0
                )
            } catch (error) {
                if (error.name === 'AbortError') {
                    return
                }

                console.error(error)
                setAllProducts([])
                setTotalPages(1)
                setTotalProducts(0)
                handleError('Failed to load products')
            } finally {
                if (!controller.signal.aborted) {
                    setProductsLoading(false)
                }
            }
        }

        fetchingProducts()

        return () => controller.abort()
    }, [API, page, search])

    useEffect(() => {
        const fetchingStats = async () => {
            try {
                const url = `${API}/getDashboardStats`

                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include'
                })

                const result = await response.json()

                if (result.success) {
                    setDashboardStats(result.stats)
                    setChartData(
                        Array.isArray(result.chart)
                            ? result.chart
                            : []
                    )
                } else {
                    handleError('Failed to load dashboard stats')
                }
            } catch (error) {
                console.error(error)
                handleError('Failed to load dashboard stats')
            }
        }

        fetchingStats()
    }, [API])

    const handleSearchChange = (value) => {
        setSearch(value)
        setPage(1)
    }

    const handleCategoryChange = (value) => {
        setCategory(value)
        setPage(1)
    }

    return (
        <>
            <div className="!min-h-screen !w-full !bg-black">

                <div className="!fixed !top-0 !left-0 !z-30 !hidden lg:!block !h-screen !w-[300px] !overflow-x-hidden !overflow-y-auto !bg-black !box-border">
                    <Sidebar />
                </div>

                <div className="!min-w-0 !w-[calc(100%-300px)] !ml-[300px] !box-border">

                    <div className="!bg-transparent !rounded-xl !p-8 !border !border-slate-700 !mx-4 md:!mx-6 lg:!mx-10 !my-6 hover:!border-orange-500/50 !transition-all !duration-300">

                        <div className="!flex !flex-col lg:!flex-row !items-center !justify-between !gap-8">

                            <div className="!flex-1 !space-y-6">

                                <div className="!space-y-4">

                                    <h1 className="!text-3xl lg:!text-4xl !font-bold !text-white !leading-tight">
                                        Good Morning,
                                        <span className="!text-orange-500 !ml-2">
                                            Admin
                                        </span>
                                    </h1>

                                    <p className="!text-gray-400 !text-lg !leading-relaxed !max-w-md">
                                        Here's what happened to your store
                                        today. See the stats at once
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    className="!w-full sm:!w-[300px] !px-6 !py-3 !bg-orange-500 !text-white !font-semibold !rounded-[20px] hover:!bg-orange-400 !transform hover:!scale-105 !transition-all !duration-300 !shadow-lg hover:!shadow-orange-500/25"
                                >
                                    <span className="!mr-2 !text-xl">
                                        +
                                    </span>
                                    Add New Product
                                </button>

                            </div>

                            <div className="!relative !flex-shrink-0">

                                <div className="!relative">

                                    <div className="!absolute !inset-0 !bg-orange-500/20 !rounded-2xl !blur-2xl !scale-110"></div>

                                    <div className="!relative !bg-slate-700/30 !rounded-2xl !p-4 !border !border-slate-600 !backdrop-blur-sm">

                                        <img
                                            src={admin_hero}
                                            alt="Admin Dashboard Illustration"
                                            className="!w-full !max-w-sm lg:!max-w-md !h-auto !object-contain !rounded-xl !transform hover:!scale-105 !transition-transform !duration-500"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <DashboardSlider stats={dashboardStats} />

                    <RecentTable />

                    <ProductsTable
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        category={category}
                        setCategory={handleCategoryChange}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                        totalProducts={totalProducts}
                        loading={productsLoading}
                        searchQuery={search}
                        setSearchQuery={handleSearchChange}
                    />

                    <Chart1 data={chartData} />

                </div>

            </div>
        </>
    )
}

export default DashBoard