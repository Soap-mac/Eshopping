import React, { useContext, useEffect, useState } from 'react'
import "./headerStyle.css"
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import { IoIosCart } from "react-icons/io";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import logo from '../../assets/logo2.png';
import { MyContext } from '../../App';
import { FaUser } from "react-icons/fa";
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag, MdClose } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { handleSucess, handleError } from '../../utils';
import { useNavigate } from 'react-router-dom';

const PLACEHOLDER_IMG = 'https://placehold.co/120x120/1a1a1a/f43f5e?text=Item';

// Cart badge stays amber (on-brand), wishlist badge gets a warm rose so the
// two are readable at a glance without introducing a new color to the theme.
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const CartBadge = styled(StyledBadge)(() => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#f59e0b',
        color: '#1a1408',
        fontWeight: 700,
    },
}));

const WishlistBadge = styled(StyledBadge)(() => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#f43f5e',
        color: '#1a0a0d',
        fontWeight: 700,
    },
}));

const actionBtnClass =
    '!w-[42px] lg:!w-[56px] !min-w-[0px] !h-[42px] lg:!h-[56px] !text-orange-400 !rounded-full !text-[18px] flex justify-center items-center ' +
    '!border !border-white/[0.12] !bg-white/[0.03] hover:!border-[#f59e0b] hover:!bg-[rgba(245,158,11,0.12)] ' +
    'hover:!-translate-y-[2px] hover:!shadow-[0_4px_14px_rgba(245,158,11,0.25)] !transition-all !duration-300 ' +
    'focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-[#f59e0b] focus-visible:!outline-offset-2';
function Header() {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    // Real counts for the badges. Cart count still comes from /getCart since
    // the cart drawer itself lives outside this component (untouched, still
    // opened via context.setOpenCartDrawer as before).
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    // Wishlist drawer — same "click badge, side panel opens" pattern as the
    // cart, but self-contained here since there's no external wishlist
    // drawer to hook into yet.
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [wishlistNotice, setWishlistNotice] = useState('');
    const [removingId, setRemovingId] = useState(null);

    const API = import.meta.env.VITE_API_URL;

    const fetchCounts = async () => {
        if (!context?.isLogin) {
            setCartCount(0);
            setWishlistCount(0);
            return;
        }
        try {
            const [cartRes, wishRes] = await Promise.all([
                fetch(`${API}/getCart`, { credentials: 'include' }),
                fetch(`${API}/getwishlist`, { credentials: 'include' }),
            ]);
            const cartData = await cartRes.json();
            const wishData = await wishRes.json();
            setCartCount(Array.isArray(cartData.cart) ? cartData.cart.length : 0);
            setWishlistCount(Array.isArray(wishData.allProducts) ? wishData.allProducts.length : 0);
        } catch (err) {
            console.log('Failed to load cart/wishlist counts', err);
        }
    };

    useEffect(() => {
        fetchCounts();

    }, [context?.isLogin]);

    const fetchWishlist = async () => {
        setWishlistLoading(true);
        setWishlistNotice('');
        try {
            const res = await fetch(`${API}/getwishlist`, { credentials: 'include' });
            const data = await res.json();
            if (!res.ok) {
                setWishlistNotice(data.message || 'Please login to view your wishlist');
                setWishlistItems([]);
                setWishlistCount(0);
                return;
            }
            const products = Array.isArray(data.allProducts) ? data.allProducts.filter(Boolean) : [];
            setWishlistItems(products);
            setWishlistCount(products.length);
        } catch (err) {
            console.log(err);
            handleError('Could not load your wishlist');
        } finally {
            setWishlistLoading(false);
        }
    };

    useEffect(() => {
        if (wishlistOpen) fetchWishlist();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wishlistOpen]);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const url = `${API}/logout`;
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: { 'content-Type': 'application/json' }
            });
            const result = await response.json();
            if (result.success) {
                handleSucess(result.message);
                context?.setIsLogin(false);
                setTimeout(() => navigate('/'), 3000);
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError(error);
        }
    }

    return (
        <>
            <div className="header">
                <div className="headerContainer !flex !flex-col lg:!flex-row lg:!items-center lg:!justify-between border-b-1 border-gray-700">

                    <div className="flex items-center justify-between w-full min-w-0 lg:contents">
                        <div className="col1 lg:order-1 lg:w-[25%] flex-shrink-0">
                            <img className='headerImg' src={logo} alt="logo" />
                        </div>
                        <div className="col3 lg:order-3 lg:w-[30%] min-w-0 flex-shrink-0">
                            <ul className='flex items-center gap-2 sm:gap-3'>
                                {
                                    context?.isLogin === false ?
                                        <li className='list-none'>
                                            <Link
                                                to="/login"
                                                className='!flex !items-center !gap-2 !px-4 !h-[42px] lg:!h-[56px] !rounded-full !border !border-white/[0.12] !bg-white/[0.03] !text-gray-200 hover:!text-amber-400 hover:!border-amber-500/60 hover:!bg-[rgba(245,158,11,0.08)] !transition-all !duration-300 !text-[14px] lg:!text-[15px] !font-medium whitespace-nowrap'
                                            >
                                                <FaUser className='text-[13px] opacity-70' />
                                                Login <span className="text-gray-500">/</span> Signup
                                            </Link>
                                        </li> :
                                        <div>
                                            <Tooltip title="My Account" arrow>
                                                <Button
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                    className={`${actionBtnClass} lg:!ml-[50px]`}
                                                >
                                                    <FaUser className='text-[20px]' />
                                                </Button>
                                            </Tooltip>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                slotProps={{ list: { 'aria-labelledby': 'basic-button' } }}
                                                className='profile-dropdown-menu'
                                            >
                                                <div className="!px-4 !py-3 border-b border-gray-600">
                                                    <div className="flex items-center !space-x-3">
                                                        <img
                                                            className="!w-12 !h-12 rounded-full object-cover !ring-2 !ring-orange-400/20"
                                                            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740"
                                                            alt="Profile"
                                                        />
                                                        <div className="flex-1 !min-w-0">
                                                            <p className="text-sm font-semibold text-white truncate">{context?.name}</p>
                                                            <p className="text-xs text-gray-400 truncate">{context?.email}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="!py-2">
                                                    <MenuItem onClick={handleClose} className="!px-4 !py-3 hover:!bg-gray-700 !transition-colors !duration-200" sx={{ color: '#e5e7eb', '&:hover': { backgroundColor: '#374151' } }}>
                                                        <Link to='/profile'>
                                                            <div className="flex items-center !space-x-3 !w-full">
                                                                <FaUser className="text-orange-400 text-sm" />
                                                                <span className="text-sm font-medium">My Profile</span>
                                                            </div>
                                                        </Link>
                                                    </MenuItem>


                                                    <MenuItem className="!px-4 !py-3 hover:!bg-gray-700 !transition-colors !duration-200" sx={{ color: '#e5e7eb', '&:hover': { backgroundColor: '#374151' } }}>
                                                        <div className="flex items-center !space-x-3 !w-full">
                                                            <FaHeart className="text-orange-400 text-sm" />
                                                            <span className="text-sm font-medium">Wishlist</span>
                                                        </div>
                                                    </MenuItem>
                                                </div>

                                                <div className="border-t border-gray-600 !py-2">
                                                    <MenuItem onClick={handleClose} className="!px-4 !py-3 hover:!bg-red-900/20 !transition-colors !duration-200" sx={{ color: '#ef4444', '&:hover': { backgroundColor: 'rgba(239, 68, 68, 0.1)' } }}>
                                                        <div className="flex items-center !space-x-3 !w-full" onClick={handleLogout}>
                                                            <BiLogOut className="text-red-500 text-sm" />
                                                            <span className="text-sm font-medium">Logout</span>
                                                        </div>
                                                    </MenuItem>
                                                </div>
                                            </Menu>
                                        </div>
                                }
                                <span className="hidden sm:block h-6 w-px bg-white/10 !mx-1"></span>
                                <li className={actionBtnClass} onClick={() => context.setOpenWishlistDrawer(true)}>
                                    <Tooltip title="Wishlist" arrow>
                                        <IconButton className='!p-0' aria-label={`wishlist, ${wishlistCount} items`}>                                            <WishlistBadge badgeContent={wishlistCount} max={99} color="secondary">
                                            <FaRegHeart className='!text-orange-400' />
                                        </WishlistBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li className={actionBtnClass} onClick={() => context.setOpenCartDrawer(true)}>
                                    <Tooltip title="Cart" arrow>
                                        <IconButton className='!p-0' aria-label={`cart, ${cartCount} items`}>                                            <CartBadge badgeContent={cartCount} max={99} color="secondary">
                                            <IoIosCart className='!text-orange-400' />
                                        </CartBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col2 lg:order-2 w-full lg:w-[45%] !mt-2 lg:!mt-0">
                        <Search />
                    </div>
                </div>
            </div>

            {/* Wishlist side drawer — mirrors the cart drawer's open/close pattern */}

        </>
    )
}

export default Header