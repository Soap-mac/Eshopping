import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import { MyContext } from '../../App';
import { useContext, useEffect } from 'react';
import { handleError, handleSucess } from '../../utils';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AuthLoadingSpinner from '../../components/LoadingAnimation/loading';

function Profile() {
    const textFieldStyles = {
        input: {
            color: '#d9750b',
        },
        '& .MuiInputLabel-root': {
            color: '#d1d5db',
            fontSize: '16px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#f59e0b',
        },
        '& .MuiOutlinedInput-root': {
            color: '#fef3c7',
            '& fieldset': {
                borderColor: '#4b5563',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#f59e0b',
                borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#f59e0b',
                borderWidth: '2px',
                boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.1)',
            },
        },
    };

    const navigate = useNavigate();
    const context = useContext(MyContext);
    const { setAvatar, setName, setEmail, setPhone, avatar, isAuthenticated, setIsAuthenticated, isLogin, setIsLogin } = context;


    useEffect(() => {

        const fetchDetails = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/profileDetails`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },


                })
                console.log(response);
                const data = await response.json();
                console.log(data);
                // console.log("The Avatar in set Avatar" + avatar);
                // console.log("The Avatar in data" + data.user.avatar);
                setIsLogin(data.success);
                console.log(data.success);
                if (!data.success) {
                    navigate('/');
                } else {
                    // handleError(data.message);
                    setAvatar(data.user.avatar || '');
                    setName(data.user.name || '');
                    setEmail(data.user.email || '');
                    setPhone(data.user.mobile || '');

                }
                console.log("Avatar in set avatar now " + avatar);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDetails();

    }, []);

    const saveDetails = async () => {

        const userDetails = {
            name: context.name || '',
            email: context.email || '',
            mobile: context.phone || ''
        };
        try {
            const url = `${import.meta.env.VITE_API_URL}/update-profile`;
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response);
            const data = await response.json();
            if (data.success) {
                handleSucess(data.message);
                console.log(data.message);
            } else {
                console.error(data.message);
            }
            console.log(data);
        } catch (error) {
            console.log("Error saving details:", error);
        }
    }

    return (


        <>
            {isLogin &&
                <>
                    <div className="text-amber-50 flex flex-col lg:flex-row !bg-transparent min-h-screen !p-4 sm:!p-8 lg:!px-[100px] !pt-8 sm:!pt-[60px] gap-6 lg:gap-0">
                        <ProfileSide />
                        <div className="profile-right w-full lg:w-[65%] lg:!ml-8">
                            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl !p-5 sm:!p-8 shadow-2xl">
                                <div className="profile-right-heading !mb-6 sm:!mb-8">
                                    <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-amber-50 capitalize">
                                        Your Profile
                                    </h2>
                                    <p className="text-gray-400 text-[15px] sm:text-[18px] !mt-2">Manage your personal information</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 !mb-6">
                                    <div className="profile-right-name flex-1">
                                        <label htmlFor="Name" className="block text-[16px] sm:text-[20px] font-medium text-gray-300 !mb-3">Name</label>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter your name"
                                            variant="outlined"
                                            fullWidth
                                            className='!bg-[#282727] !rounded-[23px] !mt-[10px]'
                                            sx={textFieldStyles}
                                            value={context.name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="profile-right-email flex-1">
                                        <label htmlFor="Name" className="block text-[16px] sm:text-[20px] font-medium text-gray-300 !mb-3">Email</label>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter your email"
                                            variant="outlined"
                                            fullWidth
                                            className='!bg-[#282727] !rounded-[23px] !mt-[10px]'
                                            sx={textFieldStyles}
                                            value={context.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="!mb-8">
                                    <label htmlFor="Name" className="block text-[16px] sm:text-[20px] font-medium text-gray-300 !mb-3">Phone Number</label>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter your phone number"
                                        variant="outlined"
                                        fullWidth
                                        className='!bg-[#282727] !rounded-[23px] !mt-[10px]'
                                        sx={textFieldStyles}
                                        value={context.phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button onClick={saveDetails} className="!flex-1 !bg-gradient-to-r !from-amber-600 !to-amber-500 hover:!from-amber-700 hover:!to-amber-600 !text-white !py-3.5 sm:!py-4 !rounded-xl !font-bold !text-base sm:!text-lg !transition-all !duration-300 !shadow-lg hover:!shadow-2xl !border-0 !transform hover:!scale-105 !normal-case">
                                        Save Changes
                                    </Button>
                                    <Button className="!flex-1 !bg-gray-700 hover:!bg-gray-600 !text-gray-300 hover:!text-white !py-3.5 sm:!py-4 !rounded-xl !font-bold !text-base sm:!text-lg !transition-all !duration-300 !shadow-lg hover:!shadow-2xl !border-0 !normal-case">
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </>
            }
            {!isLogin &&
                <>
                    {/* <p className='text-amber-50'>LOADING.....</p> */}
                    <AuthLoadingSpinner />
                </>
            }
        </>
    )

}

export default Profile