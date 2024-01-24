import React from 'react';
import imgLogo from "../../../assets/images/logo/img_1.png";

const Footer = () => {
    return (

        <div className={'frame1000004300 grey-100F'}>
            <img src={imgLogo} className="logoFooter" alt="Logo"/>

            <div>
                <p className={'grey-10 comp-14-regular layoutF'}>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>


        </div>

    );
};

export default Footer;
