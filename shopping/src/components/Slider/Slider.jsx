import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderStyle.css';

import img1 from "../../assets/SliderImages/5092428.jpg";
import img2 from "../../assets/SliderImages/6874380.jpg";
import { handleError } from '../../utils';
import { MyContext } from '../../App';

function Slider() {

    const img = [img1, img2, img1];

    const context = useContext(MyContext);
    const { sliders, setSliders } = context;

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/allSliders`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                });
                const result = await response.json();
                console.log(result);
                console.log(result.allSliders);
                setSliders(result.allSliders)
            } catch (error) {
                handleError(error);
                console.log(error);
            }
        }
        fetchSliders();
    }, []);


    return (
        <div className="homeSlider !py-6">
            <div className="sliderContainer !w-[90%] mx-auto">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    centeredSlides={true}
                    slidesPerView="auto"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    loop={sliders.length > 1}
                    rewind={sliders.length <= 1}

                    className="mySwiper"
                >

                    {sliders && sliders.map((slider, index) => (

                        <SwiperSlide key={index} className="!w-[85vw] !max-w-[1000px]">

                            <img
                                src={slider.image}
                                alt={`Slide ${index + 1}`}
                                className="rounded-2xl object-cover !h-[180px] sm:!h-[260px] md:!h-[320px] lg:!h-[400px] !w-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
}

export default Slider;
