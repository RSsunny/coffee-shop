import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loding,setLoding]=useState(true)

    const createUser=(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(users)=>{
            setUser(users)

        })
        return unsubscribe
    },[])


    const authInfo={
        user,
        loding,
        createUser,
        userLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node.isRequired
}