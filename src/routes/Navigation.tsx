import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
const Auth = React.lazy(() => import("../views/pages/auth/Auth"));
const Plans = React.lazy(() => import("../views/pages/plans/Plans"));
const Sumary = React.lazy(() => import("../views/pages/plans/options/summary/Summary"));
const Error = React.lazy(() => import("../views/pages/error/Error"));


const Navigation = () => {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="login"  element={<Auth/>}></Route>
                    <Route path="plans"  element={<Plans/>}></Route>
                    <Route path="sumary"  element={<Sumary/>}></Route>
                    <Route path="error"  element={<Error/>}></Route>

                    <Route path="/*" element={<Navigate to="/login" replace/>}></Route>
                </Routes>
        </BrowserRouter>
    );
};

export default Navigation;
