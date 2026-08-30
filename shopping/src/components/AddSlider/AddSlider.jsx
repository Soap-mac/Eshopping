import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./addSlider.css"
import { useContext } from 'react';
import { MyContext } from '../../App';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';


function AddSlider(props) {

    const context = useContext(MyContext);
    const { sliders, setSliders } = context;

    return (
        <div className="categorySlider !px-20 !md:px-12 !lg:px-20">
            <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper2"
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide
                        key={index}
                        className="!min-w-[140px] !max-w-[322px] cursor-pointer"
                    >
                        <div className="groupSelect">
                            <img
                                src={slider.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-40 md:h-55 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:translate-y-[-5px]"
                            />
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AddSlider