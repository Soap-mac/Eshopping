import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Productitems from '../../components/productItems/productitems';
import { useParams } from 'react-router-dom';
function Products(props) {

    const name = useParams();
    console.log(name);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${name.name}`, {
                    method: "GET",
                    credentials: "include"
                });
                const data = await res.json();
                console.log(data);
                setProducts(data.item || []);
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    }, [name])
    return (
        <>
            <Header />
            <Navbar />
            <div className="container !mx-auto !px-4 sm:!px-10 lg:!px-25 !py-6 sm:!py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-10 justify-items-center">
                    {products.map((product) => (
                        <Productitems key={product._id} item={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products