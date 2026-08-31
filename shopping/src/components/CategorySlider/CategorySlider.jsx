import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./CategorySlider.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { handleError } from '../../utils';
import { Link } from 'react-router-dom';

export default function CategorySlider() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCats = async () => {
            setLoading(true);
            try {
                const url = `${import.meta.env.VITE_API_URL}/getcategory`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                setCategories(result.allCategories || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCats();
    }, []);

    const canLoop = categories.length > 8;

    return (
        <div className="categorySlider !px-20 !md:px-12 !lg:px-20 !mt-[20px]">
            <Swiper
                slidesPerView="auto"
                spaceBetween={36}
                freeMode={true}
                navigation={true}
                threshold={10}
                preventClicks={false}
                preventClicksPropagation={false}
                loop={canLoop}
                rewind={!canLoop}
                modules={[FreeMode, Navigation]}
                className="mySwiper2"
            >
                {loading &&
                    Array.from({ length: 8 }).map((_, i) => (
                        <SwiperSlide key={`skeleton-${i}`} className="!w-[104px]">
                            <div className="flex flex-col items-center gap-3">
                                <div className="!h-[88px] !w-[88px] rounded-full bg-white/[0.06] animate-pulse" />
                                <div className="!h-[11px] !w-[64px] rounded-full bg-white/[0.06] animate-pulse" />
                            </div>
                        </SwiperSlide>
                    ))
                }

                {!loading && categories.length === 0 && (
                    <p className="text-white/40 text-[14px] !py-6">No categories available.</p>
                )}

                {!loading && categories.map((cat, index) => (
                    <SwiperSlide
                        key={cat._id || index}
                        className="!w-[104px]"
                    >
                        <Link
                            to={`/products/${encodeURIComponent(cat.name)}`}
                            className="group flex flex-col items-center gap-3 outline-none"
                        >
                            <div className="!h-[88px] !w-[88px] rounded-full overflow-hidden bg-[#1c1b1b] ring-1 ring-white/10 group-hover:ring-orange-500/80 transition-all duration-300">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    onError={handleError}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <p className="text-[13px] font-medium text-white/65 tracking-wide text-center truncate w-full group-hover:text-orange-500 transition-colors duration-300">
                                {cat.name}
                            </p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}