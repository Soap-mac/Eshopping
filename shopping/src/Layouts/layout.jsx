import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const CartDrawer = lazy(() => import('./cartDrawer'));
const WishlistDrawer = lazy(() => import('./WishlistDrawer'));

function Layout() {
    return (
        <>
            <Outlet />

            <Suspense fallback={null}>
                <CartDrawer />
                <WishlistDrawer />
            </Suspense>
        </>
    );
}

export default Layout;