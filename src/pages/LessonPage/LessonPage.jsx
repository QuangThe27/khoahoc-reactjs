import React from 'react';
import classNames from 'classnames/bind';
import styles from './LessonPage.module.scss';
import { Row, Col } from 'antd';
import { Collapse, Space } from 'antd';
import video from '../../assets/video/video.mp4';
import { FileOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import logoImage from '../../assets/image/logo/image.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const { Panel } = Collapse;
const lessons = [
    {
        title: 'IIFE, Scope, Closure',
        completed: 2,
        total: 9,
        duration: '01:46:19',
        subLessons: [],
    },
    {
        title: 'Các bài thực hành cần nhiều 🧠',
        completed: 0,
        total: 3,
        duration: '02:43:49',
        subLessons: [
            { title: 'Tìm hiểu về thư viện Redux', duration: '35:54', locked: false },
            { title: 'Tự code thư viện build UI', duration: '53:54', locked: true },
            { title: 'Code ứng dụng Todo List', duration: '01:14:01', locked: true },
        ],
    },
];

function LessonPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <Link to="/" className={cx('headingLeft')}>
                    <img src={logoImage} alt="" />
                    <span>Học lập trình</span>
                </Link>

                <div className={cx('headingRight')}>
                    <span>2/29 bài học</span>
                    <button>Ghi chú</button>
                </div>
            </div>

            <Row className={cx('content')}>
                <Col span={18} className={cx('contentLeft')}>
                    <div className={cx('containerCenter')}>
                        <div className={cx('containerVideo')}>
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={video}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            {/* Để dùng khi src={video} bĩ lỗi */}
                            {/* <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={`https://www.youtube.com/embed/-itttmX6HX0`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}
                        </div>
                    </div>

                    <div className={cx('containerContent')}>
                        <div className={cx('introduce')}>
                            <p className={cx('introduceTitle')}>Giới thiệu</p>
                            <p className={cx('introduceTime')}>Cập nhật mới nhất vào 06/05/2025</p>
                            <p className={cx('introduceContent')}>Khóa học chuyên nghiệp</p>
                        </div>
                    </div>
                </Col>

                <Col span={6} className={cx('contentRight')}>
                    <div className={cx('lessonList')}>
                        <p className={cx('lessonTitleMain')}>Nội dung khóa học</p>

                        <Collapse defaultActiveKey={['1']} ghost>
                            {lessons.map((lesson, index) => (
                                <Panel
                                    // STT - Các chương
                                    header={
                                        <Space direction="vertical" size={0}>
                                            <span className={cx('lessonTitle')}>{`${index + 1}. ${lesson.title}`}</span>
                                            <span
                                                className={cx('lessonSub')}
                                            >{`${lesson.completed}/${lesson.total} | ${lesson.duration}`}</span>
                                        </Space>
                                    }
                                    key={index + 1}
                                >
                                    {/* Các bài học trong chương */}
                                    {lesson.subLessons.length > 0 ? (
                                        <Space direction="vertical" style={{ width: '100%' }}>
                                            {lesson.subLessons.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className={cx('lessonSubItem', { locked: sub.locked })}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        color: sub.locked ? '#ccc' : '#333',
                                                        textDecoration: sub.locked ? 'line-through' : 'none',
                                                        cursor: sub.locked ? 'not-allowed' : 'pointer',
                                                    }}
                                                >
                                                    {/*  */}
                                                    <span>
                                                        {subIndex + 1}. {sub.title}
                                                    </span>
                                                    <span>{sub.duration}</span>
                                                </div>
                                            ))}
                                        </Space>
                                    ) : (
                                        <span className={cx('lessonEmpty')}>Không có bài học con</span>
                                    )}
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                </Col>
            </Row>

            <div className={cx('containerNavBar')}>
                <div className={cx('navBar')}>
                    <button>
                        <LeftOutlined className={cx('narBarIcon')} /> Bài trước
                    </button>
                    <button>
                        Bài tiếp theo
                        <RightOutlined className={cx('narBarIcon')} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LessonPage;
