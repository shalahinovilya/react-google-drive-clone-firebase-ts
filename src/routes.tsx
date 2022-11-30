import React from 'react'
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Drive from "./pages/Drive";
import {useAuth} from "./contexts/AuthContext";
import {User} from "firebase/auth";
import LogIn from "./components/LogIn";

interface ProtectedRouteProps {
    redirectPath: string;
    user : User | null;
    children: any
}

const ProtectedRoute = ({redirectPath = '/login', user, children} : ProtectedRouteProps) => {

    if (!user) {
        return (<Navigate to={redirectPath}/>)
    }

    return children ? children : (<Outlet/>)
}

export const AppRoutes = () => {

    const {currentUser} = useAuth()

    return (
        <Routes>
            <Route
                path="/"
                element={
                <ProtectedRoute
                    redirectPath={'/login'}
                    user={currentUser}
                >
                    <Drive/>
                </ProtectedRoute>
            }
            />

            <Route
                path="/:folderId"
                element={
                    <ProtectedRoute
                        redirectPath={'/login'}
                        user={currentUser}
                    >
                        <Drive/>
                    </ProtectedRoute>
                }
            />

            <Route path={'/login'} element={<LogIn/>}></Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}