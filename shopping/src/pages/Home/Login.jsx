import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { handleError, handleSucess } from '../../utils';
import AuthLoadingSpinner from '../../components/LoadingAnimation/loading';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MyContext } from '../../App';

function login() {

    const context = useContext(MyContext);

    const { isLogin, setIsLogin } = context;

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [logininfo, SetLoginInfo] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyinfo = { ...logininfo };
        copyinfo[name] = value;
        SetLoginInfo(copyinfo);
    }
    // console.log(logininfo);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = logininfo;

        const validateEmail = (email) => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailRegex.test(email);
        }
        if (!email) {
            handleError('Please provide your Email Address');
        } else if (!validateEmail(email)) {
            handleError('Email is wrong please provide a correct Email');
        } else if (!password) {
            handleError('Please provide your password');
        } else {
            try {

                const url = `${import.meta.env.VITE_API_URL}/login`
                const response = await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(logininfo)
                })
                const result = await response.json();
                // console.log(result);
                if (result.success) {
                    handleSucess(result.message);
                    setIsLogin(true);

                    navigate('/');
                } else {
                    setIsLogin(false);
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

            {loading === true && <>
                <AuthLoadingSpinner />
            </>}

            {loading === false && <>
                <div className="login-page">
                    <div className="login-container">
                        <div className="login-header">
                            <div className="logo-section">
                                <h1 className="brand-name">ARPIT</h1>
                                <p className="brand-tagline">CLICK. CART. SHOP SMART</p>
                            </div>
                        </div>
                        <div className="login-form-wrapper">
                            <h2 className="login-title">Welcome Back</h2>
                            <p className="login-subtitle">Log in to your account</p>

                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        onChange={handleChange}
                                        className="form-input"

                                    />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name='password'
                                        placeholder='Enter your password'
                                        onChange={handleChange}
                                        className="form-input"

                                    />
                                    {
                                        !showPassword && <FaEye className='text-[#fe6404] text-[25px] absolute top-[45px] right-[10px]' onClick={() => setShowPassword(!showPassword)} />

                                    }
                                    {
                                        showPassword && <FaEyeSlash className='text-[#fe6404] text-[25px] absolute top-[45px] right-[10px]' onClick={() => setShowPassword(!showPassword)} />

                                    }
                                    <Link to='/ForgotPassword' className="login-link" style={{ display: 'block', textAlign: 'right', marginTop: '8px', marginLeft: 0 }}>
                                        Forgot password?
                                    </Link>
                                </div>


                                <button type="submit" className="login-btn">
                                    Login
                                </button>

                                <div className="login-footer">
                                    <span className="signup-text">
                                        Don't have an account?
                                        <Link to='/signup' className="signup-link">Create Account</Link>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="decorative-elements">
                            <div className="star star-1"></div>
                            <div className="star star-2"></div>
                            <div className="star star-3"></div>
                            <div className="star star-4"></div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </>
            }
        </>
    )

}

export default login