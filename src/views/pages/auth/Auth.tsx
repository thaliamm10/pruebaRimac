import React from 'react';
import imgLogo from "../../../assets/images/image 220.png";
import Login from "./login/Login";
import './Auth.css'
import {Row} from "react-bootstrap";

const Auth = () => {
    return (
        <>
            {/*Imagenes de fondo*/}
            <div className={'left-image'}/>
            <div className={'right-image'}/>


            <div className={'row'}>
                <div className={'col-lg-8 col-md-12 col-sm-12 section1'}>
                    <img src={imgLogo} className={'section1__img img-fluid'} alt="Logo" />
                    <img src={imgLogo} className={'section1__img img-fluid'} alt="Logo"  />
                </div>

                <div className={'col-lg-4 col-md-12 col-sm-12 section2'}>
                    <Login/>
                </div>
            </div>



            {/*Secciones de contenido*/}
            {/*<div className={'section1'}>*/}
            {/*    <img src={imgLogo} className={'section1__img'} alt="Logo"/>*/}
            {/*    <img src={imgLogo} className={'section1__img'} alt="Logo"/>*/}
            {/*</div>*/}
            {/*<div className={'section2'}>*/}
            {/*    <Login/>*/}
            {/*</div>*/}
        </>
    );
};

export default Auth;
