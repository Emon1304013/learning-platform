import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext({});

const auth = getAuth(app);
const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    // User creation 
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Email Verification after user creation  
    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
      }

    //   Name Update after User created 
    const updateName = (name) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name})
    }

    // Registration / sign in with google  

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // User sign in using email & password 

    const userLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


      useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
          }
          setLoading(false)
        })
    
        return () => {
          //this part will execute once the component is unmounted.
          unsubscribe()
        }
      }, [])

    const authInfo = 
    {
        user,
        loading,
        setLoading,
        createUser,
        verifyEmail,
        updateName,
        googleSignIn,
        userLogin,
        userSignOut,
        resetPass,


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;