import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from "../Firebase/firebase.config";


import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
        const [user, setUser] =useState(null);

        const [loading, setloading]=useState(true);
       
        const createUser =(email,password) =>{
            setloading(true);
            return createUserWithEmailAndPassword(auth,email,password)
        }

        const signIn =(email,password)=>{
            setloading(true)
           return signInWithEmailAndPassword(auth,email,password)
        }

        const logOut =() =>{
            setloading(true);
            return signOut(auth);
        }

        useEffect(() =>{
          const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
                console.log('user in the auth sate changes',currentUser);
                setloading(false);
                setUser(currentUser)
            })
            return ()=>{
                unSubscribe()
            }

        },[])


        const googleSignIn =()=>{
          setloading(true);
          return signInWithPopup(auth,provider)
        }


 

    const info = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        loading
       
        
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
