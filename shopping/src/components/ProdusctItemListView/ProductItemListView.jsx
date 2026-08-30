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


function productitemListView() {
    const context = useContext(MyContext)
    return (
        <div className="productItem rounded-[15px] !w-[100%] bg-[#302f2f] flex items-center justify-start">
            <div className="imgrapper  h-[250px] overflow-hidden rounded-md relative group w-[20%]">
                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" className='w-[89%] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                <span className='discount absolute bg-amber-600 top-[10px] left-[10px] !p-1 text-[13px] rounded-md'>10%</span>
                <div className="actions absolute top-[-300px] right-[25px] flex items-center gap-2 flex-col w-[50px] transition-all duration-400 group-hover:top-[15px]">
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50'><CiHeart className='text-[20px]' /></Button>
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50' onClick={() => context.setOpenProductModle(true)}><MdOutlineZoomOutMap className='text-[20px]' /></Button>
                    <Button className='group !w-[35px] !min-w-[25px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-amber-600 hover:!text-amber-50'><GoGitCompare className='text-[20px]' /></Button>

                </div>
            </div>
            <div className="info !p-3 w-[80%]">
                <Link to="/" ><p className='!text-[16px] whitespace-normal break-words text-[#fff]'>BEST</p></Link>
                <Link to="/" ><p className='!text-[20px] whitespace-normal break-words font-medium text-[#fff]'>SAREE</p></Link>
                <Link to="/" className='link'><p className='!text-[16px] whitespace-normal break-words font-medium text-amber-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam autem ducimus iste numquam quidem, cumque temporibus, nostrum eveniet non eius odio nam rem. Facilis voluptatibus possimus accusantium odit iure.</p></Link>
                <Rating name='size-small' defaultValue={3} size='medium' readOnly className='text-white !pt-3' />
                <div className="flex items-center gap-4 text-[20px]">
                    <span className='oldPrice line-through'>$100</span>
                    <span className='newPrice text-orange-500 font-bold'>$50</span>
                </div>
                <Button className='!w-[20%] !bg-amber-600 !text-white !mt-[15px] hover:!bg-[#171717]'>Add To Cart</Button>
            </div>
        </div>
    )
}

export default productitemListView