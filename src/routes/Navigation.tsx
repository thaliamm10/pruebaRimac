import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
const Auth = React.lazy(() => import("../views/pages/auth/Auth"));
const Plans = React.lazy(() => import("../views/pages/plans/Plans"));


const Navigation = () => {

    return (
        // <div className='hLayer'>
        // <Provider store={store}>
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

                    <Route path="login"  element={<Auth/>}></Route>
                    <Route path="plans"  element={<Plans/>}></Route>

                    <Route path="/*" element={<Navigate to="/home" replace/>}></Route>
                </Routes>



        </BrowserRouter>
        // </Provider>
        // </div>

    );
};

export default Navigation;
