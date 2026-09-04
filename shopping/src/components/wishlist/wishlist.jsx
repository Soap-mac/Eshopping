import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';

function WishList({ product }) {
    return (
        <div className="cart-product-card relative backdrop-blur-sm border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-gray-700/50 !p-4 sm:!p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10">
            <div className="flex items-start gap-4 sm:gap-6 justify-center w-full sm:w-auto !pr-10 sm:!pr-0">
                <div className="!w-20 !h-20 sm:!w-24 sm:!h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-600/50">
                    <Link>
                        <img
                            src={product.images?.[0]}
                            alt={product.name}
                            className="!w-full !h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>

                <div className="flex-1 !space-y-3 sm:!space-y-4 min-w-0">
                    <div className="relative">
                        <Link>
                            <h3 className="text-base sm:text-lg font-semibold text-amber-50 leading-tight hover:text-amber-400 transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        <p className="text-gray-400 text-sm !mt-1">
                            {product.category}
                        </p>


                    </div>

                    <div className="flex items-center gap-3 flex-wrap">

                        <span className="text-gray-500 line-through text-sm">${product.oldPrice}</span>
                        <span className="text-amber-400 font-bold text-xl">${product.price}</span>
                        <span className="bg-green-600/20 text-green-400 text-xs !px-2 !py-1 rounded-full font-medium">
                            {product.discount}% Off
                        </span>
                    </div>
                </div>
            </div>
            <Button className='!border !border-amber-50 !w-full sm:!w-[160px] !bg-amber-600 sm:!ml-auto !text-[15px] !min-w-[0px] !h-[46px] sm:!h-[50px]  !text-amber-50'>Add To Cart</Button>
            <button className="absolute !w-[36px] !h-[36px] sm:!w-[40px] sm:!h-[40px] top-2 right-2 !pl-[7px] !text-gray-400 hover:!text-red-400 hover:bg-red-500/10 rounded-full transition-all duration-200 !flex !justify-center !items-center">
                <IoMdClose className="!w-5 !h-5 sm:!w-6 sm:!h-6" />
            </button>
        </div>
    )
}

export default WishList