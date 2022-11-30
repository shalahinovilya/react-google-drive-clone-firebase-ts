import React, {useContext, useEffect, useState} from 'react';
import {getAuth, signInWithPopup, User, GoogleAuthProvider} from "firebase/auth";
import {CircularProgress} from "@mui/material";



interface defaultValueInterface {
    currentUser: User | null,
    signIn: () => void,
    signOut: () =>  void
    }

const defaultValue = {
    currentUser: null,
    signIn: () => {},
    signOut: () => {}

}

const AuthContext = React.createContext<defaultValueInterface>(defaultValue)

export const AuthProvider = ({children}: any) => {

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    async function signIn () {
       return await signInWithPopup(auth, googleProvider).then(credentials => {
           setCurrentUser(credentials.user)
        })
    }

    async function signOut () {
       return await auth.signOut()
    }

    useEffect(() => {
        auth.onAuthStateChanged((user: User | null) => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        signIn,
        signOut
    }

    if (loading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20rem'}}>
            <CircularProgress size={'15rem'}/>
        </div>)
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

};

export const useAuth = () => {
    return useContext(AuthContext)
}