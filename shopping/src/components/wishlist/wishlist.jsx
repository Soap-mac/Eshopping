import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';

function WishList({ product }) {
    return (
        <div className="cart-product-card backdrop-blur-sm border flex items-center border-gray-700/50 !p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10">
            <div className="flex items-start gap-6 justify-center">
                <div className="!w-24 !h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-600/50">
                    <Link>
                        <img
                            src={product.images?.[0]}
                            alt={product.name}
                            className="!w-full !h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>

                <div className="flex-1 !space-y-4">
                    <div className="relative">
                        <Link>
                            <h3 className="text-lg font-semibold text-amber-50 leading-tight hover:text-amber-400 transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        <p className="text-gray-400 text-sm !mt-1">
                            {product.category}
                        </p>


                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-gray-500 line-through text-sm">${product.oldPrice}</span>
                        <span className="text-amber-400 font-bold text-xl">${product.price}</span>
                        <span className="bg-green-600/20 text-green-400 text-xs !px-2 !py-1 rounded-full font-medium">
                            {product.discount}% Off
                        </span>
                    </div>
                </div>
            </div>
            <Button className='!border !border-amber-50 !w-[200px] !bg-amber-600 !ml-[80px] !text-[15px] !min-w-[0px] !h-[50px]  !text-amber-50'>Add To Cart</Button>
            <button className="absolute !w-[40px] !h-[40px] top-2 right-2 !pl-[7px] !text-gray-400 hover:!text-red-400 hover:bg-red-500/10 rounded-full transition-all duration-200 !flex !justify-between !items-center">
                <IoMdClose className="!w-6 !h-6" />
            </button>
        </div>
    )
}

export default WishList