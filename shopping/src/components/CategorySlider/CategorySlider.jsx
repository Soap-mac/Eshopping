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

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/getcategory`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                setCategories(result.allCategories);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCats();
    }, []);

    // const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div className="categorySlider !px-20 !md:px-12 !lg:px-20 !mt-[20px]">
            <Swiper
                slidesPerView="auto"
                spaceBetween={60}
                freeMode={true}
                navigation={true}
                loop={categories.length > 1}
                rewind={categories.length <= 1}
                modules={[Navigation]}
                className="mySwiper2"
            >
                {categories && categories.map((cat, index) => (
                    <SwiperSlide
                        key={index}
                        className="!min-w-[140px] !max-w-[180px] cursor-pointer"
                    >
                        <Link to={`/products/${cat.name}`}>
                            <div className="flex flex-col items-center !w-full !h-44">
                                <img
                                    src={cat.image}
                                    alt={`Slide ${index + 1}`}
                                    className="!w-30 !h-30 md:h-36 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                                />
                                <p className="!mt-4 flex justify-center items-center text-lg font-medium text-center text-[#ff7b2e] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]  !px-2 !py-1 rounded-lg w-[100px] h-[50px] shadow-sm">
                                    {cat.name}
                                </p>

                            </div>
                        </Link>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}
