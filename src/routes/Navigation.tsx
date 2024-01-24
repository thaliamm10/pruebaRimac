import React from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";

const Auth = React.lazy(() => import("../views/pages/auth/Auth"));
const Navigation = () => {

    return (
        // <div className='hLayer'>

        <BrowserRouter>



                {/*<nav>*/}
                {/*    <img src={logo} alt="Logo"/>*/}

                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <NavLink to="/" className={({isActive})=>isActive?'nav-active':''}> Home</NavLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <NavLink to="/about" className={({isActive})=>isActive?'nav-active':''}>About</NavLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <NavLink to="/users" className={({isActive})=>isActive?'nav-active':''}>Users</NavLink>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                <Routes>
                    {/*<Route path="about" element={<h1>About Page</h1>}></Route>*/}
                    {/*<Route path="users" element={<h1>Users Page</h1>}></Route>*/}
                    {/*<Route path="home" element={<h1>Home Page</h1>}></Route>*/}
                    <Route path="login"  element={<Auth/>}></Route>

                    <Route path="/*" element={<Navigate to="/home" replace/>}></Route>
                </Routes>



        </BrowserRouter>
        // </div>

    );
};

export default Navigation;
