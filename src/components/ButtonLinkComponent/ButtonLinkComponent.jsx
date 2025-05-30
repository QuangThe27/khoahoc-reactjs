import React from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonLinkComponent.module.scss';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const cx = classNames.bind(styles);

function ButtonLinkComponent({
    to, // Đường link
    children,
    padding,
    margin,
    fontSize,
    fontWeight,
    border,
    borderRadius,
    background,
    color,
}) {
    const customStyle = {
        padding: padding,
        margin: margin,
        fontSize: fontSize,
        fontWeight: fontWeight,
        border: border,
        borderRadius: borderRadius,
        background: background,
        color: color,
    };

    return (
        <Link to={to} className={cx('button-link')} style={customStyle}>
            {children}
        </Link>
    );
}

export default ButtonLinkComponent;
