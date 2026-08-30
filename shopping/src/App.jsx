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
import { useState } from 'react'
import { useEffect } from 'react'
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

import React from 'react'
import { createContext } from 'react'

const MyContext = createContext();

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
        { path: "Cart", element: <Cart /> },
        { path: "Checkout", element: <Checkout /> },
        { path: "Profile", element: <Profile /> },
        { path: "Wishlist", element: <Wishlist /> },
        { path: "Orders", element: <Orders /> },
        { path: "AdminDashBoard", element: <DashBoard /> },
        { path: "AllProducts", element: <AllProducts /> },
        { path: "AddProducts", element: <AddProducts /> },
        { path: "AllCategories", element: <AllCategories /> },
        { path: "AddSubCategory", element: <AddSubCategory /> },
        { path: "AllSubCategories", element: <AllSubCategories /> },
        { path: "AddCategory", element: <AddCategory /> },
        { path: "allInnerCategory", element: < AllInnerCategories /> },
        { path: "addInnerCategory", element: <AddInnerCategory /> },
        { path: "AddSlider", element: <AddSlider /> },
        { path: "AllSlider", element: <AllSlider /> },
        { path: "AllUsers", element: <AllUsers /> },
        { path: "AllOrders", element: <AllOrders /> },
        { path: "UpdateCategory", element: <UpdateCategory /> },
        { path: "EditProduct/:id", element: <EditProducts /> },
        { path: "ViewProducts", element: <ViewProducts /> },
        { path: "products/:name", element: <Products /> }
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
        console.log(result)
        if (result.success) {
          setIsLogin(true);
          setName(result.exist.userName);
          setEmail(result.exist.email);
          setAvatar(result.exist.avatar);
        }
        else {
          setIsLogin(false);
        }
      }
      catch (error) {
        console.log(error);
        setIsLogin(false);
      }
    }
    checkLogin();
  }, []);

  const value = {
    setOpenProductModle, setOpenCartDrawer, openProductModle, openCartDrawer, isLogin, setIsLogin, isAuthenticated, setIsAuthenticated,
    avatar, setAvatar, name, setName, email, setEmail, phone, setPhone, sliders, setSliders, openWishlistDrawer, setOpenWishlistDrawer
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
