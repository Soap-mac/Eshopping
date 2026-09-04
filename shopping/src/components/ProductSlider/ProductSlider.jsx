import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import Productitems from '../productItems/productitems';
import "./productSlider.css"
function ProductSlider(props) {
    const products = props.allProducts || [];
    return (
        <div className="productSlider bg-black">
            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                breakpoints={{
                    768: { spaceBetween: 30 },
                    1280: { spaceBetween: 60 },
                }}
                freeMode={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper3"
            >

                {products.map((item) => (
                    <SwiperSlide key={item._id} className='!w-[200px]'>
                        <Productitems item={item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default ProductSlider