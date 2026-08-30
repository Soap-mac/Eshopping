import React, { useContext, useState, useEffect, useRef } from 'react'
// import Top from '../../components/top/top'
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
          <div className="freeShipping !mt-4 !h-[150px] w-full bg-black">
            <br />
            <div className="freeBox flex items-center justify-around text-[#fff] border-2 border-amber-50 rounded-md !ml-7 !h-[100px] w-[95%]">
              <div className="first font-medium text-[30px] flex gap-3">
                <TbTruckDelivery className='text-[44px]' />
                <p>FREE SHIPPING</p>
              </div>
              <div className="second text-[20px]">
                <p>Free Shipping now on your first order over $200</p>
              </div>
              <div className="third font-bold text-[30px]">
                <p>ONLY $200</p>
              </div>
            </div>
          </div>
          <br />
          <AddSlider slides={7} />
          <br /><br />

        </div>

        <section className='popularProducts !p-5 !text-white bg-black !h-[auto]'>
          <div className="container flex items-center justify-around">
            <div className="popularProductLeft text-white !ml-8">
              <h2 className='text-[30px] font-bold !pt-[15px]'>Popular Products</h2>
              <p>Do not miss the current offers by the end of this month </p>
            </div>
            <div className="popularProductRight w-[70%] h-full !text-white">
              <PopularProducts category={category} setCategory={setCategory} />
            </div>
          </div>
          <div className="h-[450px] w-[110%] !ml-[-80px]">
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