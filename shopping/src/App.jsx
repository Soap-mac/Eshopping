import './App.css'
import Help from './components/Help/Help'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Home/Login'
import Signup from './pages/Home/Signup'
import ProductListing from './pages/Home/ProductListing'
import ProductDetails from './pages/Home/ProductDetails'
import Cart from './pages/Home/Cart'
import Layout from './Layouts/layout'
import Checkout from './pages/Home/Checkout'
import Profile from './pages/Home/Profile'
import Wishlist from './pages/Home/Wishlist'
import Orders from './pages/Orders'
import DashBoard from './adminPages/DashBoard'
import { useState, useEffect, useCallback } from 'react'
import AllProducts from './adminPages/AllProducts'
import AddProducts from './adminPages/AddProducts'
import AllCategories from './adminPages/AllCategories'
import AddCategory from './adminPages/AddCategory'
import AllSubCategories from './adminPages/AllSubCategory'
import AddSlider from './adminPages/AddSlider'
import AllSlider from './adminPages/AllSliders'
import AddSubCategory from './adminPages/AddSubCategory'
import AllUsers from './adminPages/AllUsers'
import AllOrders from './adminPages/AllOrders'
import UpdateCategory from './adminPages/UpdateCategory'
import AddInnerCategory from './adminPages/AddInnerCategory'
import AllInnerCategories from './adminPages/AllInnerCategories'
import EditProducts from './adminPages/EditProduct';
import ViewProducts from './adminPages/ViewProducts';
import Products from './pages/Home/Products';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import React from 'react'
import { createContext } from 'react'
import ForgotPassword from './pages/Home/ForgotPassword'

const MyContext = createContext();

// Messages the authVerify middleware / wishlist-auth routes send back
// when a request comes from a logged-out or expired session. Used to tell
// "you're not logged in" apart from other failures (e.g. "already wishlisted"),
// so we only redirect to /Login for the former.
const AUTH_FAILURE_MESSAGES = ['unauthorized user', 'Invalid token'];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Help", element: <Help /> },
        { path: "Login", element: <Login /> },
        { path: "Signup", element: <Signup /> },
        { path: "Productlisting", element: <ProductListing /> },
        { path: "Productdetail/:id", element: <ProductDetails /> },
        { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "Checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: "Profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: "Wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
        { path: "Orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "AdminDashBoard", element: <ProtectedRoute adminOnly><DashBoard /></ProtectedRoute> },
        { path: "AllProducts", element: <ProtectedRoute adminOnly><AllProducts /></ProtectedRoute> },
        { path: "AddProducts", element: <ProtectedRoute adminOnly><AddProducts /></ProtectedRoute> },
        { path: "AllCategories", element: <ProtectedRoute adminOnly><AllCategories /></ProtectedRoute> },
        { path: "AddSubCategory", element: <ProtectedRoute adminOnly><AddSubCategory /></ProtectedRoute> },
        { path: "AllSubCategories", element: <ProtectedRoute adminOnly><AllSubCategories /></ProtectedRoute> },
        { path: "AddCategory", element: <ProtectedRoute adminOnly><AddCategory /></ProtectedRoute> },
        { path: "allInnerCategory", element: <ProtectedRoute adminOnly><AllInnerCategories /></ProtectedRoute> },
        { path: "addInnerCategory", element: <ProtectedRoute adminOnly><AddInnerCategory /></ProtectedRoute> },
        { path: "AddSlider", element: <ProtectedRoute adminOnly><AddSlider /></ProtectedRoute> },
        { path: "AllSlider", element: <ProtectedRoute adminOnly><AllSlider /></ProtectedRoute> },
        { path: "AllUsers", element: <ProtectedRoute adminOnly><AllUsers /></ProtectedRoute> },
        { path: "AllOrders", element: <ProtectedRoute adminOnly><AllOrders /></ProtectedRoute> },
        { path: "UpdateCategory", element: <ProtectedRoute adminOnly><UpdateCategory /></ProtectedRoute> },
        { path: "EditProduct/:id", element: <ProtectedRoute adminOnly><EditProducts /></ProtectedRoute> },
        { path: "ViewProducts", element: <ProtectedRoute adminOnly><ViewProducts /></ProtectedRoute> },
        { path: "products/:name", element: <Products /> },
        { path: "ForgotPassword", element: <ForgotPassword /> },
      ]
    }
  ]);


  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [openProductModle, setOpenProductModle] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [openWishlistDrawer, setOpenWishlistDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [sliders, setSliders] = useState([]);
  const [wishlist, setWishlist] = useState({});
  const [wishlistLoaded, setWishlistLoaded] = useState(false);

  const [role, setRole] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchWishlist = useCallback(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/getwishlist`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.wishlist)) {
        const map = {};
        data.wishlist.forEach(w => {
          if (w?.productId?._id) {
            map[w.productId._id] = w.productId;
          }
        });
        setWishlist(map);
      } else {
        setWishlist({});
      }
    } catch (error) {
      console.log(error);
      setWishlist({});
    } finally {
      setWishlistLoaded(true);
    }
  }, []);

  const isWishlisted = useCallback(
    (productId) => Boolean(wishlist[productId]),
    [wishlist]
  );

  const addToWishlist = useCallback(async (product) => {
    if (!product?._id) return { success: false, authRequired: false };

    setWishlist(prev => ({ ...prev, [product._id]: product })); // optimistic

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/addwishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ productId: product._id }),
      });
      const data = await res.json();

      if (!data.success) {
        setWishlist(prev => {
          const next = { ...prev };
          delete next[product._id];
          return next;
        });
      }

      return {
        success: !!data.success,
        authRequired: !data.success && AUTH_FAILURE_MESSAGES.includes(data.message),
      };
    } catch (error) {
      console.log(error);
      setWishlist(prev => {
        const next = { ...prev };
        delete next[product._id];
        return next;
      });
      return { success: false, authRequired: false };
    }
  }, []);

  const removeFromWishlist = useCallback(async (productId) => {
    if (!productId) return { success: false, authRequired: false };

    let previousProduct;
    setWishlist(prev => {
      previousProduct = prev[productId];
      const next = { ...prev };
      delete next[productId];
      return next;
    });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/deletewishlist/${productId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.json();

      if (!data.success && previousProduct) {
        setWishlist(prev => ({ ...prev, [productId]: previousProduct })); // rollback
      }

      return {
        success: !!data.success,
        authRequired: !data.success && AUTH_FAILURE_MESSAGES.includes(data.message),
      };
    } catch (error) {
      console.log(error);
      if (previousProduct) {
        setWishlist(prev => ({ ...prev, [productId]: previousProduct }));
      }
      return { success: false, authRequired: false };
    }
  }, []);

  const toggleWishlist = useCallback(async (product) => {
    if (!product?._id) return { success: false, authRequired: false };
    return isWishlisted(product._id)
      ? removeFromWishlist(product._id)
      : addToWishlist(product);
  }, [isWishlisted, addToWishlist, removeFromWishlist]);

  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  const fetchCart = useCallback(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/getCart`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      setCart(Array.isArray(data.cart) ? data.cart : []);
    } catch (error) {
      console.log(error);
      setCart([]);
    } finally {
      setCartLoaded(true);
    }
  }, []);

  const addToCart = useCallback(async (product, quantity = 1, variantSku = null) => {
    if (!product?._id) return false;

    const variant = variantSku
      ? product.variants?.find(v => v.sku === variantSku)
      : product.variants?.[0];

    if (!variant?.sku) {
      console.warn(
        `addToCart: no variant found for product "${product.name}" (${product._id}). ` +
        `Your backend /addToCart route requires a variantSku, but this product has none available.`
      );
      return false;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/addToCart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          productId: product._id,
          quantity,
          variantSku: variant.sku,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        await fetchCart();
        setOpenCartDrawer(true);
        return true;
      }

      console.warn('addToCart failed:', data?.message);
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, [fetchCart]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/getUser`,
          {
            method: "GET",
            credentials: "include"
          }
        );

        const result = await response.json();
        if (result.success) {
          setIsLogin(true);
          setName(result.exist.userName);
          setEmail(result.exist.email);
          setAvatar(result.exist.avatar);
          setRole(result.exist.role);
        }
        else {
          setIsLogin(false);
          setRole(null);
        }
      } catch (error) {
        console.log(error);
        setIsLogin(false);
        setRole(null);
      } finally {
        setAuthLoading(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    fetchWishlist();
    fetchCart();
  }, [fetchWishlist, fetchCart]);

  const value = {
    setOpenProductModle, setOpenCartDrawer, openProductModle, openCartDrawer, isLogin, setIsLogin, isAuthenticated, setIsAuthenticated,
    role, setRole, authLoading,
    avatar, setAvatar, name, setName, email, setEmail, phone, setPhone, sliders, setSliders, openWishlistDrawer, setOpenWishlistDrawer,
    wishlist, wishlistLoaded, isWishlisted, addToWishlist, removeFromWishlist, toggleWishlist, refreshWishlist: fetchWishlist,
    cart, cartLoaded, addToCart, refreshCart: fetchCart,
  }



  return (
    <>
      <MyContext.Provider value={value}>
        <RouterProvider router={router} />
      </MyContext.Provider>

    </>
  )
}

export default App
export { MyContext }