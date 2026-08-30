import React from 'react'
import Top from '../../components/top/top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Button from '@mui/material/Button';
import WishList from '../../components/wishlist/wishlist'
import Footer from '../../components/Footer/Footer'
import { IoMdCloudUpload } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ProfileSide from '../../components/ProfileSide/ProfileSide';

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);


    useEffect(() => {

        const fetchWishlist = async () => {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/getwishlist`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );


                const data = await response.json();

                console.log(data);


                if (data.success) {
                    setWishlist(data.allProducts);
                }


            }
            catch (error) {

                console.log(error);

            }

        }


        fetchWishlist();


    }, []);


    return (
        <>

            <div className="!min-h-screen">
                <div className="container !mx-auto !px-[100px] !py-8 !pt-[60px] !w-[100%] !bg-transparent">
                    <div className="flex flex-col lg:flex-row !gap-8 !w-full">
                        <ProfileSide />
                        <div className="flex-1 lg:!w-[70%] w-[70%]">
                            <div className="!mb-5 !pb-3 border-b-[2px] border-[#8b7a7a]">
                                <h2 className="text-3xl font-bold text-amber-50 !mb-2">Your Wishlist</h2>
                                <p className="text-gray-400 text-lg">
                                    <span className="text-amber-400 font-semibold">{wishlist.length}</span> {" "}Items are present currently
                                </p>
                            </div>

                            <div className="!space-y-6">
                                {
                                    wishlist.map((product) => (

                                        <WishList
                                            key={product._id}
                                            product={product}
                                        />

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist