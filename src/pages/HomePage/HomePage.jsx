import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import {} from '@ant-design/icons';

const cx = classNames.bind(styles);

function HomePage() {
    return <div className={cx('wrapper')}>Home</div>;
}

export default HomePage;
