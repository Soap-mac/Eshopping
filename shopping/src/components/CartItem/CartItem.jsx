import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaChevronDown } from "react-icons/fa";
import { handleSucess, handleError } from "../../utils";

function CartItem(props) {
    const [qty, setQty] = useState(null);
    const [choseQty, setChoseQty] = useState(props.item.quantity);

    const Qtyopen = Boolean(qty);

    const handleQtyClick = (event) => {
        setQty(event.currentTarget);
    };

    const handleQtyClose = async (e) => {
        const newQty = Number(e.target.textContent);

        setQty(null);

        if (newQty === choseQty) {
            return;
        }

        setChoseQty(newQty);
    };

    const updateQty = async (newQty) => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/changeQuantity`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        cartItemId: props.item._id,
                        qty: newQty
                    })
                }
            );

            const data = await res.json();

            if (!res.ok) {
                handleError(data.message || "Failed to update quantity");
                setChoseQty(props.item.quantity);
                return;
            }

        } catch (error) {
            console.error(error);
            handleError("Failed to update quantity");
            setChoseQty(props.item.quantity);
        }
    };

    useEffect(() => {
        if (
            props.item?._id &&
            choseQty !== props.item.quantity
        ) {
            updateQty(choseQty);
        }
    }, [choseQty]);

    const removeItem = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/removeFromcart`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        cartItemId: props.item._id
                    })
                }
            );

            const data = await res.json();

            if (!res.ok) {
                handleError(data.message || "Failed to remove item");
                return;
            }

            props.onRemove(props.item._id);
            handleSucess("Product removed from cart");

        } catch (error) {
            console.error(error);
            handleError("Failed to remove item");
        }
    };

    const variants = props.item.variantDetails?.options || {};

    const variantText = Object.entries(variants)
        .map(([key, value]) =>
            `${value} ${key.replace(/([A-Z])/g, " $1").trim()}`
        )
        .join(" / ");

    return (
        <div className="cart-product-card relative backdrop-blur-sm border border-gray-700/50 !p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10">

            <div className="flex items-start gap-6">

                <div className="!w-24 !h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-600/50">
                    <Link to="/">
                        <img
                            src={props.item.productId?.images?.[0]}
                            alt={props.item.productId?.name || "Product"}
                            className="!w-full !h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>

                <div className="flex-1 !space-y-4">

                    <div className="relative">

                        <Link to="/">
                            <h3 className="text-lg font-semibold text-amber-50 leading-tight hover:text-amber-400 transition-colors">
                                {props.item.productId?.name}
                            </h3>
                        </Link>

                        {variantText && (
                            <p className="text-gray-300 text-sm !mt-1">
                                {variantText}
                            </p>
                        )}

                        <p className="text-gray-400 text-sm !mt-1">
                            {props.item.productId?.SubcatName}
                        </p>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <div className="flex-1">

                            <p className="text-amber-50 text-sm !mb-2 flex items-center gap-2">
                                Qty
                                <FaChevronDown className="text-xs" />
                            </p>

                            <Button
                                id={`qty-button-${props.item._id}`}
                                aria-controls={Qtyopen ? `qty-menu-${props.item._id}` : undefined}
                                aria-haspopup="true"
                                aria-expanded={Qtyopen ? 'true' : undefined}
                                onClick={handleQtyClick}
                                className="!text-gray-900 !bg-gray-200 hover:!bg-gray-300 !min-w-[50px] !rounded-lg !py-2 !font-medium !transition-all !duration-200"
                            >
                                {choseQty}
                            </Button>

                            <Menu
                                id={`qty-menu-${props.item._id}`}
                                anchorEl={qty}
                                open={Qtyopen}
                                onClose={() => setQty(null)}
                                MenuListProps={{
                                    'aria-labelledby': `qty-button-${props.item._id}`,
                                }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <MenuItem
                                        key={num}
                                        onClick={handleQtyClose}
                                    >
                                        {num}
                                    </MenuItem>
                                ))}
                            </Menu>

                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        {props.item.productId?.oldPrice && (
                            <span className="text-gray-500 line-through text-sm">
                                ₹{props.item.productId.oldPrice}
                            </span>
                        )}

                        <span className="text-amber-400 font-bold text-xl">
                            ₹{props.item.productId?.price || 0}
                        </span>

                        {props.item.productId?.discount && (
                            <span className="bg-green-600/20 text-green-400 text-xs !px-2 !py-1 rounded-full font-medium">
                                {props.item.productId.discount}% Off
                            </span>
                        )}

                    </div>

                </div>

            </div>

            <button
                onClick={removeItem}
                aria-label="Remove product"
                className="absolute !w-[40px] !h-[40px] top-2 right-2 !pl-[7px] !text-gray-400 hover:!text-red-400 hover:bg-red-500/10 rounded-full transition-all duration-200 !flex !justify-center !items-center"
            >
                <IoMdClose className="!w-6 !h-6" />
            </button>

        </div>
    );
}

export default CartItem;