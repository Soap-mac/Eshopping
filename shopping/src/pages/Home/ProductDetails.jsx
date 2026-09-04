import React, { useEffect, useState } from 'react'
import ProductZoom from '../../components/ProductZoom/ProductZoom'
import Top from '../../components/Top/Top'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Footer from "../../components/Footer/Footer"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material'
import QtyBox from '../../components/QtyBox/QtyBox'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import ProductDetailComp from '../../components/ProductDetailComponent/ProductDetailComp'
import { useParams } from 'react-router-dom'
import { handleSucess, handleError } from "../../utils";

function ProductDetails() {
    const [size, setSize] = useState('xs');
    const [qtyVal, setQtyval] = useState(1);
    const [tabs, setTabs] = useState(0);
    const { id } = useParams();

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);


    useEffect(() => {

        const fetchRelatedProducts = async () => {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/relatedProducts/${id}`
            );


            const data = await response.json();


            setRelatedProducts(data.relatedProducts);

        }


        fetchRelatedProducts();


    }, [id]);

    const submitReview = async () => {
        try {
            const payload = {
                productId: id,
                rating: rating,
                comment: review,
            };

            const res = await fetch(`${import.meta.env.VITE_API_URL}/addreview`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                handleSucess(data.message);
                return;
            }
            console.log("Review Response:", data);

            const r = await fetch(`${import.meta.env.VITE_API_URL}/getReview/${id}`, {
                credentials: "include",
            });
            const rd = await r.json();
            setReviews(rd.reviews);


            setRating(0);
            setReview("");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getproduct/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
                const data = await res.json();
                console.log(data);
                setProduct(data.product);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProductDetails();
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getReview/${id}`, {
                    method: "GET",
                    credentials: 'include',

                });
                console.log(res);
                const data = await res.json();
                console.log(data);
                setReviews(data.reviews);
            } catch (error) {
                console.log(error);
            }
        }
        fetchReviews();
    }, [id]);


    return product && (
        <>
            {/* <Top /> */}
            <Header />
            <Navbar />
            <div className="breadcrum-container !text-amber-50 !pt-[10px] !pb-[10px] !px-4 sm:!px-8 lg:!px-[90px] bg-[#1e1e1e]">
                <div role="presentation" >
                    <Breadcrumbs aria-label="breadcrumb" className='!text-amber-50'>
                        <Link underline="hover" color="inherit" href="/" className='link transition'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className='link transition'
                        >
                            {product.catName}
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="information bg-black flex flex-col lg:flex-row !px-4 sm:!px-8 lg:!px-0 !py-4 lg:!py-0 gap-6 lg:gap-0">
                <div className="productMagnify w-full lg:w-[40%] h-[55vh] sm:h-[65vh] lg:h-[85vh]">
                    <ProductZoom productImg={product.images} />
                </div>
                <ProductDetailComp width={55} product={product} revs={reviews.length} />
            </div>

            <div className="bg-black">
                <div className="flex bg-black text-amber-50 gap-4 sm:gap-[60px] !px-4 sm:!pl-[100px] sm:!pr-4 text-[14px] sm:text-[18px] overflow-x-auto whitespace-nowrap">
                    <span className={`hover:text-amber-600 cursor-pointer ${tabs === 0 && 'text-amber-700'}`} onClick={() => setTabs(0)}>Description</span>
                    <span className={`hover:text-amber-600 cursor-pointer ${tabs === 1 && 'text-amber-700'}`} onClick={() => setTabs(1)}>Additional Info</span>
                    <span className={`hover:text-amber-600 cursor-pointer ${tabs === 2 && 'text-amber-700'}`} onClick={() => setTabs(2)}>Review</span>
                </div>
                <div className="bg-black !shadow-md w-full text-[#c5c1c1]">
                    {
                        tabs === 0 &&
                        <div className="border-amber-50 border-2 !mx-4 sm:!ml-[100px] sm:!mr-4 lg:!mr-[100px] w-auto lg:max-w-[1300px] shadow-md !pt-3 bg-black !mt-7 rounded-[20px] !px-4 sm:!px-[50px]">
                            <p className='!mt-[10px]'>{product?.description}</p>

                            <h4 className='!mt-[20px] text-[18px]'>Light Weight Design</h4>
                            <p className='!mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam omnis officiis illum cupiditate ad reprehenderit necessitatibus commodi eius! Tempore nam cupiditate dolore reiciendis unde, qui consectetur eum magni sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum placeat nihil sequi mollitia necessitatibus, sed beatae temporibus aperiam, assumenda libero esse nisi vel non? Maxime quaerat dolorum architecto alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus fugit quos dolores, maiores corrupti ullam porro rerum modi sint at autem harum corporis molestias ab nisi veniam deserunt eum?
                                Dicta cagnam officia explicabo deleniti cupiditate dolore alias volu</p>

                            <h4 className='!mt-[20px] text-[18px]'>Return And Free Shipping</h4>
                            <p className='!mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam omnis officiis illum cupiditate ad reprehenderit necessitatibus commodi eiullam. Natus tenetur fugit assumenda cum, ipsam soluta magnam officia explicabo deleniti cupiditate dolore alias volu</p>

                            <h4 className='!mt-[20px] text-[18px]'>Money back Gurantee</h4>
                            <p className='!mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam omnis officiis illum cupiditate ad reprehenderit necessitatibus commodi eius! Tempore nam cupiditate dodolore alias volu</p>

                            <h4 className='!mt-[20px] text-[18px]'>Online Support</h4>
                            <p className="!mt[10px] !mb-[30px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas voluptate pariatur deleniti, vero possimus aliquam sapiente omnis dolore peranditiis laboriosam accusantium, enim error nemo velit?</p>
                        </div>
                    }

                    {
                        (tabs === 2) &&
                        <div className="border-amber-50 border-2 !mx-4 sm:!ml-[100px] sm:!mr-4 lg:!mr-[100px] w-auto lg:max-w-[1300px] shadow-md !pt-3 bg-black !mt-7 rounded-[20px] !px-4 sm:!px-[50px]">
                            <div className="!mt-[20px] text-[18px]">Customer Reviews</div>
                            <div className="scroll w-full overflow-y-scroll overflow-x-hidden !mt-[20px] !max-h-[300px] !pr-2 sm:!pr-[50px] lg:!pr-[200px]">
                                {reviews.length > 0 && reviews.map((rev) => (
                                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between !pt-[10px] border-b-2 border-b-[#5f5c5c] !pb-[20px] gap-3">
                                        <div className="w-full flex items-center gap-4 sm:gap-6">
                                            <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] flex-shrink-0 overflow-hidden rounded-full">
                                                <img src={rev?.userId.avatar} alt="" className='w-full' />
                                            </div>
                                            <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-[50px]">
                                                <div className="">
                                                    <p className='text-[15px]'>{rev?.userId?.userName}</p>
                                                    <p className='text-[15px]'>
                                                        {new Date(rev.updatedAt).toLocaleString("en-IN", {

                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        })}
                                                    </p>

                                                    <p className='text-[15px] !mt-[10px] break-words'>{rev?.comment}</p>
                                                </div>
                                                <div className="">
                                                    <Rating name='size-small' defaultValue={rev?.rating} size='medium' readOnly className='text-white !pt-3' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="!mt-[40px] !ml-[20px]">Add a Review</div>
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                                className='!border-0 !rounded-[30px] focus:!outline-none'

                            >
                                <div>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Add Review"
                                        multiline
                                        rows={4}
                                        onChange={(event) => setReview(event.target.value)}
                                        value={review}
                                        className='!bg-[#363535] !w-full sm:!w-[80%] !mt-[30px] !rounded-[30px] focus:!text-amber-50'
                                        sx={{
                                            backgroundColor: '#363535',
                                            borderRadius: '30px',
                                            mt: '30px',
                                            input: {
                                                color: 'white',
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: 'white',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'white',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                color: 'white',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <Rating name='size-small' defaultValue={0} size='medium' className='text-white !pt-3 !pl-[20px]' onChange={(event, newValue) => setRating(newValue)} value={rating} />
                                <div className="submitReview">
                                    <Button className='!border !border-amber-50 !w-[150px] !ml-[20px] !bg-amber-600 !mt-[20px] !text-[15px] !min-w-[0px] !h-[40px]  !text-amber-50' onClick={submitReview}>Submit</Button>

                                </div>


                            </Box>



                            <br />
                        </div>

                    }
                </div>

            </div>

            <div className="w-[100%] min-h-[320px] sm:min-h-[400px] lg:h-[470px] bg-black !pb-6">
                <p className='text-amber-50 !px-4 sm:!ml-[100px] sm:!px-0 text-[18px] sm:text-[22px] !pt-[20px]'>Product You Might Like</p>
                <ProductSlider items={6} allProducts={relatedProducts} />
            </div>


            <div className="!pt-[40px] bg-black">
                <Footer />
            </div>

        </>

    )
}


export default ProductDetails