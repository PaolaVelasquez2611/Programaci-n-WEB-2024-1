import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { AddProject } from '../../screens';

export const PrivateRouter = () => {
    const { user } = useContext(AuthContext);

    if (user === undefined) {
        return(
         <article className="place-content-center text-center">
            <h1 className="font-bold text-8xl">404</h1>
            <p className="font-medium">Sorry, Something went wrong 😔</p>
        </article>
            )
    }

    return user ? <AddProject/> : <Navigate to="/adminlogin" />;
};

