import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../../App';

// Wrap any route element with this to require login (and optionally admin
// role) before it renders. Usage in App.jsx:
//   <ProtectedRoute><Profile /></ProtectedRoute>
//   <ProtectedRoute adminOnly><DashBoard /></ProtectedRoute>
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