import React, { createContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { app } from '../../services/firebase-config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const userData = {
                uid: user.uid,
                email: user.email,
                token: await user.getIdToken()
            };

            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);

            toast.success('You just logged in to your admin account! 😁', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } catch (error) {
            console.error("Error:", error);
            toast.error('Error: ' + error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const logout = async () => {
        try {
            await app.auth().signOut();
            localStorage.removeItem('user');
            setUser(null);
            toast.success('You have successfully logged out!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error('Error: ' + error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading,
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};