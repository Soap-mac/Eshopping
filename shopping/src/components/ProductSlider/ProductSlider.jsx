import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import Productitems from '../productItems/productitems';
import "./productSlider.css"
function ProductSlider(props) {
    console.log(props.allProducts);
    console.log(props.category);
    const products = props.allProducts || [];
    return (
        <div className="productSlider h-[50px] bg-black">
            <Swiper
                slidesPerView={props.items}
                spaceBetween={60}
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