import React, { useState, useEffect } from 'react';

const AuthLoadingSpinner = ({
    isLoading = true,
    message = "Processing your request...",
    subMessage = "Please wait while we authenticate you"
}) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        if (!isLoading) return;


        const dotsInterval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => {
            clearInterval(dotsInterval);
        };
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'
                }}
            />


            <div
                className="relative flex flex-col items-center gap-6 !p-10 rounded-3xl backdrop-blur-xl shadow-2xl min-w-[320px]"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >

                <div className="relative w-16 h-16">
                    <div
                        className="w-full h-full rounded-full border-4 border-transparent animate-spin"
                        style={{
                            borderTopColor: '#ff7b2e',
                            borderRightColor: '#ff7b2e',
                            borderBottomColor: 'rgba(255, 123, 46, 0.2)',
                            borderLeftColor: 'rgba(255, 255, 255, 0.1)',
                            animation: 'spin 1s linear infinite'
                        }}
                    />
                </div>


                <div className="text-center !space-y-2">
                    <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-1">
                        {message}
                        <span className="w-4 text-left" style={{ color: '#ff7b2e' }}>
                            {dots}
                        </span>
                    </h3>
                    <p className="text-sm text-gray-400">
                        {subMessage}
                    </p>
                </div>

                <div className="decorative-elements">
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                    <div className="star star-4"></div>
                </div>

            </div>


            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default AuthLoadingSpinner;