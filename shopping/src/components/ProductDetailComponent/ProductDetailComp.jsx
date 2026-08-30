import React from 'react'
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import QtyBox from '../../components/QtyBox/QtyBox'
import { handleSucess, handleError } from "../../utils";

function ProductDetailComp(props) {
    const [qtyVal, setQtyval] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});

    const price = props?.product?.price ?? 0;
    const discount = props?.product?.discount ?? 0;
    const finalPrice = Math.round(price - (discount / 100) * price);

    // Get all unique variant option types and their values
    const getVariantOptions = () => {
        if (!props.product?.variants || props.product.variants.length === 0) {
            return {};
        }

        const variantOptions = {};

        props.product.variants.forEach(variant => {
            const optionsObj = variant.options instanceof Map
                ? Object.fromEntries(variant.options)
                : variant.options;

            Object.entries(optionsObj).forEach(([key, value]) => {
                if (!variantOptions[key]) {
                    variantOptions[key] = new Set();
                }
                variantOptions[key].add(value);
            });
        });

        Object.keys(variantOptions).forEach(key => {
            variantOptions[key] = Array.from(variantOptions[key]);
        });

        return variantOptions;
    };

    const variantOptions = getVariantOptions();
    const handleOptionChange = (type, value) => {
        setSelectedOptions(prev => ({ ...prev, [type]: value }));
    };

    const addtocart = async () => {
        const variantTypes = Object.keys(variantOptions);
        const allSelected = variantTypes.every(type => selectedOptions[type]);

        if (variantTypes.length > 0 && !allSelected) {
            handleError(`Please select: ${variantTypes.filter(type => !selectedOptions[type]).join(', ')}`);
            return;
        }

        try {
            const payload = {
                productId: props.product._id,
                quantity: qtyVal,
                selectedOptions: selectedOptions,
                price,
                discount,
                finalPrice,
            };

            const res = await fetch(`${import.meta.env.VITE_API_URL}/addToCart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                handleError(data.message);
                return;
            }

            console.log("Cart Response:", data);
            handleSucess("Added to cart successfully!");

        } catch (err) {
            console.error("Add to cart error:", err);
            handleError("Failed to add to cart. Please try again.");
        }
    };

    return (
        <div className={`info text-amber-50 flex flex-col justify-center`} style={{ width: `${props.width}%` }}>
            <h3 className='text-[30px] !mb-[5px]'>{props?.product?.name}</h3>
            <p className=''>Brand: {props?.product?.brand}</p>
            <div className="rating-review flex items-center !mb-[20px]">
                <Rating name='size-small' defaultValue={props?.product?.rating} size='medium' readOnly className='text-white !pt-3' />
                <span className='!pt-[13px] !ml-[20px]'>Review ({props.revs})</span>
            </div>
            <div className="flex items-center gap-4 text-[20px] !mb-[30px]">
                <span className='oldPrice line-through'>${props?.product?.oldPrice}</span>
                <span className='newPrice text-orange-500 font-bold'>${props?.product?.price}</span>
            </div>
            <p className='!text-[16px] whitespace-normal break-words font-medium text-[rgba(233,154,58,0.91)] text-decoration-none'>{props?.product?.description}</p>

            {Object.keys(variantOptions).length > 0 && (
                <div className="variant-selection !mt-6">
                    {Object.entries(variantOptions).map(([type, options]) => (
                        <div key={type} className="flex items-center gap-2.5 !mt-4 sizeBox">
                            <span className='capitalize min-w-[80px]'>{type}: </span>
                            <div className="flex !ml-4 gap-3">
                                {options.map((option) => (
                                    <Button
                                        key={option}
                                        onClick={() => handleOptionChange(type, option)}
                                        className={`!px-4 !text-white border ${selectedOptions[type] === option
                                            ? 'selected !border-amber-600 !bg-amber-600'
                                            : "!border-gray-500 hover:!border-amber-500"
                                            }`}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {Object.keys(selectedOptions).length > 0 && (
                <div className="!mt-4 text-sm text-gray-300">
                    Selected: {Object.entries(selectedOptions).map(([key, value]) =>
                        `${key}: ${value}`
                    ).join(', ')}
                </div>
            )}
            <div className="estd-time !mt-6 text-[rgba(242,231,231,0.5)]">
                <p>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            </div>
            <div className="qty flex items-center !mt-2">
                <QtyBox value={qtyVal} />
                <div className="up-down flex flex-col !ml-[10px]">
                    <Button onClick={() => setQtyval(qtyVal + 1)} className='!border !border-amber-50 !w-[40px] !px-[0px] !mx-[0px] !text-[15px] !min-w-[0px] !h-[23px] !text-amber-50'><FaAngleUp className='!text-[20px]' /></Button>
                    <Button onClick={() => { if (qtyVal > 1) setQtyval(qtyVal - 1); }} className='!border !border-amber-50 !w-[40px] !px-[0px] !mx-[0px] !text-[15px] !min-w-[0px] !h-[23px] !text-amber-50'><FaAngleDown className='!text-[20px]' /></Button>
                </div>
                <Button className='!border !border-amber-50 !w-[200px] !bg-amber-600 !ml-[80px] !text-[15px] !min-w-[0px] !h-[50px]  !text-amber-50' onClick={addtocart}>Add To Cart</Button>
            </div>

        </div>
    )
}

export default ProductDetailComp