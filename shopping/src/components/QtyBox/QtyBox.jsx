import React from 'react'

function QtyBox(props) {
    return (
        <div className='!text-amber-50'>
            <input type="number" className='qtyInput border border-amber-50 focus:outline-none text-[14px] w-[80px] !p-3 !text-amber-50 !h-[50px]' value={props.value} />
        </div>
    )
}

export default QtyBox