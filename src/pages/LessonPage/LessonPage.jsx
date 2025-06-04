import React from 'react';
import classNames from 'classnames/bind';
import styles from './LessonPage.module.scss';

const cx = classNames.bind(styles);

function LessonPage() {
    return <div className={cx('wrapper')}>Trang bài học</div>;
}

export default LessonPage;
