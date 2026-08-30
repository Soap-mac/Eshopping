import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SidePanel from '../SidePanel/SidePanel';
import { handleError } from '../../utils';
import { ToastContainer } from 'react-toastify';

function Navbar() {

    const [menufetched, setmenuFetched] = useState(false);
    const [menus, setMenus] = useState({});
    const [isOpenSide, setOpenSide] = useState(false);

    useEffect(() => {
        const createMenuStructure = async () => {
            const menu = {};
            try {
                const caturl = `${import.meta.env.VITE_API_URL}/getcategory`;
                const subCaturl = `${import.meta.env.VITE_API_URL}/getsubcategory`;
                const innerCaturl = `${import.meta.env.VITE_API_URL}/getInnercategory`;
                const cats = await fetch(caturl, {
                    method: 'GET',
                    credentials: 'include'
                });
                const subCats = await fetch(subCaturl, {
                    method: 'GET',
                    credentials: 'include'
                });
                const innerCats = await fetch(innerCaturl, {
                    method: 'GET',
                    credentials: 'include'
                });

                const catRes = await cats.json();
                const subCatRes = await subCats.json();
                const innerCatRes = await innerCats.json();

                catRes.allCategories.forEach(category => {
                    menu[category.name] = {
                        submenu: [],
                        innerSubMenu: [],
                    }
                });

                subCatRes.allSubCategories.forEach(SubCategory => {
                    const cat = catRes.allCategories.find(c => c._id === SubCategory.parentId);
                    if (cat.name && menu[cat.name]) {
                        menu[cat.name].submenu.push(SubCategory.name);
                        menu[cat.name].innerSubMenu[SubCategory.name] = [];
                    }
                });

                innerCatRes.innercategories.forEach(innercategory => {
                    const sub = subCatRes.allSubCategories.find(s => s._id === innercategory.subcategoryId);
                    if (sub.name && menu[sub.parentCategory].innerSubMenu[sub.name]) {
                        menu[sub.parentCategory].innerSubMenu[sub.name].push(innercategory.name)
                    }
                });

                setMenus(menu);
                setmenuFetched(true);
            } catch (error) {
                handleError(error);
            }
        }
        createMenuStructure();
    }, [])

    const openSide = () => {
        setOpenSide(true);
    }

    return (
        <>
            <nav className="relative z-50 bg-black border-b border-gray-800/80 shadow-md shadow-black/30">
                <div className="h-20 relative flex items-center !px-4 sm:!px-6 lg:!px-10">

                    {/* Mobile menu trigger — opens the SidePanel */}
                    <button
                        onClick={openSide}
                        aria-label="Open menu"
                        className="lg:hidden absolute left-4 sm:left-6 inline-flex items-center justify-center !p-2.5 rounded-md text-gray-300 hover:text-amber-400 hover:bg-gray-900/60 transition-colors"
                    >
                        <HiOutlineMenuAlt2 className="text-3xl" />
                    </button>

                    {/* Centered nav + promo group */}
                    <div className="w-full flex items-center justify-center gap-8">

                        <ul className="hidden lg:flex items-center h-20">
                            {!menufetched && [1, 2, 3, 4, 5].map((i) => (
                                <li key={i} className="!px-5">
                                    <div className="h-3.5 w-16 bg-gray-800/80 rounded-full animate-pulse"></div>
                                </li>
                            ))}

                            {menufetched && Object.entries(menus).map(([mainItem, { submenu, innerSubMenu }]) => (
                                <li key={mainItem} className="relative group h-full flex items-center">
                                    <Link
                                        to={`/products/${mainItem}`}
                                        className="relative h-full flex items-center gap-2 !px-5 text-[15px] font-semibold uppercase tracking-wider text-gray-300 group-hover:text-amber-400 transition-colors"
                                    >
                                        {mainItem}
                                        {submenu.length > 0 && (
                                            <FaChevronDown className="text-[11px] text-gray-600 group-hover:text-amber-400 transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                        <span className="absolute left-5 right-5 bottom-0 h-[3px] bg-amber-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-200"></span>
                                    </Link>

                                    {submenu.length > 0 && (
                                        <div className="absolute top-full left-0 min-w-[240px] bg-neutral-950 border border-gray-800/80 rounded-lg shadow-2xl opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-20">
                                            <ul className="!p-2 !space-y-0.5">
                                                {submenu.map((sub) => (
                                                    <li key={sub} className="relative group/sub">
                                                        <Link
                                                            to={`/products/${sub}`}
                                                            className="flex items-center justify-between gap-2 !px-4 !py-2.5 rounded-md text-[15px] text-gray-300 hover:text-amber-400 hover:bg-gray-900/70 transition-colors"
                                                        >
                                                            {sub}
                                                            {innerSubMenu[sub]?.length > 0 && (
                                                                <FaChevronDown className="text-[10px] -rotate-90 text-gray-600" />
                                                            )}
                                                        </Link>

                                                        {innerSubMenu[sub]?.length > 0 && (
                                                            <div className="absolute top-0 left-full !ml-1 min-w-[220px] bg-neutral-950 border border-gray-800/80 rounded-lg shadow-2xl opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 z-30">
                                                                <ul className="!p-2 !space-y-0.5">
                                                                    {innerSubMenu[sub].map((inner, idx) => (
                                                                        <li key={idx}>
                                                                            <Link
                                                                                to={`/products/${inner}`}
                                                                                className="block !px-4 !py-2.5 rounded-md text-[15px] text-gray-300 hover:text-amber-400 hover:bg-gray-900/70 transition-colors"
                                                                            >
                                                                                {inner}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <span className="hidden lg:block h-7 w-px bg-gray-800/80 shrink-0"></span>

                        {/* Promo message */}
                        <div className="hidden md:flex items-center gap-2.5 text-sm sm:text-base text-gray-300 shrink-0 rounded-full border border-gray-800/80 bg-gray-900/40 !px-4 !py-2">
                            <HiMiniRocketLaunch className="text-amber-400 text-lg" />
                            <span className="font-medium whitespace-nowrap">Free International Deliveries</span>
                        </div>
                    </div>
                </div>
            </nav>

            <SidePanel openSide={openSide} isOpenSide={isOpenSide} setOpenSide={setOpenSide} />
            <ToastContainer />
        </>
    )
}

export default Navbar