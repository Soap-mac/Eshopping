import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { Button, Drawer, Box } from '@mui/material';
import { MdOutlineDashboardCustomize, MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdSlideshow } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Collapse } from 'react-collapse';

function Sidebar() {
    const [isOpenMenuIdx, setIsOpenMenuIdx] = useState('null');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Below lg the fixed 300px sidebar would eat most of a phone/tablet
    // screen, so it's hidden there in favour of this off-canvas drawer,
    // opened from a small floating button. Desktop markup below is
    // untouched.
    const [mobileOpen, setMobileOpen] = useState(false);

    const openMenu = (idx) => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpenMenuIdx(idx);
    }

    return (
        <>
            <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open admin menu"
                className="lg:hidden !fixed top-4 left-4 z-40 !p-2.5 rounded-lg bg-black border-2 border-gray-800 text-orange-400 shadow-lg"
            >
                <MdMenu className="text-2xl" />
            </button>

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                className="lg:hidden"
            >
                <Box sx={{ width: 260, maxWidth: '85vw', height: '100%', bgcolor: '#000', overflowY: 'auto' }} role="presentation">
                    <div className="flex items-center justify-between !p-4 border-b border-gray-800">
                        <img src={logo} alt="Logo" className='h-[46px] object-contain' />
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="!p-2 text-gray-400 hover:text-orange-400">
                            <IoMdClose className="text-2xl" />
                        </button>
                    </div>
                    <ul className="!p-3 !space-y-1 text-[15px]">
                        <li><Link to='/admindashboard' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><MdOutlineDashboardCustomize /> Dashboard</Link></li>
                        <li><Link to='/AllUsers' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><FaUser /> User</Link></li>
                        <li><Link to='/addproducts' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><FaProductHunt /> Add New Product</Link></li>
                        <li><Link to='/allproducts' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">All Products</Link></li>
                        <li><Link to='/allcategories' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><AiOutlineProduct /> Category List</Link></li>
                        <li><Link to='/AddCategory' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">Add a Category</Link></li>
                        <li><Link to='/AllSubCategories' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">SubCategory List</Link></li>
                        <li><Link to='/AddSubCategory' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">Add a SubCategory</Link></li>
                        <li><Link to='/allInnerCategory' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">Inner Category List</Link></li>
                        <li><Link to='/addInnerCategory' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">Add Inner Category</Link></li>
                        <li><Link to='/AllOrders' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><IoBagCheckSharp /> Orders</Link></li>
                        <li><Link to='/Addslider' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><MdSlideshow /> Add Slider</Link></li>
                        <li><Link to='/allslider' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 !pl-9 rounded-lg text-orange-400 hover:bg-white/5">All Sliders</Link></li>
                        <li><Link to='/' onClick={() => setMobileOpen(false)} className="!flex items-center gap-3 !px-3 !py-2.5 rounded-lg text-orange-400 hover:bg-white/5"><BiLogOut /> Logout</Link></li>
                    </ul>
                </Box>
            </Drawer>

            <div className="!hidden lg:!flex bg-black min-h-screen w-[300px] !p-4 flex-col border-r border-gray-800">

            <div className="!mb-8 flex justify-center">
                <Link>
                    <img src={logo} alt="Logo" className='h-[100px] w-[200px] object-contain' />
                </Link>
            </div>


            <div className="flex-1">
                <ul className="!space-y-3 transition-all duration-300">
                    <li>
                        <Button
                            component={Link} to='/admindashboard'
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                        >
                            <MdOutlineDashboardCustomize className="!mr-3 text-lg" />
                            Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button
                            component={Link} to='/AllUsers'
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                        >
                            <FaUser className="!mr-3 text-lg" />
                            User
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                            onClick={() => openMenu(3)}
                        >
                            <FaProductHunt className="!mr-3 text-lg" />
                            Products
                            {
                                isMenuOpen && isOpenMenuIdx === 3 ? <FaChevronUp className='!ml-[98px]' /> : <FaChevronDown className='!ml-[98px]' />
                            }

                        </Button>
                        {
                            isOpenMenuIdx === 3 &&
                            <Collapse isOpened={isMenuOpen}>
                                <ul className="!space-y-3">
                                    <li>
                                        <Button
                                            component={Link} to='/addproducts'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Add New Product</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/allproducts'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >All Products</Button>
                                    </li>
                                </ul>
                            </Collapse>
                        }
                    </li>
                    <li>
                        <Button
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                            onClick={() => openMenu(4)}
                        >
                            <AiOutlineProduct className="!mr-3 text-lg" />
                            Category
                            {
                                isMenuOpen && isOpenMenuIdx === 4 ? <FaChevronUp className='!ml-[95px]' /> : <FaChevronDown className='!ml-[95px]' />
                            }

                        </Button>
                        {
                            isOpenMenuIdx === 4 &&
                            <Collapse isOpened={isMenuOpen}>
                                <ul className="!space-y-3">
                                    <li>
                                        <Button
                                            component={Link} to='/allcategories'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Category List</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/AddCategory'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Add a Category</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/AllSubCategories'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >SubCategory List</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/AddSubCategory'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Add a SubCategory</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/allInnerCategory'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Inner Category List</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/addInnerCategory'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Add Inner Category</Button>
                                    </li>
                                </ul>
                            </Collapse>
                        }
                    </li>
                    <li>
                        <Button
                            component={Link} to='/AllOrders'
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                        >
                            <IoBagCheckSharp className="!mr-3 text-lg" />
                            Orders
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                            onClick={() => openMenu(6)}
                        >
                            <MdSlideshow className="!mr-3 text-lg" />
                            Home Slides
                            {
                                isMenuOpen && isOpenMenuIdx === 6 ? <FaChevronUp className='!ml-[66px]' /> : <FaChevronDown className='!ml-[66px]' />
                            }
                        </Button>
                        {
                            isOpenMenuIdx === 6 &&
                            <Collapse isOpened={isMenuOpen}>
                                <ul className="!space-y-3">
                                    <li>
                                        <Button
                                            component={Link} to='/Addslider'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[15px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >Add Slider</Button>
                                    </li>
                                    <li>
                                        <Button
                                            component={Link} to='/allslider'
                                            className="!ml-[40px] !w-[200px] !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[15px]"
                                            sx={{

                                                padding: '8px 20px',

                                            }}
                                        >All Sliders</Button>
                                    </li>
                                </ul>
                            </Collapse>
                        }
                    </li>
                    <li>
                        <Button
                            className="!w-full !justify-start !text-orange-400 !normal-case !border-2 !border-[#000] !rounded-[20px] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300 !text-[16px]"
                            sx={{

                                padding: '12px 16px',

                            }}
                        >
                            <BiLogOut className="!mr-3 text-lg" />
                            Logout
                        </Button>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Sidebar