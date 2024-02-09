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
                <div className={'col-lg-8 col-md-6 col-sm-12 col-12 section1'}>
                    <img src={imgLogo} className={'section1__img img-fluid'} alt="Logo"/>
                    <img src={imgLogo} className={'section1__img img-fluid hidden'} alt="Logo"/>
                </div>

                <div className={'col-lg-4 col-md-6 col-sm-12 col-12 section2'}>
                    <div className={'section2__content'}>
                        <span className={'section2__content__tag'}>Seguro Salud Flexible</span>
                        <p className={'section2__content__txt1'}>Creado para ti y tu familia</p>
                        <p className={'section2__content__txt2'}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
                            asesoría. 100% online.</p>

                    </div>
                    <Login/>
                </div>
            </div>
        </>
    );
};

export default Auth;
