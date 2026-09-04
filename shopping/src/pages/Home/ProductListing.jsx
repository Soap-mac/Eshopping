import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Footer from "../../components/Footer/Footer"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SideBarProducts from '../../components/SideBarProducts/SideBarProducts'
import Productitems from '../../components/productItems/productitems';
import ProductitemListView from '../../components/ProdusctItemListView/ProductItemListView'
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ProductListing() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [IsItemView, setIsItemView] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <>
            {/* <Top /> */}
            <Header />
            <Navbar />
            <div className="breadcrum-container !text-amber-50 !pt-[10px] !pb-[10px] !px-4 sm:!px-8 lg:!px-[90px] bg-[#1e1e1e]">
                <div role="presentation" >
                    <Breadcrumbs aria-label="breadcrumb" className='!text-amber-50'>
                        <Link underline="hover" color="inherit" href="/" className='link transition'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className='link transition'
                        >
                            Fashion
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="product-container flex flex-col lg:flex-row bg-black">
                <div className="left-side text-amber-50 bg-black w-full lg:w-[20%] !py-[10px] !px-4 lg:!pl-[20px] lg:!pr-0">
                    <button
                        onClick={() => setIsFilterOpen((v) => !v)}
                        className="lg:hidden flex items-center gap-2 !w-full !py-2.5 !px-4 !mb-2 rounded-lg bg-[#1e1e1e] text-amber-50 border border-white/10"
                    >
                        <FaFilter className="text-orange-400" />
                        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
                        <SideBarProducts />
                    </div>
                </div>
                <div className="right-side w-full lg:w-[75%] bg-black !px-4 lg:!pl-[30px] lg:!pr-0 !pt-[10px]">
                    <div className="product-options bg-amber-50 !py-2 lg:h-[40px] flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center rounded-[10px] !px-2 sm:!px-0">
                        <div className="view-side flex justify-between sm:justify-start items-center w-full sm:w-auto">
                            <div className="views flex justify-between items-center gap-[10px] !pl-[10px]">
                                <Button className={`!min-w-0 !rounded-full !pl-[8px] black ${IsItemView === 'list' && 'active'}`} onClick={() => setIsItemView('list')}>
                                    <FaListUl className='!text-[18px]' />
                                </Button>
                                <Button className={`!min-w-0 !rounded-full !pl-[8px] black ${IsItemView === 'grid' && 'active'}`} onClick={() => setIsItemView('grid')}>
                                    <BsFillGridFill className='!text-[18px]' />
                                </Button>

                            </div>
                            <p className='!ml-[30px] text-[13px] sm:text-[14px] whitespace-nowrap'>X number of Items</p>
                        </div>
                        <div className="sort-side flex justify-between sm:justify-around items-center w-full sm:w-auto !mr-0 sm:!mr-[20px] gap-3">
                            <p className="text-[13px] sm:text-base whitespace-nowrap">SORT BY :</p>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!text-black !bg-[#d7d5d5] !w-[220px] sm:!w-[300px] !rounded-2xl !text-[12px] sm:!text-sm'
                                >
                                    Sales, Highest To Lowest
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                    }}


                                >
                                    <MenuItem onClick={handleClose}>Sales, Highest To Lowest</MenuItem>
                                    <MenuItem onClick={handleClose}>Name A to Z</MenuItem>
                                    <MenuItem onClick={handleClose}>Name Z to A</MenuItem>
                                    <MenuItem onClick={handleClose}>Price, Low to High</MenuItem>
                                    <MenuItem onClick={handleClose}>Price, High to Low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {
                        IsItemView === 'grid' ?
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-4 gap-y-6 sm:gap-y-[40px] !pt-[20px] sm:!pt-[30px] justify-items-center">
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                                <Productitems />
                            </div> :
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-y-[24px] sm:gap-y-[40px] !pt-[20px] sm:!pt-[30px]">
                                <ProductitemListView />
                                <ProductitemListView />
                                <ProductitemListView />
                                <ProductitemListView />

                            </div>
                    }

                    <div className="pagination !mt-[30px] !mb-[-30px]">
                        <Stack spacing={2}>
                            <Pagination count={10} />

                        </Stack>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListing