import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Collapse } from 'react-collapse'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { Button } from '@mui/material'
import Slider from '@mui/material/Slider'
import { useSearchParams } from 'react-router-dom'

function SideBarProducts() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [availabilityOpen, setAvailabilityOpen] = useState(true)
    const [brandsOpen, setBrandsOpen] = useState(true)
    const [priceOpen, setPriceOpen] = useState(true)

    const [brands, setBrands] = useState([])
    const [brandsLoading, setBrandsLoading] = useState(true)

    const selectedBrand = searchParams.get('brand') || ''
    const selectedAvailability = searchParams.get('inStock') || 'all'

    const urlMinPrice = Number(searchParams.get('minPrice'))
    const urlMaxPrice = Number(searchParams.get('maxPrice'))

    const [price, setPrice] = useState([
        Number.isFinite(urlMinPrice) && urlMinPrice >= 0
            ? urlMinPrice
            : 0,
        Number.isFinite(urlMaxPrice) && urlMaxPrice > 0
            ? urlMaxPrice
            : 5000
    ])

    const API = import.meta.env.VITE_API_URL

    useEffect(() => {
        const fetchBrands = async () => {
            setBrandsLoading(true)

            try {
                const response = await fetch(
                    `${API}/getproductbrands`,
                    {
                        method: 'GET'
                    }
                )

                const data = await response.json()

                if (!response.ok || !data.success) {
                    throw new Error(
                        data?.message || 'Failed to load brands'
                    )
                }

                setBrands(
                    Array.isArray(data.brands)
                        ? data.brands.filter(Boolean)
                        : []
                )
            } catch (error) {
                console.error('Failed to load brands:', error)
                setBrands([])
            } finally {
                setBrandsLoading(false)
            }
        }

        fetchBrands()
    }, [API])

    useEffect(() => {
        const min = Number(searchParams.get('minPrice'))
        const max = Number(searchParams.get('maxPrice'))

        setPrice([
            Number.isFinite(min) && min >= 0 ? min : 0,
            Number.isFinite(max) && max > 0 ? max : 5000
        ])
    }, [searchParams])

    const updateParams = (updates) => {
        const nextParams = new URLSearchParams(searchParams)

        Object.entries(updates).forEach(([key, value]) => {
            if (
                value === null ||
                value === undefined ||
                value === ''
            ) {
                nextParams.delete(key)
            } else {
                nextParams.set(key, String(value))
            }
        })

        nextParams.set('page', '1')

        setSearchParams(nextParams)
    }

    const handleAvailabilityChange = (value) => {
        if (value === 'all') {
            updateParams({
                inStock: null
            })

            return
        }

        updateParams({
            inStock: value === 'available'
                ? 'true'
                : 'false'
        })
    }

    const handleBrandChange = (brand) => {
        updateParams({
            brand: selectedBrand === brand
                ? null
                : brand
        })
    }

    const handlePriceChange = (_, newValue) => {
        setPrice(newValue)
    }

    const handlePriceApply = () => {
        const [min, max] = price

        updateParams({
            minPrice: min > 0 ? min : null,
            maxPrice: max < 5000 ? max : null
        })
    }

    const handlePriceReset = () => {
        setPrice([0, 5000])

        updateParams({
            minPrice: null,
            maxPrice: null
        })
    }

    const handleClearAll = () => {
        setPrice([0, 5000])

        const nextParams = new URLSearchParams()

        const sort = searchParams.get('sort')

        if (sort) {
            nextParams.set('sort', sort)
        }

        nextParams.set('page', '1')

        setSearchParams(nextParams)
    }

    const hasActiveFilters =
        Boolean(selectedBrand) ||
        selectedAvailability !== 'all' ||
        Boolean(searchParams.get('minPrice')) ||
        Boolean(searchParams.get('maxPrice'))

    const checkboxSx = {
        color: '#737373',
        padding: '4px',
        '&.Mui-checked': {
            color: '#f97316'
        },
        '&:hover': {
            backgroundColor: 'rgba(249,115,22,0.08)'
        }
    }

    const radioSx = {
        color: '#737373',
        padding: '4px',
        '&.Mui-checked': {
            color: '#f97316'
        },
        '&:hover': {
            backgroundColor: 'rgba(249,115,22,0.08)'
        }
    }

    return (
        <div className="sidebar !w-full !text-amber-50">

            <div className="!w-full !border-b !border-white/[0.08] !pb-5 !mb-5">

                <div className="!mb-3 !flex !w-full !items-center !gap-2">

                    <Button
                        type="button"
                        onClick={() =>
                            setAvailabilityOpen(value => !value)
                        }
                        className="!min-w-0 !w-[32px] !h-[32px] !p-0 !text-orange-400 hover:!bg-white/[0.04]"
                    >
                        {availabilityOpen ? (
                            <FaAngleUp className="!text-[15px]" />
                        ) : (
                            <FaAngleDown className="!text-[15px]" />
                        )}
                    </Button>

                    <h3 className="!m-0 !text-[19px] !font-semibold !text-white">
                        Availability
                    </h3>

                </div>

                <Collapse isOpened={availabilityOpen}>
                    <RadioGroup
                        value={selectedAvailability}
                        onChange={(event) =>
                            handleAvailabilityChange(
                                event.target.value
                            )
                        }
                        className="!pl-1"
                    >

                        <FormControlLabel
                            value="all"
                            control={
                                <Radio
                                    size="small"
                                    sx={radioSx}
                                />
                            }
                            label="All"
                            className="!m-0 !w-full"
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    color: '#fef3c7',
                                    fontSize: '14px'
                                }
                            }}
                        />

                        <FormControlLabel
                            value="available"
                            control={
                                <Radio
                                    size="small"
                                    sx={radioSx}
                                />
                            }
                            label="In Stock"
                            className="!m-0 !w-full"
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    color: '#fef3c7',
                                    fontSize: '14px'
                                }
                            }}
                        />

                        <FormControlLabel
                            value="unavailable"
                            control={
                                <Radio
                                    size="small"
                                    sx={radioSx}
                                />
                            }
                            label="Out of Stock"
                            className="!m-0 !w-full"
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    color: '#fef3c7',
                                    fontSize: '14px'
                                }
                            }}
                        />

                    </RadioGroup>
                </Collapse>
            </div>

            <div className="!w-full !border-b !border-white/[0.08] !pb-5 !mb-5">

                <div className="!mb-3 !flex !w-full !items-center !gap-2">

                    <Button
                        type="button"
                        onClick={() =>
                            setBrandsOpen(value => !value)
                        }
                        className="!min-w-0 !w-[32px] !h-[32px] !p-0 !text-orange-400 hover:!bg-white/[0.04]"
                    >
                        {brandsOpen ? (
                            <FaAngleUp className="!text-[15px]" />
                        ) : (
                            <FaAngleDown className="!text-[15px]" />
                        )}
                    </Button>

                    <h3 className="!m-0 !text-[19px] !font-semibold !text-white">
                        Brands
                    </h3>

                </div>

                <Collapse isOpened={brandsOpen}>
                    <div className="!max-h-[250px] !overflow-y-auto !overflow-x-hidden !pr-1">

                        {brandsLoading ? (
                            <div className="!py-3 !text-[13px] !text-white/40">
                                Loading brands...
                            </div>
                        ) : brands.length === 0 ? (
                            <div className="!py-3 !text-[13px] !leading-5 !text-white/40">
                                No brands available.
                            </div>
                        ) : (
                            brands.map(brand => (
                                <FormControlLabel
                                    key={brand}
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={
                                                selectedBrand === brand
                                            }
                                            onChange={() =>
                                                handleBrandChange(brand)
                                            }
                                            sx={checkboxSx}
                                        />
                                    }
                                    label={brand}
                                    className="!m-0 !w-full"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            color: '#fef3c7',
                                            fontSize: '14px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }
                                    }}
                                />
                            ))
                        )}

                    </div>
                </Collapse>
            </div>

            <div className="!w-full !border-b !border-white/[0.08] !pb-5 !mb-5">

                <div className="!mb-3 !flex !w-full !items-center !gap-2">

                    <Button
                        type="button"
                        onClick={() =>
                            setPriceOpen(value => !value)
                        }
                        className="!min-w-0 !w-[32px] !h-[32px] !p-0 !text-orange-400 hover:!bg-white/[0.04]"
                    >
                        {priceOpen ? (
                            <FaAngleUp className="!text-[15px]" />
                        ) : (
                            <FaAngleDown className="!text-[15px]" />
                        )}
                    </Button>

                    <h3 className="!m-0 !text-[19px] !font-semibold !text-white">
                        Price
                    </h3>

                </div>

                <Collapse isOpened={priceOpen}>
                    <div className="!px-2 !pt-2">

                        <Slider
                            value={price}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={5000}
                            step={50}
                            sx={{
                                color: '#f97316',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#f97316',
                                    border: '2px solid #000'
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#f97316'
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#3a3a3a'
                                }
                            }}
                        />

                        <div className="!flex !items-center !justify-between !gap-3 !pt-2">

                            <div className="!min-w-0">
                                <p className="!m-0 !text-[10px] !uppercase !tracking-wide !text-white/40">
                                    From
                                </p>

                                <p className="!m-0 !mt-1 !text-[13px] !font-semibold !text-amber-50">
                                    ₹{price[0].toLocaleString()}
                                </p>
                            </div>

                            <div className="!min-w-0 !text-right">
                                <p className="!m-0 !text-[10px] !uppercase !tracking-wide !text-white/40">
                                    To
                                </p>

                                <p className="!m-0 !mt-1 !text-[13px] !font-semibold !text-amber-50">
                                    ₹{price[1].toLocaleString()}
                                </p>
                            </div>

                        </div>

                        <div className="!mt-4 !flex !items-center !gap-2">

                            <button
                                type="button"
                                onClick={handlePriceApply}
                                className="!flex-1 !rounded-lg !bg-orange-600 !px-3 !py-2 !text-[12px] !font-semibold !text-white !transition-colors hover:!bg-orange-500"
                            >
                                Apply
                            </button>

                            <button
                                type="button"
                                onClick={handlePriceReset}
                                className="!rounded-lg !border !border-white/10 !bg-white/[0.03] !px-3 !py-2 !text-[12px] !font-medium !text-white/60 !transition-colors hover:!bg-white/[0.07] hover:!text-white"
                            >
                                Reset
                            </button>

                        </div>

                    </div>
                </Collapse>
            </div>

            {hasActiveFilters && (
                <button
                    type="button"
                    onClick={handleClearAll}
                    className="!w-full !rounded-lg !border !border-orange-500/20 !bg-orange-500/[0.05] !px-4 !py-2.5 !text-[12px] !font-medium !text-orange-400 !transition-colors hover:!bg-orange-500/[0.10]"
                >
                    Clear All Filters
                </button>
            )}

        </div>
    )
}

export default SideBarProducts