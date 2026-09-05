import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSucess } from '../../utils';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (!email) return handleError('Please provide your email address');
        if (!validateEmail(email)) return handleError('Please provide a valid email address');

        setSubmitting(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const result = await res.json();
            if (result.success) {
                handleSucess(result.message);
                setStep(2);
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (!otp) return handleError('Please enter the code we emailed you');

        setSubmitting(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            const result = await res.json();
            if (result.success) {
                setStep(3);
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) return handleError('Please fill in both password fields');
        if (newPassword.length < 5) return handleError('Password must be at least 5 characters');
        if (newPassword !== confirmPassword) return handleError('Passwords do not match');

        setSubmitting(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword })
            });
            const result = await res.json();
            if (result.success) {
                handleSucess(result.message);
                navigate('/Login');
            } else {
                handleError(result.message);
            }
        } catch (error) {
            console.log(error);
            handleError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-header">
                        <div className="logo-section">
                            <h1 className="brand-name">ARPIT</h1>
                            <p className="brand-tagline">CLICK. CART. SHOP SMART</p>
                        </div>
                    </div>
                    <div className="login-form-wrapper">
                        <h2 className="login-title">Reset your password</h2>
                        <p className="login-subtitle">
                            {step === 1 && "Enter the email on your account and we'll send you a code"}
                            {step === 2 && `Enter the 6-digit code we sent to ${email}`}
                            {step === 3 && "Choose a new password"}
                        </p>

                        {step === 1 && (
                            <form className="login-form" onSubmit={handleSendOtp}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                                <button type="submit" className="login-btn" disabled={submitting}>
                                    {submitting ? 'Sending code...' : 'Send reset code'}
                                </button>
                                <div className="login-footer">
                                    <span className="signup-text">
                                        Remembered your password?
                                        <Link to='/Login' className="signup-link">Back to login</Link>
                                    </span>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <form className="login-form" onSubmit={handleVerifyOtp}>
                                <div className="form-group">
                                    <label htmlFor="otp" className="form-label">Verification code</label>
                                    <input
                                        type="text"
                                        id="otp"
                                        name="otp"
                                        placeholder="6-digit code"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="form-input"
                                        maxLength={6}
                                    />
                                </div>
                                <button type="submit" className="login-btn" disabled={submitting}>
                                    {submitting ? 'Verifying...' : 'Verify code'}
                                </button>
                                <div className="login-footer">
                                    <span className="signup-text">
                                        Didn't get a code?
                                        <Link
                                            to='#'
                                            className="signup-link"
                                            onClick={(e) => { e.preventDefault(); setStep(1); }}
                                        >
                                            Try a different email
                                        </Link>
                                    </span>
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <form className="login-form" onSubmit={handleResetPassword}>
                                <div className="form-group">
                                    <label htmlFor="newPassword" className="form-label">New password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="newPassword"
                                        name="newPassword"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="form-input"
                                    />
                                    {!showPassword && <FaEye className='text-[#fe6404] text-[25px] absolute top-[45px] right-[10px]' onClick={() => setShowPassword(!showPassword)} />}
                                    {showPassword && <FaEyeSlash className='text-[#fe6404] text-[25px] absolute top-[45px] right-[10px]' onClick={() => setShowPassword(!showPassword)} />}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm new password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Re-enter new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                                <button type="submit" className="login-btn" disabled={submitting}>
                                    {submitting ? 'Resetting...' : 'Reset password'}
                                </button>
                            </form>
                        )}
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
    )
}

export default ForgotPassword