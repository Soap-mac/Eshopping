import React from 'react'
import Button from '@mui/material/Button';
import { IoMdCloudUpload } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { handleError, handleSucess } from '../../utils';
import { ToastContainer } from 'react-toastify';

function ProfileSide() {

    const navigate = useNavigate();

    const context = useContext(MyContext);
    const { avatar, setAvatar, name, email, setIsLogin } = context;

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
        try {
            const url = `${import.meta.env.VITE_API_URL}/upload-avatar`;
            const response = fetch(url, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });
        } catch (error) {
            console.error("Error uploading avatar:", error);
        }
    };

    const handleLogout = async (e) => {

        console.log('Logout clicked');
        e.preventDefault();
        try {
            e.preventDefault();
            const url = `${import.meta.env.VITE_API_URL}/logout`;
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-Type': 'application/json'
                }
            })
            const result = await response.json();
            console.log(result);
            if (result.success) {
                handleSucess(result.message);
                setIsLogin(false);
                navigate('/');
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError(error);
        }
    }



    return (
        <div className="w-full lg:w-[30%] !pr-0 lg:!pr-8">
            <div className="sticky !top-[60px] !space-y-8">
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl !p-8 shadow-2xl !mb-8">
                    <div className="profile-img relative !mb-6 flex justify-center">
                        {avatar === '' ? (
                            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740"
                                className='w-[120px] h-[120px] rounded-full border-4 border-amber-400/30 object-cover' alt="" />
                        ) : (
                            <img src={avatar} className='w-[120px] h-[120px] rounded-full border-4 border-amber-400/30 object-cover' alt="" />
                        )}
                        <div className="overlay w-[120px] h-[120px] absolute top-0 left-1/2 transform -translate-x-1/2 bg-[rgba(0,0,0,0.7)] rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <IoMdCloudUpload className="text-amber-50 text-3xl" />
                            <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' onChange={handleChangeAvatar} />
                        </div>
                    </div>
                    <div className="profilePage-card-info text-center">
                        <h3 className="text-[32px] font-bold text-[#d9750b] !mb-2">{name}</h3>
                        <p className="text-[#be6505] text-[17px]">{email}</p>
                    </div>
                </div>
                <div className="profile-list bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl !p-6 shadow-2xl">
                    <ul className="!space-y-3">
                        <li className='profile-list-option'>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) => 'block relative'}
                            >
                                {({ isActive }) => (
                                    <Button
                                        className={`!w-full !justify-start !py-3 !px-4 !rounded-lg !transition-all !duration-300 !border-l-4 ${isActive
                                            ? '!text-amber-700 !bg-amber-400/10 !border-amber-600 !text-[18px]'
                                            : '!text-gray-300 !border-transparent hover:!text-amber-700 hover:!bg-amber-400/10 hover:!border-amber-600 !text-[16px]'
                                            }`}
                                    >
                                        <FaUser className="!mr-3" />
                                        My Profile
                                    </Button>
                                )}
                            </NavLink>

                        </li>
                        <li className='profile-list-option'>
                            <NavLink
                                to="/orders"
                                className={({ isActive }) => 'block relative'}
                            >
                                {({ isActive }) => (
                                    <Button
                                        className={`!w-full !justify-start !py-3 !px-4 !rounded-lg !transition-all !duration-300 !border-l-4 ${isActive
                                            ? '!text-amber-700 !bg-amber-400/10 !border-amber-600 !text-[18px]'
                                            : '!text-gray-300 !border-transparent hover:!text-amber-700 hover:!bg-amber-400/10 hover:!border-amber-600 !text-[16px]'
                                            }`}
                                    >
                                        <FaShoppingBag className="!mr-3" />
                                        My Orders
                                    </Button>
                                )}
                            </NavLink>

                        </li>
                        <li className='profile-list-option'>
                            <NavLink
                                to="/wishlist"
                                className={({ isActive }) => 'block relative'}
                            >
                                {({ isActive }) => (
                                    <Button
                                        className={`!w-full !justify-start !py-3 !px-4 !rounded-lg !transition-all !duration-300 !border-l-4 ${isActive
                                            ? '!text-amber-700 !bg-amber-400/10 !border-amber-600 !text-[18px]'
                                            : '!text-gray-300 !border-transparent hover:!text-amber-700 hover:!bg-amber-400/10 hover:!border-amber-600 !text-[16px]'
                                            }`}
                                    >
                                        <FaHeart className="!mr-3" />
                                        My WishList
                                    </Button>
                                )}
                            </NavLink>

                        </li>
                        <li className='profile-list-option'>

                            <Button
                                onClick={handleLogout}
                                className={`!w-full !justify-start !py-3 !px-4 !rounded-lg !transition-all !duration-300 !border-l-4
                                    !text-gray-300 !border-transparent hover:!text-amber-700 hover:!bg-amber-400/10 hover:!border-amber-600 !text-[16px]
                                    }`}
                            >
                                <RiLogoutBoxLine className="!mr-3" />
                                Logout
                            </Button>


                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProfileSide