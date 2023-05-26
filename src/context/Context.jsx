import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const AuthProvider = createContext()
const auth = getAuth(app)
const Context = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const emailSignInAuth = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogInAuth=(email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        setLoader(true)
        return signOut(auth)
    } 
    const emailVarify =() =>{
        return sendEmailVerification(auth.currentUser)
    }
    useEffect(()=>{
        const subscription = onAuthStateChanged(auth, (currentUser) =>{
      
            if(currentUser ==null || currentUser.emailVerified){
                setUser(currentUser) 
            }
            setLoader(false)
        })
        return () =>subscription()
    },[])
    
    const userInfo = {user,setLoader,loader,emailSignInAuth,emailLogInAuth,logOut,emailVarify}
    return (
        <div>
            <AuthProvider.Provider value={userInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Context;