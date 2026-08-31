import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { MyContext } from '../../App';


function productitems(props) {

    const context = useContext(MyContext);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="productItem rounded-[15px] w-[190px] bg-[#302f2f] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="imgWrapper relative w-full h-[220px] bg-[#221f1f] flex items-center justify-center overflow-hidden group">

                {/* skeleton while loading */}
                {!imgLoaded && !imgError && (
                    <div className="absolute inset-0 bg-[#3a3838] animate-pulse" />
                )}

                {!imgError ? (
                    <img
                        src={props?.item?.images?.[0]}
                        alt={props?.item?.name || 'product'}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                        className={`max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-white/30 text-[13px]">
                        No image
                    </div>
                )}

                <span className='discount absolute bg-orange-600 top-[10px] left-[10px] !px-2 !py-1 text-[12px] font-semibold rounded-md text-white z-10'>
                    {props?.item?.discount}% OFF
                </span>

                <div className="actions absolute top-[-300px] right-[5px] flex items-center gap-2 flex-col w-[50px] transition-all duration-400 group-hover:top-[15px] z-10">
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-orange-600 hover:!text-white shadow-md'>
                        <CiHeart className='text-[20px]' />
                    </Button>
                    <Button
                        className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-orange-600 hover:!text-white shadow-md'
                        component={Link}
                        to={`/Productdetail/${props?.item?._id}`}
                    >
                        <MdOutlineZoomOutMap className='text-[20px]' />
                    </Button>
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-orange-600 hover:!text-white shadow-md'>
                        <GoGitCompare className='text-[20px]' />
                    </Button>
                </div>
            </div>

            <div className="info !p-3 w-full">
                <Link to="/" className='link'>
                    <p className='!text-[12px] text-white/50 whitespace-normal break-words uppercase tracking-wide'>
                        {props?.item?.brand}
                    </p>
                </Link>
                <Link to="/" className='link'>
                    <p className='!text-[15px] text-white whitespace-normal break-words font-medium !mt-1 line-clamp-2'>
                        {props?.item?.name}
                    </p>
                </Link>
                <Rating
                    name='size-small'
                    defaultValue={props?.item?.rating}
                    size='small'
                    readOnly
                    className='text-white !pt-2'
                />
                <div className="flex items-center gap-2 !mt-1">
                    <span className='oldPrice line-through text-white/40 text-[14px]'>${props?.item?.oldPrice}</span>
                    <span className='newPrice text-orange-500 font-bold text-[16px]'>${props?.item?.price}</span>
                </div>
            </div>
        </div>
    )
}

export default productitems