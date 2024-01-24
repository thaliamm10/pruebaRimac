import React from 'react';
import imgLogo from "../../../assets/images/logo/img.png";

const Header = () => {
    return (
        <div className='hLayer'>
            <div className="frame1000004313">
            <img src={imgLogo} className="logo" alt="Logo"/>
            </div>
            <div className="frame1000004289">

                <p className="grey-100 subtitle-12">¡Compra por este medio!</p>
                <p className="text-button"><i className={'fa-solid fa-phone'}></i> (01) 411 6001</p>
            </div>
        </div>
    );
};

export default Header;
