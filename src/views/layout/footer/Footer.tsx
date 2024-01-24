import React from 'react';
import imgLogo from "../../../assets/images/logo/Logo.svg";
import {Row} from "react-bootstrap";

const Footer = () => {
    return (
        // <Row>
            <div className={'Frame1000004300 grey-100F'}>
                <img src={imgLogo} className="logoFooter" alt="Logo"/>

                <p className={'grey-10 comp-14-regular layoutF'}>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        // </Row>
    );
};

export default Footer;
