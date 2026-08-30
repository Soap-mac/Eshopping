import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaCodeCompare } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));


function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="!text-white bg-black border-b border-gray-700 w-[1240px] h-[90px]">
                <div className="flex items-center justify-between !p-4">
                    <div className="flex items-center gap-2">
                        <Button className='!w-[56px] !min-w-[0px] !h-[56px] !text-orange-400 !rounded-full !text-[18px] !border-2 !border-[#5b5656] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300'>
                            <IoMenu className='text-[20px]' />
                        </Button>
                        <Button className='!w-[56px] !min-w-[0px] !h-[56px] !text-orange-400 !rounded-full !text-[18px] !border-2 !border-[#5b5656] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300'>
                            <FaSearch className='text-[20px]' />
                        </Button>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='!w-[55px] !min-w-[0px] !h-[55px] !text-orange-400 !rounded-full !text-[18px] !border-2 !border-[#5b5656] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300'
                            >
                                <FaUser className='text-[20px]' />
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
                                className='profile-dropdown-menu'
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: '#1f2937',
                                        border: '1px solid #4b5563',
                                        borderRadius: '8px',
                                        minWidth: '280px'
                                    }
                                }}
                            >

                                <div className="!px-4 !py-3 border-b border-gray-600">
                                    <div className="flex items-center !space-x-3">
                                        <div className="relative">
                                            <img
                                                className="!w-12 !h-12 rounded-full object-cover !ring-2 !ring-orange-400/20"
                                                src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740"
                                                alt="Profile"
                                            />
                                        </div>
                                        <div className="flex-1 !min-w-0">
                                            <p className="text-sm font-semibold text-white truncate">
                                                Arpit Mishra
                                            </p>
                                            <p className="text-xs text-gray-400 truncate">
                                                arpit@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="!py-2">
                                    <MenuItem
                                        onClick={handleClose}
                                        className="!px-4 !py-3 hover:!bg-gray-700 !transition-colors !duration-200"
                                        sx={{
                                            color: '#e5e7eb',
                                            '&:hover': {
                                                backgroundColor: '#374151'
                                            }
                                        }}
                                    >
                                        <Link to='/profile'>
                                            <div className="flex items-center !space-x-3 !w-full">
                                                <FaUser className="text-orange-400 text-sm" />
                                                <span className="text-sm font-medium">My Profile</span>
                                            </div>
                                        </Link>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={handleClose}
                                        className="!px-4 !py-3 hover:!bg-gray-700 !transition-colors !duration-200"
                                        sx={{
                                            color: '#e5e7eb',
                                            '&:hover': {
                                                backgroundColor: '#374151'
                                            }
                                        }}
                                    >
                                        <div className="flex items-center !space-x-3 !w-full">
                                            <MdShoppingBag className="text-orange-400 text-sm" />
                                            <span className="text-sm font-medium">My Orders</span>
                                        </div>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={handleClose}
                                        className="!px-4 !py-3 hover:!bg-gray-700 !transition-colors !duration-200"
                                        sx={{
                                            color: '#e5e7eb',
                                            '&:hover': {
                                                backgroundColor: '#374151'
                                            }
                                        }}
                                    >
                                        <div className="flex items-center !space-x-3 !w-full">
                                            <FaHeart className="text-orange-400 text-sm" />
                                            <span className="text-sm font-medium">Wishlist</span>
                                        </div>
                                    </MenuItem>
                                </div>


                                <div className="border-t border-gray-600 !py-2">
                                    <MenuItem
                                        onClick={handleClose}
                                        className="!px-4 !py-3 hover:!bg-red-900/20 !transition-colors !duration-200"
                                        sx={{
                                            color: '#ef4444',
                                            '&:hover': {
                                                backgroundColor: 'rgba(239, 68, 68, 0.1)'
                                            }
                                        }}
                                    >
                                        <div className="flex items-center !space-x-3 !w-full">
                                            <BiLogOut className="text-red-500 text-sm" />
                                            <span className="text-sm font-medium">Logout</span>
                                        </div>
                                    </MenuItem>
                                </div>
                            </Menu>
                        </div>
                        <div className="!w-[56px] !min-w-[0px] !h-[56px] !text-orange-400 !rounded-full !text-[18px] flex justify-center items-center !pr-1 !border-2 !border-[#5b5656] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.1)] hover:!translate-y-[-2px] !transition-all !duration-300">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <FaBell className='!text-orange-400' />
                                </StyledBadge>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header