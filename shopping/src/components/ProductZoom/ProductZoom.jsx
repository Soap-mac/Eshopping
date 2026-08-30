import React, { useState, useEffect } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductZoom(props) {
    const images = props?.productImg || [];
    const [selectedImage, setSelectedImage] = useState("");
    console.log(props);

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);


    return (
        <div className="!w-full !flex !justify-center !pt-5 !h-full">
            <div className="!flex !gap-6 !w-[80%] !max-w-[1200px] !items-start !h-[20px]">

                <div className="!relative !w-[110px] h-[550px] !flex !flex-col !items-center">

                    <div className="swiper-button-prev-thumb !absolute top-0 z-10 !cursor-pointer !bg-white !p-1 !rounded-full !shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>

                    <Swiper
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={15}
                        navigation={{
                            nextEl: '.swiper-button-next-thumb',
                            prevEl: '.swiper-button-prev-thumb',
                        }}
                        modules={[Navigation]}
                        className="!h-full !mt-10 !mb-10"
                    >
                        {images?.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    alt={`Thumb ${idx}`}
                                    onClick={() => setSelectedImage(img)}
                                    className={`!w-[100px] !h-[115px] !object-cover !cursor-pointer !border-2 !rounded-md !transition-all !duration-300 ${selectedImage === img ? '!border-blue-500' : '!border-gray-300'
                                        }`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-next-thumb !absolute bottom-0 z-10 !cursor-pointer !bg-white !p-1 !rounded-full !shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <div className="!flex-1 !h-[500px] !mt-[50px] !overflow-y-hidden">
                    <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={selectedImage}
                        hideHint={true}
                        className="!w-full !h-[450px] !object-contain !overflow-y-hidden rounded-[20px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductZoom;
