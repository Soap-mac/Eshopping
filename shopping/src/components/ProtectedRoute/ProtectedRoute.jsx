import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../../App';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { isLogin, authLoading, role } = useContext(MyContext);

    if (authLoading) {
        return null;
    }

    if (!isLogin) {
        return <Navigate to="/Login" replace />;
    }

    if (adminOnly && role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;