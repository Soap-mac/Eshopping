import React from 'react'
import './topStyle.css'
import { Link } from 'react-router-dom'

function Top() {
    return (
        <div className='topPart'>
            <div className="container border-b-2 border-gray-700">
                <div className="left">
                    <p className='text-white paragraph'>Get Bumper discount on new season fashion</p>
                </div>
                <div className="right">
                    <ul className='rightlinks'>
                        <li><Link to="/help" className='links transition'>Help Center</Link></li>
                        <li><Link to="/orderTrack " className='links transition'>Order Tracking</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Top