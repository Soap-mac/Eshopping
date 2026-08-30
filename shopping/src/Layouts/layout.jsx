import { Outlet } from 'react-router-dom';
import CartDrawer from './cartDrawer';
import WishlistDrawer from './WishlistDrawer';

function Layout() {
    return (
        <>
            <Outlet />
            <CartDrawer />
            <WishlistDrawer />
        </>
    );
}

export default Layout;