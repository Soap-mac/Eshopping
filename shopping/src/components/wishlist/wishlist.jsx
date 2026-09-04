import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';

function WishList({ product, wishlistId, onRemove }) {

    const [deleting, setDeleting] = useState(false);

    const removeWishlist = async () => {

        if (!product?._id || deleting) {
            return;
        }

        try {

            setDeleting(true);

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/deletewishlist/${product._id}`,
                {
                    method: "DELETE",
                    credentials: "include"
                }
            );

            const data = await response.json();

            console.log("Delete wishlist response:", data);

            if (data.success) {

                // Remove from parent state
                onRemove(wishlistId);

            } else {

                console.error(data.message);

            }

        } catch (error) {

            console.error("Error removing wishlist item:", error);

        } finally {

            setDeleting(false);

        }

    };


    return (

        <div className="cart-product-card relative backdrop-blur-sm border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-gray-700/50 !p-4 sm:!p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10">

            {/* PRODUCT IMAGE + INFO */}

            <div className="flex items-start gap-4 sm:gap-6 justify-center w-full sm:w-auto !pr-10 sm:!pr-0">

                <div className="!w-20 !h-20 sm:!w-24 sm:!h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-600/50">

                    <Link to={`/product/${product?._id}`}>

                        <img
                            src={product?.images?.[0]}
                            alt={product?.name || "Product"}
                            className="!w-full !h-full object-cover hover:scale-105 transition-transform duration-300"
                        />

                    </Link>

                </div>


                <div className="flex-1 !space-y-3 sm:!space-y-4 min-w-0">

                    <div className="relative">

                        <Link to={`/product/${product?._id}`}>

                            <h3 className="text-base sm:text-lg font-semibold text-amber-50 leading-tight hover:text-amber-400 transition-colors">

                                {product?.name}

                            </h3>

                        </Link>


                        <p className="text-gray-400 text-sm !mt-1">

                            {product?.category}

                        </p>

                    </div>


                    <div className="flex items-center gap-3 flex-wrap">

                        {product?.oldPrice && (
                            <span className="text-gray-500 line-through text-sm">
                                ${product.oldPrice}
                            </span>
                        )}

                        <span className="text-amber-400 font-bold text-xl">
                            ${product?.price}
                        </span>

                        {product?.discount && (
                            <span className="bg-green-600/20 text-green-400 text-xs !px-2 !py-1 rounded-full font-medium">
                                {product.discount}% Off
                            </span>
                        )}

                    </div>

                </div>

            </div>


            {/* ADD TO CART */}

            <Button
                className="!border !border-amber-50 !w-full sm:!w-[160px] !bg-amber-600 sm:!ml-auto !text-[15px] !min-w-[0px] !h-[46px] sm:!h-[50px] !text-amber-50"
            >
                Add To Cart
            </Button>


            {/* REMOVE FROM WISHLIST */}

            <button
                type="button"
                onClick={removeWishlist}
                disabled={deleting}
                className="absolute !w-[36px] !h-[36px] sm:!w-[40px] sm:!h-[40px] top-2 right-2 !pl-[7px] !text-gray-400 hover:!text-red-400 hover:bg-red-500/10 rounded-full transition-all duration-200 !flex !justify-center !items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >

                <IoMdClose className="!w-5 !h-5 sm:!w-6 sm:!h-6" />

            </button>

        </div>

    );
}

export default WishList;