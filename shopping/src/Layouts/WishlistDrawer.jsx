import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from 'react-icons/io';
import { MdFavorite, MdOutlineDeleteOutline, MdAddShoppingCart } from 'react-icons/md';
import { MyContext } from '../App';


function WishlistDrawer({ onMoveToCart = () => { }, onRemoveItem = () => { } }) {
    const { openWishlistDrawer, setOpenWishlistDrawer } = useContext(MyContext);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!openWishlistDrawer) return;

        const fetchWishlist = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/getWishlist`, {
                    method: 'GET',
                    credentials: 'include',
                });
                console.log(res)
                const data = await res.json();
                setWishlistProducts(data.success !== false && Array.isArray(data.wishlist) ? data.wishlist : []);
            } catch (error) {
                console.error('Failed to fetch wishlist:', error);
                setWishlistProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, [openWishlistDrawer]);

    const handleClose = () => setOpenWishlistDrawer(false);

    return (
        <Drawer
            open={openWishlistDrawer}
            anchor="right"
            onClose={handleClose}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 440 },
                    bgcolor: '#000',
                    backgroundImage: 'none',
                    boxShadow: '-12px 0 32px rgba(0,0,0,0.5)',
                },
            }}
            sx={{ '& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(1px)' } }}
        >
            <div className="flex h-full flex-col bg-black text-amber-50">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 !px-6 !py-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                            <MdFavorite size={15} />
                        </span>
                        <div>
                            <h3 className="text-[15px] font-semibold tracking-tight text-amber-50">Wishlist</h3>
                            {wishlistProducts.length > 0 && (
                                <p className="text-[11px] uppercase tracking-wide text-neutral-500">
                                    {wishlistProducts.length} saved item{wishlistProducts.length > 1 ? 's' : ''}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        aria-label="Close wishlist"
                        className="rounded-full !p-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-amber-50"
                    >
                        <IoMdClose size={19} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto !px-5 !py-5">
                    {loading ? (
                        <div className="flex h-full items-center justify-center">
                            <span className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-700 border-t-amber-500" />
                        </div>
                    ) : wishlistProducts.length === 0 ? (
                        <EmptyWishlist onClose={handleClose} />
                    ) : (
                        <div className="flex min-h-full flex-col">
                            <ul className="!m-auto w-full !space-y-3">
                                {wishlistProducts.map((item) => (
                                    <WishlistItemRow
                                        key={item._id}
                                        item={item}
                                        onMoveToCart={onMoveToCart}
                                        onRemove={onRemoveItem}
                                    />
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {wishlistProducts.length > 0 && (
                    <>
                        <div className="relative !px-6">
                            <div className="border-t border-dashed border-amber-500/25" />
                            <span className="absolute left-6 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black" />
                            <span className="absolute right-6 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black" />
                        </div>

                        <div className="bg-neutral-950/80 !px-6 !py-5">
                            <Button
                                component={Link}
                                to="/Wishlist"
                                onClick={handleClose}
                                fullWidth
                                variant="outlined"
                                sx={{
                                    borderColor: 'rgba(255,255,255,0.15)',
                                    color: '#fef3c7',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '13.5px',
                                    borderRadius: '10px',
                                    py: 1.15,
                                    '&:hover': {
                                        borderColor: 'rgba(245,158,11,0.5)',
                                        bgcolor: 'rgba(245,158,11,0.06)',
                                    },
                                }}
                            >
                                View All Wishlist
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Drawer>
    );
}

function WishlistItemRow({ item, onMoveToCart, onRemove }) {
    const product = item.productId || {};

    return (
        <li className="group flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] !p-3 transition-colors hover:border-white/10 hover:bg-white/[0.05]">
            <div className="relative h-[72px] w-[72px] flex-shrink-0">
                <div className="h-full w-full overflow-hidden rounded-lg bg-neutral-900">
                    <img
                        src={product.images?.[0]}
                        alt={product.name || 'Product'}
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Saved stamp — this drawer's signature detail */}
                <span className="absolute -left-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-amber-500 text-black">
                    <MdFavorite size={10} />
                </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-medium text-amber-50">{product.name}</p>
                        <p className="text-[11px] uppercase tracking-wide text-neutral-500">{product.brand}</p>
                    </div>
                    <button
                        onClick={() => onRemove(item._id)}
                        aria-label="Remove from wishlist"
                        className="flex-shrink-0 rounded-full !p-1.5 text-neutral-500 opacity-0 transition-all hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100"
                    >
                        <MdOutlineDeleteOutline size={16} />
                    </button>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <span className="tabular-nums text-[13.5px] font-semibold text-orange-400">
                        ₹{Number(product.price || 0).toFixed(2)}
                    </span>
                    <button
                        onClick={() => onMoveToCart(item._id)}
                        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-amber-500/30 bg-amber-500/10 !px-3 !py-1.5 text-[11.5px] font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
                    >
                        <MdAddShoppingCart size={13} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </li>
    );
}

function EmptyWishlist({ onClose }) {
    return (
        <div className="flex h-full flex-col items-center justify-center !px-6 text-center">
            <span className="!mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                <MdFavorite size={24} />
            </span>
            <h3 className="!mb-1.5 text-[16px] font-semibold text-amber-50">No favorites saved</h3>
            <p className="!mb-6 max-w-[230px] text-[13px] leading-relaxed text-neutral-500">
                Tap the heart icon on any product and it'll land here for safekeeping.
            </p>
            <Button
                component={Link}
                to="/"
                onClick={onClose}
                disableElevation
                sx={{
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '13.5px',
                    borderRadius: '10px',
                    px: 4,
                    py: 1.15,
                    color: '#fff',
                    '&:hover': { background: 'linear-gradient(to right, #d97706, #c2410c)' },
                }}
            >
                Discover Products
            </Button>
        </div>
    );
}

export default WishlistDrawer;