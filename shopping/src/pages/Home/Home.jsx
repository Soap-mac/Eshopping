import React, { useContext, useState, useEffect, useRef } from 'react'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Slider/Slider'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import { TbTruckDelivery } from "react-icons/tb";
import AddSlider from '../../components/AddSlider/AddSlider'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import Footer from "../../components/Footer/Footer"
import { MyContext } from '../../App'

function Home() {
  const context = useContext(MyContext);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("Fashion");
  const [loading, setLoading] = useState(false);

  const cacheRef = useRef({});

  const abortRef = useRef(null);

  useEffect(() => {
    // serve from cache if we already fetched this category
    if (cacheRef.current[category]) {
      setAllProducts(cacheRef.current[category]);
      return;
    }

    // cancel any in-flight request for a previous tab
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const fetchByCategory = async () => {
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/getproducts?category=${encodeURIComponent(category)}&limit=20`;
        const response = await fetch(url, {
          method: 'GET',
          signal: controller.signal,
        });
        const result = await response.json();
        cacheRef.current[category] = result.allProducts;
        setAllProducts(result.allProducts);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchByCategory();
  }, [category]);

  return (
    <>
      <>
        <Header />
        <Navbar />
        <div className="sliders">
          <Slider />
          <CategorySlider />
          <br />
          <div className="freeShipping !mt-4 !py-4 sm:!h-[150px] w-full bg-black">
            <div className="freeBox flex flex-col sm:flex-row items-center justify-around text-center sm:text-left gap-3 sm:gap-4 text-[#fff] border-2 border-amber-50 rounded-md !mx-4 sm:!ml-7 sm:!mr-4 !py-5 sm:!py-0 sm:!h-[100px] w-[calc(100%-2rem)] sm:w-[95%]">
              <div className="first font-medium text-[20px] sm:text-[30px] flex items-center gap-2 sm:gap-3">
                <TbTruckDelivery className='text-[30px] sm:text-[44px]' />
                <p>FREE SHIPPING</p>
              </div>
              <div className="second text-[14px] sm:text-[20px] !px-4 sm:!px-0">
                <p>Free Shipping now on your first order over $200</p>
              </div>
              <div className="third font-bold text-[22px] sm:text-[30px]">
                <p>ONLY $200</p>
              </div>
            </div>
          </div>
          <br />
          <AddSlider slides={7} />
          <br /><br />

        </div>

        <section className='popularProducts !p-4 sm:!p-5 !text-white bg-black !h-[auto]'>
          <div className="container flex flex-col lg:flex-row lg:items-center justify-around gap-4 lg:gap-6">
            <div className="popularProductLeft text-white text-center lg:text-left !ml-0 lg:!ml-8">
              <h2 className='text-[24px] sm:text-[30px] font-bold !pt-[15px]'>Popular Products</h2>
              <p className="text-[14px] sm:text-base">Do not miss the current offers by the end of this month </p>
            </div>
            <div className="popularProductRight w-full lg:w-[70%] h-full !text-white">
              <PopularProducts category={category} setCategory={setCategory} />
            </div>
          </div>
          <div className="!mt-4 sm:mt-0 min-h-[280px] sm:min-h-[380px] w-full">
            {loading && <p className="text-white text-center">Loading...</p>}
            {!loading && allProducts.length > 0 &&
              <ProductSlider items={5} allProducts={allProducts} category={category} />
            }
            {!loading && allProducts.length === 0 &&
              <p className="text-white text-center">No products found in this category.</p>
            }
          </div>
        </section>

        <Footer />

      </>
    </>
  )
}

export default Home