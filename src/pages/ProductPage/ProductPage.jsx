import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import { Row, Col, Card, Button, Collapse, Space } from 'antd';
import {
    CheckOutlined,
    ClockCircleOutlined,
    BookOutlined,
    HourglassOutlined,
    PlayCircleOutlined,
} from '@ant-design/icons';

const cx = classNames.bind(styles);
const { Panel } = Collapse;

function ProductPage() {
    // Dữ liệu giả định cho các phần của khóa học
    const courseContent = [
        {
            title: '1. Khái niệm kỹ thuật căn bản',
            lessons: [
                { name: '1. Mô hình Client - Server là gì?', duration: '11:35' },
                { name: '2. Domain là gì? Tên miền là gì?', duration: '10:34' },
                // ...thêm các bài học khác nếu có
            ],
        },
        {
            title: '2. Cài đặt môi trường',
            lessons: [{ name: 'Bài 1: Cài đặt Node.js', duration: '15:00' }],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Row gutter={[32, 32]}>
                    {/* Left Column - Main Content */}
                    <Col xs={24} lg={16}>
                        {/* Section 1: Course Title and Description */}
                        <div className={cx('section')}>
                            <h1 className={cx('title')}>Kiến Thức Nhập Môn IT</h1>
                            <p className={cx('description')}>
                                Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                                này trước nhé.
                            </p>
                        </div>

                        {/* Section 2: What you will learn */}
                        <div className={cx('section')}>
                            <h2 className={cx('section-heading')}>Bạn sẽ học được gì?</h2>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <p className={cx('feature-item')}>
                                        <CheckOutlined className={cx('icon-check')} />
                                        Các kiến thức cơ bản, nền móng của ngành IT
                                    </p>
                                    <p className={cx('feature-item')}>
                                        <CheckOutlined className={cx('icon-check')} />
                                        Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng
                                    </p>
                                </Col>
                                <Col xs={24} md={12}>
                                    <p className={cx('feature-item')}>
                                        <CheckOutlined className={cx('icon-check')} />
                                        Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng
                                    </p>
                                    <p className={cx('feature-item')}>
                                        <CheckOutlined className={cx('icon-check')} />
                                        Hiểu hơn về cách internet và máy vi tính hoạt động
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        {/* Section 3: Course Content */}
                        <div className={cx('section')}>
                            <h2 className={cx('section-heading')}>Nội dung khóa học</h2>
                            <div className={cx('course-info-summary')}>
                                <span>4 chương</span>
                                <span className={cx('dot')}>•</span>
                                <span>12 bài học</span>
                                <span className={cx('dot')}>•</span>
                                <span>Thời lượng 03 giờ 26 phút</span>
                                <Button type="link" className={cx('expand-all')}>
                                    Mở rộng tất cả
                                </Button>
                            </div>
                            <Collapse
                                expandIconPosition="end" // Đặt icon mở rộng ở bên phải
                                className={cx('course-collapse')}
                            >
                                {courseContent.map((section, index) => (
                                    <Panel
                                        header={
                                            <div className={cx('panel-header-custom')}>
                                                <span className={cx('panel-title')}>{section.title}</span>
                                                <span className={cx('panel-lesson-count')}>
                                                    {section.lessons.length} bài học
                                                </span>
                                            </div>
                                        }
                                        key={index}
                                        className={cx('panel-item')}
                                    >
                                        {section.lessons.map((lesson, lessonIndex) => (
                                            <div key={lessonIndex} className={cx('lesson-item')}>
                                                <Space>
                                                    <PlayCircleOutlined className={cx('lesson-icon')} />
                                                    <span>{lesson.name}</span>
                                                </Space>
                                                <span className={cx('lesson-duration')}>{lesson.duration}</span>
                                            </div>
                                        ))}
                                    </Panel>
                                ))}
                            </Collapse>
                        </div>
                    </Col>

                    {/* Right Column - Course Card */}
                    <Col xs={24} lg={8}>
                        <Card className={cx('course-card')}>
                            <div className={cx('video-thumbnail')}>
                                <img
                                    src="https://img.youtube.com/vi/b_HjV13lYjU/hqdefault.jpg" // Thay thế bằng thumbnail video thực tế
                                    alt="Video Thumbnail"
                                    className={cx('thumbnail-image')}
                                />
                                <div className={cx('play-button')}>
                                    <PlayCircleOutlined />
                                </div>
                                <span className={cx('preview-text')}>Xem giới thiệu khóa học</span>
                            </div>
                            <div className={cx('price')}>Miễn phí</div>

                            <Button type="primary" size="large" block className={cx('register-button')}>
                                ĐĂNG KÝ HỌC
                            </Button>

                            <div className={cx('course-details')}>
                                <p className={cx('detail-item')}>
                                    <ClockCircleOutlined />
                                    <span>Trình độ cơ bản</span>
                                </p>
                                <p className={cx('detail-item')}>
                                    <BookOutlined />
                                    <span>Tổng số 12 bài học</span>
                                </p>
                                <p className={cx('detail-item')}>
                                    <HourglassOutlined />
                                    <span>Thời lượng 03 giờ 26 phút</span>
                                </p>
                                <p className={cx('detail-item')}>
                                    <CheckOutlined />
                                    <span>Học mọi lúc, mọi nơi</span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProductPage;
