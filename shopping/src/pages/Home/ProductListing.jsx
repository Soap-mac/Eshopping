import React, { useEffect, useState } from 'react'
import { FaFilter, FaListUl } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Footer from "../../components/Footer/Footer"
import Breadcrumbs from '@mui/material/Breadcrumbs'
import SideBarProducts from '../../components/SideBarProducts/SideBarProducts'
import Productitems from '../../components/productItems/productitems'
import ProductitemListView from '../../components/ProdusctItemListView/ProductItemListView'
import { BsFillGridFill } from "react-icons/bs"
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useSearchParams } from 'react-router-dom'

function ProductListing() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [anchorEl, setAnchorEl] = useState(null)
    const [isItemView, setIsItemView] = useState('grid')
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const open = Boolean(anchorEl)

    const API = import.meta.env.VITE_API_URL

    const queryString = searchParams.toString()

    const currentPage = Math.max(
        1,
        Number(searchParams.get('page')) || 1
    )

    const currentSort = searchParams.get('sort') || '-createdAt'

    const sortOptions = [
        {
            value: '-createdAt',
            label: 'Newest First'
        },
        {
            value: 'name',
            label: 'Name A to Z'
        },
        {
            value: '-name',
            label: 'Name Z to A'
        },
        {
            value: 'price',
            label: 'Price, Low to High'
        },
        {
            value: '-price',
            label: 'Price, High to Low'
        },
        {
            value: '-discount',
            label: 'Discount, Highest To Lowest'
        }
    ]

    const currentSortLabel =
        sortOptions.find(
            option => option.value === currentSort
        )?.label || 'Newest First'

    const handleSortMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleSortMenuClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        const controller = new AbortController()

        const fetchProducts = async () => {
            setLoading(true)
            setError('')

            try {
                const params = new URLSearchParams(queryString)

                params.set('page', String(currentPage))
                params.set('limit', '10')

                if (!params.get('sort')) {
                    params.set('sort', '-createdAt')
                }

                const response = await fetch(
                    `${API}/getproducts?${params.toString()}`,
                    {
                        method: 'GET',
                        credentials: 'include',
                        signal: controller.signal
                    }
                )

                const data = await response.json()

                if (!response.ok || !data.success) {
                    throw new Error(
                        data?.message || 'Failed to load products'
                    )
                }

                const fetchedProducts = Array.isArray(data.allProducts)
                    ? data.allProducts
                    : []

                setProducts(fetchedProducts)
                setTotalProducts(Number(data.totalProducts) || 0)
                setTotalPages(
                    Math.max(Number(data.totalPages) || 1, 1)
                )
            } catch (err) {
                if (err.name === 'AbortError') {
                    return
                }

                console.error(err)

                setProducts([])
                setTotalProducts(0)
                setTotalPages(1)
                setError(
                    err?.message ||
                    'Unable to load products right now'
                )
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchProducts()

        return () => controller.abort()
    }, [API, queryString, currentPage])

    const handleSortChange = (sort) => {
        handleSortMenuClose()

        const nextParams = new URLSearchParams(searchParams)

        nextParams.set('sort', sort)
        nextParams.set('page', '1')

        setSearchParams(nextParams)
    }

    const handlePageChange = (_, page) => {
        const nextParams = new URLSearchParams(searchParams)

        nextParams.set('page', String(page))

        setSearchParams(nextParams)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleRetry = () => {
        window.location.reload()
    }

    return (
        <>
            <Header />

            <Navbar />

            <div className="!bg-[#1e1e1e] !px-4 sm:!px-8 lg:!px-[90px] !py-[10px]">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    className="!text-amber-50"
                >
                    <Link
                        to="/"
                        className="!text-amber-50 hover:!text-orange-400 !transition-colors"
                    >
                        Home
                    </Link>

                    <span className="!text-white/70">
                        Products
                    </span>
                </Breadcrumbs>
            </div>

            <div className="!flex !min-w-0 !flex-col lg:!flex-row !bg-black">

                <div className="!w-full lg:!w-[20%] !bg-black !px-4 lg:!pl-[20px] lg:!pr-0 !py-[10px] !text-amber-50">

                    <button
                        type="button"
                        onClick={() =>
                            setIsFilterOpen(value => !value)
                        }
                        className="lg:!hidden !flex !w-full !items-center !gap-2 !rounded-lg !border !border-white/10 !bg-[#1e1e1e] !px-4 !py-2.5 !mb-2 !text-amber-50"
                    >
                        <FaFilter className="!text-orange-400" />

                        {isFilterOpen
                            ? 'Hide Filters'
                            : 'Show Filters'}
                    </button>

                    <div
                        className={`${isFilterOpen
                                ? '!block'
                                : '!hidden'
                            } lg:!block`}
                    >
                        {/* <SideBarProducts /> */}
                    </div>

                </div>

                <div className="!w-full lg:!w-[75%] !min-w-0 !bg-black !px-4 lg:!pl-[30px] lg:!pr-0 !pt-[10px] !pb-10">

                    <div className="!flex !min-w-0 !flex-col sm:!flex-row !items-center !justify-between !gap-2 !rounded-xl !border !border-white/[0.08] !bg-[#151515] !px-3 sm:!px-4 !py-2 lg:!h-[48px] !shadow-[0_4px_20px_rgba(0,0,0,0.25)]">

                        <div className="!flex !w-full sm:!w-auto !items-center !justify-between sm:!justify-start">

                            <div className="!flex !items-center !gap-[8px] !pl-[4px]">

                                <Button
                                    type="button"
                                    onClick={() =>
                                        setIsItemView('list')
                                    }
                                    aria-label="List view"
                                    className={`!min-w-0 !h-[34px] !w-[34px] !rounded-full !p-0 !transition-all ${isItemView === 'list'
                                            ? '!bg-orange-500 !text-white !shadow-[0_4px_14px_rgba(249,115,22,0.25)]'
                                            : '!bg-white/[0.04] !text-white/50 hover:!bg-white/[0.08] hover:!text-white'
                                        }`}
                                >
                                    <FaListUl className="!text-[16px]" />
                                </Button>

                                <Button
                                    type="button"
                                    onClick={() =>
                                        setIsItemView('grid')
                                    }
                                    aria-label="Grid view"
                                    className={`!min-w-0 !h-[34px] !w-[34px] !rounded-full !p-0 !transition-all ${isItemView === 'grid'
                                            ? '!bg-orange-500 !text-white !shadow-[0_4px_14px_rgba(249,115,22,0.25)]'
                                            : '!bg-white/[0.04] !text-white/50 hover:!bg-white/[0.08] hover:!text-white'
                                        }`}
                                >
                                    <BsFillGridFill className="!text-[16px]" />
                                </Button>

                            </div>

                            <p className="!ml-[22px] sm:!ml-[30px] !whitespace-nowrap !text-[13px] sm:!text-[14px] !font-medium !text-white/70">
                                {totalProducts} Items
                            </p>

                        </div>

                        <div className="!flex !w-full sm:!w-auto !items-center !justify-between sm:!justify-around !gap-3 sm:!mr-[10px] lg:!mr-[20px]">

                            <p className="!whitespace-nowrap !text-[12px] sm:!text-[13px] !font-semibold !tracking-wide !text-white/60">
                                SORT BY :
                            </p>

                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={
                                        open
                                            ? 'basic-menu'
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        open
                                            ? 'true'
                                            : undefined
                                    }
                                    onClick={handleSortMenuOpen}
                                    className="!w-[190px] sm:!w-[300px] !rounded-full !border !border-white/[0.08] !bg-[#242424] hover:!bg-[#2b2b2b] !text-[11px] sm:!text-[13px] !font-medium !text-white !normal-case !transition-colors"
                                >
                                    {currentSortLabel}
                                </Button>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleSortMenuClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby':
                                                'basic-button'
                                        }
                                    }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: '#1b1b1b',
                                            color: '#fef3c7',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            mt: 1,
                                            '& .MuiMenuItem-root': {
                                                fontSize: '13px',
                                                '&:hover': {
                                                    backgroundColor:
                                                        'rgba(249,115,22,0.10)'
                                                },
                                                '&.Mui-selected': {
                                                    backgroundColor:
                                                        'rgba(249,115,22,0.15)'
                                                },
                                                '&.Mui-selected:hover': {
                                                    backgroundColor:
                                                        'rgba(249,115,22,0.20)'
                                                }
                                            }
                                        }
                                    }}
                                >
                                    {sortOptions.map(option => (
                                        <MenuItem
                                            key={option.value}
                                            selected={
                                                option.value === currentSort
                                            }
                                            onClick={() =>
                                                handleSortChange(
                                                    option.value
                                                )
                                            }
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>

                        </div>
                    </div>

                    {loading ? (
                        <div className="!flex !min-h-[500px] !w-full !items-center !justify-center">
                            <div className="!flex !flex-col !items-center !gap-4">
                                <CircularProgress
                                    size={42}
                                    sx={{
                                        color: '#f97316'
                                    }}
                                />

                                <p className="!m-0 !text-[13px] !text-white/40">
                                    Loading products...
                                </p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="!flex !min-h-[500px] !flex-col !items-center !justify-center !px-5 !text-center">

                            <div className="!flex !h-14 !w-14 !items-center !justify-center !rounded-full !bg-red-500/10 !border !border-red-500/20">
                                <span className="!text-[22px] !text-red-400">
                                    !
                                </span>
                            </div>

                            <p className="!m-0 !mt-4 !text-[16px] !font-medium !text-red-400">
                                {error}
                            </p>

                            <p className="!m-0 !mt-2 !max-w-[420px] !text-[13px] !leading-6 !text-white/40">
                                Something went wrong while loading the products.
                                Please try again.
                            </p>

                            <button
                                type="button"
                                onClick={handleRetry}
                                className="!mt-5 !rounded-full !bg-orange-600 !px-5 !py-2.5 !text-[13px] !font-semibold !text-white !transition-colors hover:!bg-orange-500"
                            >
                                Try Again
                            </button>

                        </div>
                    ) : products.length === 0 ? (
                        <div className="!flex !min-h-[500px] !items-center !justify-center !px-5 !text-center">

                            <div>
                                <p className="!m-0 !text-[18px] !font-semibold !text-white">
                                    No Products Found
                                </p>

                                <p className="!m-0 !mt-2 !text-[13px] !text-white/50">
                                    There are no products available for this selection.
                                </p>

                                <Link
                                    to="/Productlisting"
                                    className="!mt-5 !inline-flex !rounded-full !bg-orange-600 !px-5 !py-2.5 !text-[13px] !font-semibold !text-white !transition-colors hover:!bg-orange-500"
                                >
                                    View All Products
                                </Link>
                            </div>

                        </div>
                    ) : isItemView === 'grid' ? (
                        <div className="!grid !grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 xl:!grid-cols-5 !gap-x-3 sm:!gap-x-4 !gap-y-6 sm:!gap-y-[40px] !pt-[20px] sm:!pt-[30px] !justify-items-center">

                            {products.map(product => (
                                <Productitems
                                    key={product._id}
                                    item={product}
                                />
                            ))}

                        </div>
                    ) : (
                        <div className="!grid !grid-cols-1 !gap-y-[24px] sm:!gap-y-[40px] !pt-[20px] sm:!pt-[30px]">

                            {products.map(product => (
                                <ProductitemListView
                                    key={product._id}
                                    item={product}
                                />
                            ))}

                        </div>
                    )}

                    {!loading && !error && totalPages > 1 && (
                        <div className="!mt-[40px] !flex !w-full !justify-center !overflow-x-auto !px-2">

                            <Stack spacing={2}>
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    siblingCount={1}
                                    boundaryCount={1}
                                    sx={{
                                        '& .MuiPaginationItem-root': {
                                            color: '#fef3c7',
                                            borderColor:
                                                'rgba(255,255,255,0.12)'
                                        },

                                        '& .MuiPaginationItem-root.Mui-selected': {
                                            backgroundColor:
                                                '#f97316',
                                            color: '#ffffff'
                                        },

                                        '& .MuiPaginationItem-root.Mui-selected:hover': {
                                            backgroundColor:
                                                '#ea580c'
                                        },

                                        '& .MuiPaginationItem-root:hover': {
                                            backgroundColor:
                                                'rgba(249,115,22,0.12)'
                                        },

                                        '& .MuiPaginationItem-root.Mui-disabled': {
                                            color:
                                                'rgba(255,255,255,0.20)'
                                        }
                                    }}
                                />
                            </Stack>

                        </div>
                    )}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductListing