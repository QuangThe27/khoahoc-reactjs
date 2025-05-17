import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    return <div className={cx('wrapper')}>Trang Login</div>;
}

export default LoginPage;
