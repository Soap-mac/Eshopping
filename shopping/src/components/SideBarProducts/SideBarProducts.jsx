import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { Button } from '@mui/material';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';

function SideBarProducts() {
    const [isCheckbox, setIsCheckbox] = useState(true);
    const [value, setValue] = useState([100, 1000]); // Set default range

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="sidebar !w-full">


            <div className="checkbox !w-full Availibility">
                <div className="!mb-3 text-[20px] font-[600] w-full h-[40px] flex items-center gap-[10px]">
                    <Button onClick={() => setIsCheckbox(!isCheckbox)} className='!w-[50px] !min-w-0'>
                        {
                            isCheckbox === false ? <FaAngleDown /> : <FaAngleUp />
                        }
                    </Button>
                    Availability</div>
                <Collapse isOpened={isCheckbox}>
                    <div className="scroll !px-3">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',

                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="Available"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="Not Available"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="All"
                            className='!text-amber-50 w-full'
                        />
                    </div>
                </Collapse>
            </div>

            <div className="checkbox !w-full Brands">
                <div className="!mb-3 text-[20px] font-[600] w-full h-[40px] flex items-center gap-[10px]">
                    <Button onClick={() => setIsCheckbox(!isCheckbox)} className='!w-[50px] !min-w-0'>
                        {
                            isCheckbox === false ? <FaAngleDown /> : <FaAngleUp />
                        }
                    </Button>
                    Brands</div>
                <Collapse isOpened={isCheckbox}>
                    <div className="scroll !px-3">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',

                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="ZARA"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="Louis Phillipe"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="WRONG"
                            className='!text-amber-50 w-full'
                        />
                    </div>
                </Collapse>
            </div>

            <div className="checkbox !w-full Brands">
                <div className="!mb-3 text-[20px] font-[600] w-full h-[40px] flex items-center gap-[10px]">
                    <Button onClick={() => setIsCheckbox(!isCheckbox)} className='!w-[50px] !min-w-0'>
                        {
                            isCheckbox === false ? <FaAngleDown /> : <FaAngleUp />
                        }
                    </Button>
                    SIZE</div>
                <Collapse isOpened={isCheckbox}>
                    <div className="scroll !px-3">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',

                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="XS"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white',
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="S"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="M"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="L"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="XL"
                            className='!text-amber-50 w-full'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            border: '1px solid white', // Change to your desired border
                                            borderRadius: '4px',
                                        }
                                    }}
                                    size='small'
                                />
                            }
                            label="XXL"
                            className='!text-amber-50 w-full'
                        />

                    </div>
                </Collapse>
            </div>

            <div className="pricing !mt-[20px]" >
                <h3 className="text-lg font-semibold text-white">Price</h3>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={5000}
                    sx={{ color: '#fbbf24' }}
                    className='!w-[90%]'
                />
                <div className="flex justify-between pt-2 pb-2 text-white">
                    <span>
                        From: <strong className="text-amber-50">Rs {value[0]}</strong>
                    </span>
                    <span>
                        To: <strong className="text-amber-50 !mr-[20px]">Rs {value[1]}</strong>
                    </span>
                </div>
            </div>

            <div className="rating-start ">
                <h3 className="text-lg font-semibold text-white !mt-[20px]">Ratings</h3>
                <Rating name='size-small' defaultValue={5} size='small' readOnly className='text-white !pt-3 !w-full' />
                <Rating name='size-small' defaultValue={4} size='small' readOnly className='text-white !pt-3 !w-full' />
                <Rating name='size-small' defaultValue={3} size='small' readOnly className='text-white !pt-3 !w-full' />
                <Rating name='size-small' defaultValue={2} size='small' readOnly className='text-white !pt-3 !w-full' />
                <Rating name='size-small' defaultValue={1} size='small' readOnly className='text-white !pt-3 !w-full' />
            </div>
        </div>
    )
}

export default SideBarProducts