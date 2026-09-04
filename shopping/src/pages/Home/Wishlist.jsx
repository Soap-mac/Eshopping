import React, { useState, useEffect } from 'react';
import WishList from '../../components/wishlist/wishlist';
import Footer from '../../components/Footer/Footer';
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

                console.log("Wishlist response:", data);

                if (data.success) {
                    setWishlist(Array.isArray(data.wishlist) ? data.wishlist : []);
                } else {
                    setWishlist([]);
                }

            } catch (error) {

                console.log("Wishlist error:", error);
                setWishlist([]);

            }

        };

        fetchWishlist();

    }, []);


    // Remove item from UI after successful deletion
    const removeFromWishlist = (wishlistId) => {

        setWishlist((prevWishlist) =>
            prevWishlist.filter((item) => item._id !== wishlistId)
        );

    };


    return (
        <>

            <div className="!min-h-screen">

                <div className="container !mx-auto !px-4 sm:!px-8 lg:!px-[100px] !py-8 !pt-8 lg:!pt-[60px] !w-[100%] !bg-transparent">

                    <div className="flex flex-col lg:flex-row !gap-8 !w-full">

                        <ProfileSide />

                        <div className="flex-1 w-full lg:!w-[70%]">

                            <div className="!mb-5 !pb-3 border-b-[2px] border-[#8b7a7a]">

                                <h2 className="text-3xl font-bold text-amber-50 !mb-2">
                                    Your Wishlist
                                </h2>

                                <p className="text-gray-400 text-lg">

                                    <span className="text-amber-400 font-semibold">
                                        {wishlist.length}
                                    </span>

                                    {" "}Items are present currently

                                </p>

                            </div>


                            <div className="!space-y-6">

                                {wishlist.map((wishlistItem) => (

                                    <WishList
                                        key={wishlistItem._id}
                                        product={wishlistItem.productId}
                                        wishlistId={wishlistItem._id}
                                        onRemove={removeFromWishlist}
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Wishlist;