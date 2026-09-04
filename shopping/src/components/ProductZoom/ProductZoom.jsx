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
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);

    // Below the lg breakpoint the thumbnail rail switches from a vertical
    // side column to a horizontal strip under the main image, which is a
    // better fit for narrow/portrait screens. Swiper doesn't reliably relay
    // out when its `direction` prop changes on a live instance, so the
    // Swiper below is remounted (via `key`) whenever this flips.
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 1023px)');
        const update = () => setIsCompact(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    return (
        <div className="!w-full !flex !justify-center !pt-5">
            <div className="!flex !flex-col lg:!flex-row !gap-4 lg:!gap-6 !w-full lg:!w-[80%] !max-w-[1200px] !items-center lg:!items-start">

                <div className="!order-1 lg:!order-2 !flex-1 !w-full h-[280px] sm:h-[380px] lg:h-[500px] lg:!mt-[50px] !overflow-y-hidden">
                    <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={selectedImage}
                        hideHint={true}
                        className="!w-full !h-full !object-contain !overflow-y-hidden rounded-[20px]"
                    />
                </div>

                <div className="!order-2 lg:!order-1 !relative !w-full lg:!w-[110px] h-[86px] lg:h-[550px] !flex !flex-col !items-center !flex-shrink-0">

                    <div className={`swiper-button-prev-thumb !absolute z-10 !cursor-pointer !bg-white !p-1 !rounded-full !shadow-md ${isCompact ? '!left-0 !top-1/2 !-translate-y-1/2 !rotate-[-90deg]' : '!top-0'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>

                    <Swiper
                        key={isCompact ? 'thumbs-horizontal' : 'thumbs-vertical'}
                        direction={isCompact ? 'horizontal' : 'vertical'}
                        slidesPerView={isCompact ? 4.5 : 4}
                        spaceBetween={isCompact ? 10 : 15}
                        navigation={{
                            nextEl: '.swiper-button-next-thumb',
                            prevEl: '.swiper-button-prev-thumb',
                        }}
                        modules={[Navigation]}
                        className="!w-full !h-full lg:!mt-10 lg:!mb-10"
                    >
                        {images?.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    alt={`Thumb ${idx}`}
                                    onClick={() => setSelectedImage(img)}
                                    className={`!w-[70px] !h-[70px] lg:!w-[100px] lg:!h-[115px] !object-cover !cursor-pointer !border-2 !rounded-md !transition-all !duration-300 ${selectedImage === img ? '!border-blue-500' : '!border-gray-300'
                                        }`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={`swiper-button-next-thumb !absolute z-10 !cursor-pointer !bg-white !p-1 !rounded-full !shadow-md ${isCompact ? '!right-0 !top-1/2 !-translate-y-1/2 !rotate-[-90deg]' : '!bottom-0'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductZoom;
