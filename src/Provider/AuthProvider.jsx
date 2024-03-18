import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from "../Firebase/firebase.config";


import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
        const [user, setUser] =useState(null)

        const createUser =(email,password) =>{
            return createUserWithEmailAndPassword(auth,email,password)
        }

        const signIn =(email,password)=>{
           return signInWithEmailAndPassword(auth,email,password)
        }

        const logOut =() =>{
            return signOut(auth);
        }

        useEffect(() =>{
          const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
                console.log('user in the auth sate changes',currentUser);
                setUser(currentUser)
            })
            return ()=>{
                unSubscribe()
            }

        },[])


        const googleSignIn =()=>{
          return signInWithPopup(auth,provider)
        }


    const info = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
