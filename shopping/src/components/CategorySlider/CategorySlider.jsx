import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './CategorySlider.css';

import { Navigation } from 'swiper/modules';
import { handleError } from '../../utils';
import { Link } from 'react-router-dom';

const SKELETON_COUNT = 8;

export default function CategorySlider() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        let ignore = false;
        const fetchCats = async () => {
            setLoading(true);
            try {
                const url = `${import.meta.env.VITE_API_URL}/getcategory`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                if (!ignore) setCategories(result.allCategories || []);
            } catch (error) {
                console.log(error);
            } finally {
                if (!ignore) setLoading(false);
            }
        };
        fetchCats();
        return () => { ignore = true; };
    }, []);

    const N = categories.length;
    // Enough copies that even an ultra-wide screen never runs out of buffer to slide into.
    const repeatCount = N === 0 ? 0 : N > 15 ? 3 : 9;
    const middleStart = Math.floor(repeatCount / 2) * N;
    const loopCategories = N > 0
        ? Array.from({ length: repeatCount }, () => categories).flat()
        : [];

    // Once real data lands, jump instantly to the middle copy before paint.
    useLayoutEffect(() => {
        if (!loading && N > 0 && swiperRef.current) {
            swiperRef.current.update();
            swiperRef.current.slideTo(middleStart, 0, false);
        }
    }, [loading, N]);

    // If a drag or arrow-click carries us into the first or last copy,
    // silently snap back to the same position in the middle copy.
    const handleTransitionEnd = (swiper) => {
        if (N === 0) return;
        const idx = swiper.activeIndex;
        const safeStart = N; // leave at least one full copy of buffer on each side
        const safeEnd = repeatCount * N - N;
        if (idx < safeStart || idx >= safeEnd) {
            const newIndex = (idx % N) + middleStart;
            swiper.slideTo(newIndex, 0, false);
        }
    };

    return (
        <div className="categorySlider px-10 sm:px-14 md:px-16 lg:px-20 py-10 sm:py-12">
            {!loading && N === 0 ? (
                <p className="text-white/40 text-[14px]">No categories available right now.</p>
            ) : (
                <Swiper
                    onSwiper={(s) => { swiperRef.current = s; }}
                    onTransitionEnd={handleTransitionEnd}
                    slidesPerView="auto"
                    spaceBetween={40}
                    navigation={true}
                    grabCursor={true}
                    modules={[Navigation]}
                    className="mySwiper2"
                >
                    {loading &&
                        Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <SwiperSlide key={`skeleton-${i}`} className="!w-[112px] sm:!w-[128px] lg:!w-[144px]">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="category-skeleton-circle h-24 w-24 sm:h-28 sm:w-28 lg:h-[136px] lg:w-[136px] rounded-full" />
                                    <div className="category-skeleton-line h-[11px] w-20 rounded-full" />
                                </div>
                            </SwiperSlide>
                        ))}

                    {!loading &&
                        loopCategories.map((cat, i) => (
                            <SwiperSlide key={`${cat._id || cat.name}-${i}`} className="!w-[112px] sm:!w-[128px] lg:!w-[144px]">
                                <Link
                                    to={`/products/${encodeURIComponent(cat.name)}`}
                                    className="category-card group flex flex-col items-center gap-3 outline-none"
                                >
                                    <span className="category-ring relative flex h-24 w-24 sm:h-28 sm:w-28 lg:h-[136px] lg:w-[136px] items-center justify-center rounded-full">
                                        <span className="h-full w-full overflow-hidden rounded-full bg-[#1c1b1b]">
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                onError={handleError}
                                                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                            />
                                        </span>
                                    </span>
                                    <p className="text-[14px] sm:text-[15px] font-medium text-white/65 tracking-wide text-center truncate w-full group-hover:text-orange-500 transition-colors duration-300">
                                        {cat.name}
                                    </p>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </div>
    );
}