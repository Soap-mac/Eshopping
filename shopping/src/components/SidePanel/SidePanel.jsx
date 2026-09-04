import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoMdClose } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';
import { IoHelpCircleOutline, IoCallOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

function SidePanel(props) {
    const context = useContext(MyContext);
    const toggleDrawer = (newOpen) => () => props.setOpenSide(newOpen);
    const menus = props.menus || {};

    const [isSubMenu, setSubMenu] = useState(null);
    const [isInnerSubMenu, setInnerSubMenu] = useState(null);

    const openSubMenu = (index) => setSubMenu(isSubMenu === index ? null : index);
    const openInnerSubMenu = (index) => setInnerSubMenu(isInnerSubMenu === index ? null : index);
    const closeDrawer = () => props.setOpenSide(false);

    const DrawerList = (
        <Box
            sx={{ width: '100%', height: '100%', bgcolor: '#0D1117', color: 'white', display: 'flex', flexDirection: 'column' }}
            role="presentation"
        >
            {/* Header */}
            <div className="!px-5 !pt-5 !pb-4 relative">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-amber-400 font-bold text-xl tracking-wide leading-tight">Categories</p>
                        <p className="text-gray-500 text-xs !mt-0.5">Browse all departments</p>
                    </div>
                    <button
                        onClick={toggleDrawer(false)}
                        aria-label="Close menu"
                        className="!p-2 rounded-full text-gray-400 active:text-amber-400 active:bg-white/10 transition-colors"
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>
                <div className="!mt-4 h-px w-full bg-gradient-to-r from-amber-500/60 via-white/10 to-transparent" />
            </div>

            {/* Category list */}
            <ul className="!py-1 overflow-y-auto flex-1">
                {Object.keys(menus).length === 0 && (
                    <li className="!px-5 !py-3 text-gray-500 text-sm">Loading categories…</li>
                )}

                {Object.entries(menus).map(([mainItem, { image, submenu, innerSubMenu }]) => {
                    const isActive = isSubMenu === mainItem;
                    return (
                        <li key={mainItem} className="!mx-2 !my-0.5">
                            <div
                                className={`flex items-center gap-3 rounded-xl !pr-2 !pl-2 transition-colors ${isActive ? 'bg-amber-500/10' : 'active:bg-white/5'
                                    }`}
                            >
                                <div className={`w-1 self-stretch !my-2 rounded-full ${isActive ? 'bg-amber-500' : 'bg-transparent'}`} />

                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex-shrink-0 flex items-center justify-center">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={mainItem}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    ) : (
                                        <span className="text-amber-400 text-xs font-bold">{mainItem.charAt(0)}</span>
                                    )}
                                </div>

                                <Link
                                    to={`/products/${mainItem}`}
                                    onClick={closeDrawer}
                                    className={`flex-1 !py-3.5 text-[14px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-amber-400' : 'text-gray-200'
                                        }`}
                                >
                                    {mainItem}
                                </Link>

                                {submenu.length > 0 && (
                                    <button
                                        onClick={() => openSubMenu(mainItem)}
                                        aria-label={`Toggle ${mainItem} submenu`}
                                        className={`!w-7 !h-7 !p-0 flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-amber-500/20 text-amber-400' : 'text-gray-500 active:bg-white/10'
                                            }`}
                                    >
                                        <FaChevronDown
                                            className={`text-[11px] transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {submenu.length > 0 && isActive && (
                                <ul className="!ml-[52px] !mr-2 !my-1 !py-1 border-l border-white/10">
                                    {submenu.map((sub) => {
                                        const innerItems = innerSubMenu?.[sub] || [];
                                        const innerKey = `${mainItem}-${sub}`;
                                        const innerActive = isInnerSubMenu === innerKey;
                                        return (
                                            <li key={sub}>
                                                <div className="flex items-center">
                                                    <Link
                                                        to={`/products/${sub}`}
                                                        onClick={closeDrawer}
                                                        className="flex-1 !pl-4 !pr-2 !py-2.5 text-[13.5px] text-gray-300 active:text-amber-400 transition-colors"
                                                    >
                                                        {sub}
                                                    </Link>
                                                    {innerItems.length > 0 && (
                                                        <button
                                                            onClick={() => openInnerSubMenu(innerKey)}
                                                            aria-label={`Toggle ${sub} submenu`}
                                                            className="!w-6 !h-6 !p-0 flex items-center justify-center text-gray-600 active:text-amber-400"
                                                        >
                                                            <FaChevronDown
                                                                className={`text-[10px] transition-transform duration-200 ${innerActive ? 'rotate-180' : ''}`}
                                                            />
                                                        </button>
                                                    )}
                                                </div>

                                                {innerItems.length > 0 && innerActive && (
                                                    <ul className="!pb-1">
                                                        {innerItems.map((inner, idx) => (
                                                            <li key={idx}>
                                                                <Link
                                                                    to={`/products/${inner}`}
                                                                    onClick={closeDrawer}
                                                                    className="block !pl-8 !pr-2 !py-2 text-[13px] text-gray-500 active:text-amber-400 transition-colors"
                                                                >
                                                                    {inner}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* Quick links + account CTA — fills the dead space and gives the
                drawer real utility beyond just category browsing */}
            <div className="!mt-auto border-t border-white/10 !px-5 !pt-4 !pb-6">
                <p className="text-gray-600 text-[11px] font-semibold tracking-widest uppercase !mb-2">More</p>
                <ul className="!space-y-0.5 !mb-4">
                    <li>
                        <Link to="/orders" onClick={closeDrawer} className="flex items-center gap-3 !py-2.5 text-[14px] text-gray-300 active:text-amber-400 transition-colors">
                            <TbTruckDelivery className="text-lg text-gray-500" /> Track Your Order
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" onClick={closeDrawer} className="flex items-center gap-3 !py-2.5 text-[14px] text-gray-300 active:text-amber-400 transition-colors">
                            <IoHelpCircleOutline className="text-lg text-gray-500" /> Help & Support
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeDrawer} className="flex items-center gap-3 !py-2.5 text-[14px] text-gray-300 active:text-amber-400 transition-colors">
                            <IoCallOutline className="text-lg text-gray-500" /> Contact Us
                        </Link>
                    </li>
                </ul>

                {context?.isLogin === false && (
                    <Link
                        to="/login"
                        onClick={closeDrawer}
                        className="flex items-center justify-center gap-2 !w-full !py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-sm active:from-amber-700 active:to-amber-600 transition-all"
                    >
                        <FaUser className="text-xs" /> Login / Signup
                    </Link>
                )}
            </div>
        </Box>
    );

    return (
        <Drawer
            anchor="left"
            open={props.isOpenSide}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    backgroundColor: '#0D1117',
                    color: 'white',
                    width: '260px !important',
                    maxWidth: '78vw',
                },
            }}        >
            {DrawerList}
        </Drawer>
    );
}

export default SidePanel;