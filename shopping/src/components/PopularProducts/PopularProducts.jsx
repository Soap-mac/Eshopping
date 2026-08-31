import React, { useRef, useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function PopularProducts(props) {
    const categories = [
        "Fashion",
        "Electronics",
        "Beauty",
        "Books",
        "Groceries",
        "Home",
    ];

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const activeCategory = props.category || categories[0];

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
    }, []);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === 'left' ? -160 : 160, behavior: 'smooth' });
    };

    const handleSelect = (cat) => {
        props.setCategory(cat);
    };

    return (
        <div className="relative flex items-center w-full">
            {/* Left scroll button */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="!absolute left-0 z-20 flex items-center justify-center !h-9 !w-9 rounded-full bg-black/80 border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-200 shadow-lg"
                    aria-label="Scroll left"
                >
                    <HiChevronLeft className="text-[20px]" />
                </button>
            )}

            {/* Left fade */}
            {canScrollLeft && (
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10" />
            )}

            {/* Tabs */}
            <div
                ref={scrollRef}
                className="flex items-center gap-2 overflow-x-auto scroll-smooth w-full !px-10 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`flex-shrink-0 whitespace-nowrap !px-5 !py-2 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-200 border
                                ${isActive
                                    ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.4)]'
                                    : 'bg-transparent text-white/70 border-white/15 hover:text-white hover:border-amber-400/50'
                                }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Right fade */}
            {canScrollRight && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />
            )}

            {/* Right scroll button */}
            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="!absolute right-0 z-20 flex items-center justify-center !h-9 !w-9 rounded-full bg-black/80 border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-200 shadow-lg"
                    aria-label="Scroll right"
                >
                    <HiChevronRight className="text-[20px]" />
                </button>
            )}
        </div>
    )
}

export default PopularProducts