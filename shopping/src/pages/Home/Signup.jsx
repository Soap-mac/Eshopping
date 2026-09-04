import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { handleError, handleSucess } from '../../utils';
import AuthLoadingSpinner from '../../components/LoadingAnimation/loading';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function signup() {
    const [signupinfo, SetSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyinfo = { ...signupinfo };
        copyinfo[name] = value;
        SetSignupInfo(copyinfo);
    }
    console.log(signupinfo);

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setCnfShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validateEmail = (email) => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailRegex.test(email);
        }
        const { name, email, password, confirmPassword } = signupinfo;
        if (!name) {
            handleError('Please provide your Name');
        } else if (!email) {
            handleError('Please provide your Email Address');
        } else if (!validateEmail(email)) {
            handleError('Email is wrong please provide a correct Email');
        } else if (!password) {
            handleError('Please set your password');
        } else if (!confirmPassword) {
            handleError('Please fill the confirm password');
        } else if (password != confirmPassword) {
            handleError('Password and Confirm Password are not same');
        } else {
            try {
                const url = `${import.meta.env.VITE_API_URL}/signup`
                setLoading(true);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(signupinfo)
                })
                const result = await response.json();
                console.log(result);
                if (result.success) {
                    handleSucess(result.message);
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000)
                } else {
                    setLoading(false);
                    handleError(result.message);
                }

            } catch (error) {
                console.log(error);
                handleError(error);
            }
        }
    }

    return (
        <>

            {loading && <>
                <AuthLoadingSpinner />
            </>}

            {!loading && <>
                <div className="signup-page">
                    <div className="signup-container">
                        <div className="signup-header !mt-[-20px]">
                            <div className="logo-section">
                                <h1 className="brand-name">ARPIT</h1>
                                <p className="brand-tagline">CLICK. CART. SHOP SMART</p>
                            </div>
                        </div>

                        <div className="signup-form-wrapper">
                            <h2 className="signup-title">Create Account</h2>
                            <p className="signup-subtitle">Join us and start shopping smart</p>

                            <form className="signup-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        placeholder='Enter your full name'
                                        onChange={handleChange}
                                        className="form-input"

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        onChange={handleChange}
                                        className="form-input"

                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-5 sm:gap-[30px]">
                                    <div className="passwords">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name='password'
                                            placeholder='Create a strong password'
                                            onChange={handleChange}
                                            className="form-input"

                                        />
                                        {
                                            !showPassword && <FaEye className='text-[#fe6404] text-[22px] absolute top-[42px] right-[14px] cursor-pointer drop-shadow-[0_0_9px_#fe6404]' onClick={() => setShowPassword(!showPassword)} />

                                        }
                                        {
                                            showPassword && <FaEyeSlash className='text-[#fe6404] text-[22px] absolute top-[42px] right-[14px] cursor-pointer drop-shadow-[0_0_9px_#fe6404]' onClick={() => setShowPassword(!showPassword)} />

                                        }
                                    </div>
                                    <div className="passwords">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input
                                            type={showCnfPassword ? 'text' : 'password'}
                                            id="password"
                                            name='confirmPassword'
                                            placeholder='Confirm Your Password'
                                            onChange={handleChange}
                                            className="form-input"

                                        />
                                        {
                                            !showCnfPassword && <FaEye className='text-[#fe6404] text-[22px] absolute top-[42px] right-[14px] cursor-pointer drop-shadow-[0_0_9px_#fe6404]' onClick={() => setCnfShowPassword(!showCnfPassword)} />

                                        }
                                        {
                                            showCnfPassword && <FaEyeSlash className='text-[#fe6404] text-[22px] absolute top-[42px] right-[14px] cursor-pointer drop-shadow-[0_0_9px_#fe6404]' onClick={() => setCnfShowPassword(!showCnfPassword)} />

                                        }
                                    </div>
                                </div>


                                <button type="submit" className="signup-btn">
                                    Create Account
                                </button>

                                <div className="signup-footer">
                                    <span className="login-text">
                                        Already have an account?
                                        <Link to='/login' className="login-link">Sign In</Link>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="decorative-elements">
                            <div className="star star-1"></div>
                            <div className="star star-2"></div>
                            <div className="star star-3"></div>
                            <div className="star star-4"></div>
                            <div className="star star-5"></div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </>}

        </>

    )
}

export default signup