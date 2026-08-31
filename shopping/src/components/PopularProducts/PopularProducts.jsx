import React, { useRef, useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { MdCategory } from 'react-icons/md'

function PopularProducts(props) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // fetch categories from backend
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const url = `${import.meta.env.VITE_API_URL}/getcategory`;
                const response = await fetch(url, { method: 'GET' });
                const result = await response.json();

                if (result.success && Array.isArray(result.allCategories)) {
                    // only show top-level categories in this tab bar
                    const topLevel = result.allCategories
                        .filter((cat) => !cat.parentId)
                        .map((cat) => ({
                            id: cat._id,
                            name: cat.name,
                            image: cat.image,
                        }));

                    setCategories(topLevel);

                    if (topLevel.length > 0 && !props.category) {
                        props.setCategory(topLevel[0].name);
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const activeCategory = props.category || categories[0]?.name;

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 2);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [categories]);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === 'left' ? -180 : 180, behavior: 'smooth' });
    };

    return (
        <div className="relative flex items-center w-full !py-2">
            {/* Left scroll button */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="!absolute left-0 z-20 flex items-center justify-center !h-10 !w-10 rounded-full bg-[#1a1a1a] border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                    aria-label="Scroll left"
                >
                    <HiChevronLeft className="text-[22px]" />
                </button>
            )}

            {canScrollLeft && (
                <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black via-black to-transparent z-10" />
            )}

            {/* Tabs */}
            <div
                ref={scrollRef}
                className="flex items-center gap-3 overflow-x-auto scroll-smooth w-full !px-12 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {loading &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 !h-[46px] !w-[140px] rounded-full bg-white/[0.06] animate-pulse"
                        />
                    ))}

                {!loading && categories.length === 0 && (
                    <p className="text-white/50 text-[15px] !px-2">No categories found.</p>
                )}

                {!loading &&
                    categories.map((cat) => {
                        const isActive = activeCategory === cat.name;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => props.setCategory(cat.name)}
                                className={`flex-shrink-0 flex items-center gap-2.5 whitespace-nowrap !pl-2 !pr-6 !py-2 rounded-full text-[17px] font-semibold tracking-wide transition-all duration-200 border
                                    ${isActive
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black border-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.55)] scale-[1.04]'
                                        : 'bg-white/[0.04] text-white/75 border-white/10 hover:bg-white/[0.08] hover:text-white hover:border-orange-500/40'
                                    }`}
                            >
                                <span
                                    className={`flex items-center justify-center !h-8 !w-8 rounded-full overflow-hidden flex-shrink-0 ${isActive ? 'bg-black/15' : 'bg-white/10'
                                        }`}
                                >
                                    {cat.image ? (
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <MdCategory
                                        className={`text-[16px] ${isActive ? 'text-black' : 'text-orange-400/80'}`}
                                        style={{ display: cat.image ? 'none' : 'flex' }}
                                    />
                                </span>
                                {cat.name}
                            </button>
                        );
                    })}
            </div>

            {canScrollRight && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black via-black to-transparent z-10" />
            )}

            {/* Right scroll button */}
            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="!absolute right-0 z-20 flex items-center justify-center !h-10 !w-10 rounded-full bg-[#1a1a1a] border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                    aria-label="Scroll right"
                >
                    <HiChevronRight className="text-[22px]" />
                </button>
            )}
        </div>
    )
}

export default PopularProducts