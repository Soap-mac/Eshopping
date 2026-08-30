import React from 'react'

function BannerBox(props) {
    return (
        <div className="bannerBox h-full bg-green-950 w-full">
            <img src={props.img} alt="" className='w-full bg-amber-900' />
        </div>
    )
}

export default BannerBox