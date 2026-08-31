import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap, MdOutlineShoppingCart } from "react-icons/md";
import { GoGitCompare, GoGitCompareFill } from "react-icons/go";
import { MyContext } from '../../App';


function productitems(props) {

    const context = useContext(MyContext);
    const item = props?.item;

    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [wishlisted, setWishlisted] = useState(false);
    const [compared, setCompared] = useState(false);

    const oldPrice = item?.oldPrice;
    const price = item?.price;
    const hasDiscount = oldPrice && price && oldPrice > price;
    const discountPercent = item?.discount
        ? item.discount
        : hasDiscount
            ? Math.round(((oldPrice - price) / oldPrice) * 100)
            : null;

    const inStock = item?.countInStock === undefined || item?.countInStock > 0;
    const lowStock = item?.countInStock > 0 && item?.countInStock <= 5;

    const stopAndRun = (e, fn) => {
        e.preventDefault();
        e.stopPropagation();
        fn();
    };

    return (
        <div className="productItem group relative rounded-2xl w-[190px] bg-[#302f2f] border border-white/[0.06] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)]">

            <div className="imgWrapper relative w-full h-[220px] bg-[#221f1f] flex items-center justify-center overflow-hidden">

                {!imgLoaded && !imgError && (
                    <div className="absolute inset-0 bg-[#3a3838] animate-pulse" />
                )}

                {!imgError ? (
                    <img
                        src={item?.images?.[0]}
                        alt={item?.name || 'product'}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                        className={`max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'
                            } ${!inStock ? 'opacity-40 grayscale' : ''}`}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-white/30 text-[13px]">
                        No image
                    </div>
                )}

                {/* top-left discount badge */}
                {discountPercent ? (
                    <span className="absolute bg-orange-600 top-[10px] left-[10px] !px-2 !py-1 text-[12px] font-semibold rounded-md text-white z-10">
                        {discountPercent}% OFF
                    </span>
                ) : null}

                {/* out of stock ribbon */}
                {!inStock && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <span className="bg-black/80 text-white text-[13px] font-semibold !px-4 !py-1.5 rounded-full border border-white/20">
                            Out of Stock
                        </span>
                    </div>
                )}

                {/* low stock badge */}
                {inStock && lowStock && (
                    <span className="absolute bottom-[10px] left-[10px] bg-red-600/90 text-white text-[11px] font-medium !px-2 !py-[3px] rounded-md z-10">
                        Only {item.countInStock} left
                    </span>
                )}

                {/* side action buttons */}
                <div className="actions absolute top-[-300px] right-[5px] flex items-center gap-2 flex-col w-[50px] transition-all duration-400 group-hover:top-[15px] z-20">
                    <Button
                        onClick={(e) => stopAndRun(e, () => setWishlisted(!wishlisted))}
                        className={`!w-[35px] !min-w-[25px] !h-[35px] !rounded-full shadow-md transition-colors ${wishlisted ? '!bg-orange-600 !text-white' : '!bg-white !text-black hover:!bg-orange-600 hover:!text-white'
                            }`}
                    >
                        {wishlisted ? <FaHeart className='text-[16px]' /> : <CiHeart className='text-[20px]' />}
                    </Button>

                    <Button
                        className='!w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-orange-600 hover:!text-white shadow-md'
                        component={Link}
                        to={`/Productdetail/${item?._id}`}
                    >
                        <MdOutlineZoomOutMap className='text-[20px]' />
                    </Button>

                    <Button
                        onClick={(e) => stopAndRun(e, () => setCompared(!compared))}
                        className={`!w-[35px] !min-w-[25px] !h-[35px] !rounded-full shadow-md transition-colors ${compared ? '!bg-orange-600 !text-white' : '!bg-white !text-black hover:!bg-orange-600 hover:!text-white'
                            }`}
                    >
                        {compared ? <GoGitCompareFill className='text-[18px]' /> : <GoGitCompare className='text-[18px]' />}
                    </Button>
                </div>

                {/* add to cart — slides up from bottom on hover */}
                {inStock && (
                    <button
                        onClick={(e) => stopAndRun(e, () => context?.addToCart?.(item))}
                        className="absolute left-0 right-0 bottom-[-45px] group-hover:bottom-0 flex items-center justify-center gap-2 !py-2.5 bg-orange-600 text-white text-[13px] font-semibold tracking-wide transition-all duration-300 hover:bg-orange-500 z-20"
                    >
                        <MdOutlineShoppingCart className='text-[16px]' />
                        ADD TO CART
                    </button>
                )}
            </div>

            <div className="info !p-3 w-full">
                <Link to="/" className='link'>
                    <p className='!text-[11px] text-white/45 whitespace-normal break-words uppercase tracking-wider'>
                        {item?.brand}
                    </p>
                </Link>
                <Link to={`/Productdetail/${item?._id}`} className='link'>
                    <p className='!text-[15px] text-white whitespace-normal break-words font-medium !mt-1 line-clamp-2 min-h-[40px]'>
                        {item?.name}
                    </p>
                </Link>

                <div className="flex items-center gap-1.5 !pt-1.5">
                    <Rating
                        name='size-small'
                        value={item?.rating || 0}
                        size='small'
                        readOnly
                        precision={0.5}
                        className='text-orange-500'
                    />
                    {item?.numReviews ? (
                        <span className='text-white/40 text-[11px]'>({item.numReviews})</span>
                    ) : null}
                </div>

                <div className="flex items-baseline gap-2 !mt-1.5">
                    <span className='newPrice text-orange-500 font-bold text-[17px]'>
                        ${price?.toLocaleString()}
                    </span>
                    {hasDiscount && (
                        <span className='oldPrice line-through text-white/40 text-[13px]'>
                            ${oldPrice?.toLocaleString()}
                        </span>
                    )}
                </div>

                {hasDiscount && (
                    <p className='text-[11px] text-green-500/90 font-medium !mt-0.5'>
                        You save ${(oldPrice - price).toLocaleString()}
                    </p>
                )}
            </div>
        </div>
    )
}

export default productitems