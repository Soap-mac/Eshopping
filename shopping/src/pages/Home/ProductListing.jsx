import React, { useState } from 'react'
import Top from '../../components/top/top'
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

    return (
        <>
            <Top />
            <Header />
            <Navbar />
            <div className="breadcrum-container !text-amber-50 !pt-[10px] !pb-[10px] !px-[90px] bg-[#1e1e1e]">
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
            <div className="product-container flex bg-black ">
                <div className="left-side text-amber-50 bg-black w-[20%] !py-[10px] !pl-[20px]">
                    <SideBarProducts />
                </div>
                <div className="right-side w-[75%]  bg-black !pl-[30px] !pt-[10px]">
                    <div className="product-options bg-amber-50 h-[40px] flex justify-between items-center rounded-[10px] ">
                        <div className="view-side flex justify-between items-center">
                            <div className="views flex justify-between items-center gap-[10px] !pl-[10px]">
                                <Button className={`!min-w-0 !rounded-full !pl-[8px] black ${IsItemView === 'list' && 'active'}`} onClick={() => setIsItemView('list')}>
                                    <FaListUl className='!text-[18px]' />
                                </Button>
                                <Button className={`!min-w-0 !rounded-full !pl-[8px] black ${IsItemView === 'grid' && 'active'}`} onClick={() => setIsItemView('grid')}>
                                    <BsFillGridFill className='!text-[18px]' />
                                </Button>

                            </div>
                            <p className='!ml-[30px] text-[14px]'>X number of Items</p>
                        </div>
                        <div className="sort-side flex justify-around items-center !mr-[20px] gap-3">
                            <p>SORT BY :</p>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!text-black !bg-[#d7d5d5] !w-[300px] !rounded-2xl'
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
                            <div className="grid grid-cols-5 md:grid-cols-5 gap-y-[40px] !pt-[30px]">
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
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-y-[40px] !pt-[30px]">
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