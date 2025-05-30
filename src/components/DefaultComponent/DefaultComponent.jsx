import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import './DefaultComponent.scss';

function DefaultComponent({ children, isShowHeader }) {
    return (
        <div>
            {isShowHeader && <HeaderComponent />}
            {children}
        </div>
    );
}

export default DefaultComponent;
