import React from 'react';
import imgLogo from "../../../assets/images/image 220.png";
import Login from "./login/Login";

const Auth = () => {
    return (
        <>
            <div
                className={'left-image blur-asset'}
            />
            <div
                className={'right-image'}
            />

            <div className={'frame1000004308'}>
                <img src={imgLogo} className={'frame1000004298'} alt="Logo"/>
                <img src={imgLogo} className={'frame1000004299'} alt="Logo"/>
            </div>


            <div className={'frame1000004351'}>
                <Login/>
            </div>




        </>


    );
};

export default Auth;
