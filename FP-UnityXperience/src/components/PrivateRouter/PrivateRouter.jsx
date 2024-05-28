import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

export const PrivateRouter = () => {
    const { user } = useContext(AuthContext);

    if (user === undefined) {
        return null; // componente loadign 
    }

    return user ? <Outlet /> : <Navigate to="/adminlogin" />;
};

