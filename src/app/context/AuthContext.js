'use client'
import React from 'react';
import firebase_app from '@/app/config/firebase';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';


const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}) => {
    const [user , setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div className='text-center text-3xl font-bold'>Loading...</div> : children}
        </AuthContext.Provider>
    );
};