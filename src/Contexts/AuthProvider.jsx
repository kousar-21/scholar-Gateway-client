import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const present = auth.currentUser;
    console.log(present)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (profileInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profileInfo)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            console.log('user in state change', currentUser)
            setLoading(false)
            return ()=>{
                subscribe()
            }
        })
    },[])
    
    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        loginUser,
        googleUser,
        updateUserProfile,
        logout
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;