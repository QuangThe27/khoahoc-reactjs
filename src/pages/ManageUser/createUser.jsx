import React from 'react';
import classNames from 'classnames/bind';
import styles from './ManageUser.module.scss';

const cx = classNames.bind(styles);

function createUser() {
    return <div className={cx('wrapper')}>Trang thêm người dùng</div>;
}

export default createUser;
