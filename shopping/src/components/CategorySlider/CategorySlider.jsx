import React, { useState, useEffect } from 'react';
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

    return (
        <div className="categorySlider px-10 sm:px-14 md:px-16 lg:px-20 py-10 sm:py-12">
            {!loading && categories.length === 0 ? (
                <p className="text-white/40 text-[14px]">No categories available right now.</p>
            ) : (
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={40}
                    navigation={true}
                    loop={true}
                    loopedSlides={Math.max(categories.length * 3, 24)}
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
                        categories.map((cat, index) => (
                            <SwiperSlide key={cat._id || index} className="!w-[112px] sm:!w-[128px] lg:!w-[144px]">
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