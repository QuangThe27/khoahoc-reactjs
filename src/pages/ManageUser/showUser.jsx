import React from 'react';
import classNames from 'classnames/bind';
import styles from './ManageUser.module.scss';

const cx = classNames.bind(styles);

function showUser() {
    return <div className={cx('wrapper')}></div>;
}

export default showUser;
