import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { GrGift } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";

function Footer() {
    return (
        <footer>
            <div className="container !py-10 sm:!py-14 lg:!py-[105px] border-b-2 border-gray-500 border-t-2">
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-around w-full !px-6 sm:!px-10 lg:!mx-[105px] lg:!px-0 gap-y-8 gap-x-4'>
                    <div className="footerIcons flex flex-col justify-center items-center text-center">
                        <MdOutlineLocalShipping className='!text-[32px] sm:!text-[40px] text-white link hover:!bg-transparent' />
                        <p className='text-white !mt-[10px] text-[13px] sm:text-base'>Free Shipping</p>
                        <p className='text-white text-[12px] sm:text-base'>For All Orders Over 500</p>
                    </div>
                    <div className="footerIcons flex flex-col justify-center items-center text-center">
                        <GiReturnArrow className='!text-[32px] sm:!text-[40px] text-white link hover:!bg-transparent' />
                        <p className='text-white !mt-[10px] text-[13px] sm:text-base'>Free Shipping</p>
                        <p className='text-white text-[12px] sm:text-base'>For All Orders Over 500</p>
                    </div>
                    <div className="footerIcons flex flex-col justify-center items-center text-center">
                        <IoWalletOutline className='!text-[32px] sm:!text-[40px] text-white link hover:!bg-transparent' />
                        <p className='text-white !mt-[10px] text-[13px] sm:text-base'>Free Shipping</p>
                        <p className='text-white text-[12px] sm:text-base'>For All Orders Over 500</p>
                    </div>
                    <div className="footerIcons flex flex-col justify-center items-center text-center">
                        <GrGift className='!text-[32px] sm:!text-[40px] text-white link hover:!bg-transparent' />
                        <p className='text-white !mt-[10px] text-[13px] sm:text-base'>Free Shipping</p>
                        <p className='text-white text-[12px] sm:text-base'>For All Orders Over 500</p>
                    </div>
                    <div className="footerIcons flex flex-col justify-center items-center text-center">
                        <RiCustomerService2Fill className='!text-[32px] sm:!text-[40px] text-white link hover:!bg-transparent' />
                        <p className='text-white !mt-[10px] text-[13px] sm:text-base'>Free Shipping</p>
                        <p className='text-white text-[12px] sm:text-base'>For All Orders Over 500</p>
                    </div>
                </div>
            </div>
            <div className="container lg:!h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-around w-full !px-6 sm:!px-10 lg:!mx-[105px] lg:!px-0 !py-10 sm:!py-14 lg:!my-[80px] lg:!py-0 gap-y-10 gap-x-8">
                    <div className="footerBoxes">
                        <p className='font-semibold text-amber-50 text-[22px] sm:text-[25px] '>Contact Us</p>
                        <p className='text-[#a49a9a] !pt-[20px] text-[14px]'>Arpit Shop- Online SuperMarket</p>
                        <p className='text-[#a49a9a] text-[14px]'>Bhadrichak Flat Dhanbad Jharkhand India</p>
                        <p className='text-[#a49a9a] !py-[15px]'>arpit@gmail.com</p>
                        <p className='text-orange-500'>(+91) 1234567890</p>
                        <div className="chat flex items-center justify-self-start gap-[20px] !mt-[12px] text-amber-50">
                            <div className="leftChat">
                                <IoChatbubblesOutline className='!text-[33px] text-orange-500' />
                            </div>
                            <div className="rightChat">
                                <p>Online Chat</p>
                                <p>Get Expert Help</p>
                            </div>
                        </div>
                    </div>
                    <div className="footerBoxes">
                        <p className='font-semibold text-amber-50 text-[22px] sm:text-[25px]'>Products</p>
                        <ul className='!pt-[20px] text-[#a49a9a] text-[14px]'>
                            <li className='!pb-[10px]'>Price Drop</li>
                            <li className='!pb-[10px]'>New Products</li>
                            <li className='!pb-[10px]'>Best Sales</li>
                            <li className='!pb-[10px]'>Stores</li>
                            <li className='!pb-[10px]'>Sitemaps</li>
                        </ul>
                    </div>
                    <div className="footerBoxes">
                        <p className='font-semibold text-amber-50 text-[22px] sm:text-[25px]'>Our Company</p>
                        <ul className='!pt-[20px] text-[#a49a9a] text-[14px]'>
                            <li className='!pb-[10px]'>Delivery</li>
                            <li className='!pb-[10px]'>Legal Notice</li>
                            <li className='!pb-[10px]'>Terms and Condition</li>
                            <li className='!pb-[10px]'>About Us</li>
                            <li className='!pb-[10px]'>Secure Payment</li>
                        </ul>
                    </div>
                    <div className="footerBoxes">
                        <p className='font-semibold text-amber-50 text-[22px] sm:text-[25px]'>Subscribe</p>
                        <p className='!pt-[13px]'>Subscribe to Our Website </p>
                        <p>to Get the latest Deals</p>
                        <input type="text" placeholder='Your Email Address' className='!text-white h-20% !z-50 placeholder-[#a49a9a] border-2 border-amber-50 !h-[46px] !mt-[15px] !px-[20px] w-full max-w-[280px]' /> <br />
                        <button className='bg-orange-400 !mt-[20px] !w-fit !px-[20px] !py-[6px] rounded-[20px] text-amber-50'>SUBSCRIBE</button>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer