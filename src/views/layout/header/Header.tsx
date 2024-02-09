import React from 'react';
import imgLogo from "../../../assets/images/logo/img.png";


const Header = () => {
    return (
        <div className='sectioHeader'>
            <a href="/login">
                <img src={imgLogo} className="logo" alt="Logo"/>
            </a>
            <div className="sectioHeader__right">
                <p className="grey-100 subtitle-12">¡Compra por este medio!</p>
                <p className="text-button"><i className={'fa-solid fa-phone  telephone'}></i> (01) 411 6001</p>
            </div>
        </div>
    );
};

export default Header;
