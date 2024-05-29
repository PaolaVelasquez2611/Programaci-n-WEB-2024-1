import { Navigate } from 'react-router-dom';
import { AddProject } from '../../screens';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRouter = () => {
    const { user } = useAuth();

    if (user === undefined) {
        return (
            <article className="place-content-center text-center">
                <h1 className="font-bold text-8xl">404</h1>
                <p className="font-medium">Sorry, Something went wrong 😔</p>
            </article>
        );
    }

    return user ? <AddProject /> : <Navigate to="/adminlogin" />;
};

