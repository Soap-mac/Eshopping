import React, { useContext } from 'react'
import laptop from '../../assets/SliderImages/laptop.webp';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { MyContext } from '../../App';


function productitems(props) {

    const context = useContext(MyContext);
    return (
        <div className="productItem rounded-[15px] w-[190px] bg-[#302f2f]">
            <div className="imgrapper w-[100%] h-[250px] overflow-hidden rounded-md relative group">
                <img src={props?.item?.images[0]} alt="" className='w-[190px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                <span className='discount absolute bg-amber-600 top-[10px] left-[10px] !p-1 text-[13px] rounded-md'>{props?.item?.discount}%</span>
                <div className="actions absolute top-[-300px] right-[5px] flex items-center gap-2 flex-col w-[50px] transition-all duration-400 group-hover:top-[15px]">
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50'><CiHeart className='text-[20px]' /></Button>
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50' component={Link} to={`/Productdetail/${props?.item?._id}`}><MdOutlineZoomOutMap className='text-[20px]' /></Button>
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50'><GoGitCompare className='text-[20px]' /></Button>

                </div>
            </div>
            <div className="info !p-3 w-[190px]">
                <Link to="/" className='link'><p className='!text-[12px] whitespace-normal break-words'>{props?.item?.brand}</p></Link>
                <Link to="/" className='link'><p className='!text-[16px] whitespace-normal break-words font-medium'>{props?.item?.name}</p></Link>
                <Rating name='size-small' defaultValue={props?.item?.rating} size='small' readOnly className='text-white !pt-3' />
                <div className="flex items-center gap-4">
                    <span className='oldPrice line-through'>${props?.item?.oldPrice}</span>
                    <span className='newPrice text-orange-500 font-bold'>${props?.item?.price}</span>
                </div>
            </div>
        </div>
    )
}

export default productitems