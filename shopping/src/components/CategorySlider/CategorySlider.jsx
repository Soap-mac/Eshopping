import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper core styles MUST load before your custom overrides,
// otherwise your arrow/nav styling gets overridden by Swiper's defaults.
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './CategorySlider.css';

import { FreeMode, Navigation } from 'swiper/modules';
import { handleError } from '../../utils';
import { Link } from 'react-router-dom';

const SKELETON_COUNT = 8;

export default function CategorySlider() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOverflowing, setIsOverflowing] = useState(false);

    React.useEffect(() => {
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

    const canLoop = categories.length > 8;
    const syncOverflow = (swiper) => swiper && setIsOverflowing(!swiper.isLocked);

    return (
        <div
            className={`categorySlider px-4 sm:px-6 md:px-10 lg:px-20 mt-5 ${!loading && isOverflowing ? 'is-scrollable' : 'is-centered'
                }`}
        >
            {!loading && categories.length === 0 ? (
                <p className="text-white/40 text-[14px] py-8">No categories available right now.</p>
            ) : (
                <Swiper
                    onSwiper={syncOverflow}
                    onResize={syncOverflow}
                    onLock={() => setIsOverflowing(false)}
                    onUnlock={() => setIsOverflowing(true)}
                    slidesPerView="auto"
                    spaceBetween={28}
                    freeMode={{ enabled: true, momentumBounce: false }}
                    navigation={true}
                    watchOverflow={true}
                    grabCursor={true}
                    threshold={10}
                    preventClicks={false}
                    preventClicksPropagation={false}
                    loop={canLoop}
                    rewind={!canLoop}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper2"
                >
                    {loading &&
                        Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <SwiperSlide key={`skeleton-${i}`} className="!w-[96px] sm:!w-[104px]">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="category-skeleton-circle h-20 w-20 sm:h-[88px] sm:w-[88px] rounded-full" />
                                    <div className="category-skeleton-line h-[10px] w-16 rounded-full" />
                                </div>
                            </SwiperSlide>
                        ))}

                    {!loading &&
                        categories.map((cat, index) => (
                            <SwiperSlide key={cat._id || index} className="!w-[96px] sm:!w-[104px]">
                                <Link
                                    to={`/products/${encodeURIComponent(cat.name)}`}
                                    className="category-card group flex flex-col items-center gap-3 outline-none"
                                >
                                    <span className="category-ring relative flex h-20 w-20 sm:h-[88px] sm:w-[88px] items-center justify-center rounded-full">
                                        <span className="h-full w-full overflow-hidden rounded-full bg-[#1c1b1b]">
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                onError={handleError}
                                                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                            />
                                        </span>
                                    </span>
                                    <p className="text-[13px] font-medium text-white/65 tracking-wide text-center truncate w-full group-hover:text-orange-500 transition-colors duration-300">
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