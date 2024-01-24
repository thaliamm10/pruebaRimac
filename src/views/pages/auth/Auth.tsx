import React from 'react';
import imgLogo from "../../../assets/images/portal/img.png";
import Login from "./login/Login";

const Auth = () => {
    return (
        <>

                {/*<div className={'rectangle3463484'}>*/}
                    <div className={'frame1000004308'} >
                        <img src={imgLogo}  className={'frame1000004298'} alt="Logo"/>
                        <img src={imgLogo}  className={'frame1000004299'} alt="Logo"/>
                    </div>
                {/*</div>*/}
                {/*<div className={'rectangle3463485'}>*/}
                <Login/>
                {/*</div>*/}



        </>


    );
};

export default Auth;
