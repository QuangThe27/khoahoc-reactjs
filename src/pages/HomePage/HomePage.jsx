import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import slideImage from '../../assets/image/slide/slide01.png';
import { Carousel, Col, Row, Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import ButtonLinkComponent from '../../components/ButtonLinkComponent/ButtonLinkComponent';

const cx = classNames.bind(styles);

const contentStyle = {
    margin: 0,
    height: '270px',
    background: 'linear-gradient(to right, #809cce, #dfbebe)',
    borderRadius: '20px',
};

const { Meta } = Card;

function HomePage() {
    return (
        <div
            className={cx('wrapper')}
            style={{
                background: 'linear-gradient(to right, #32325d, #404072)',
            }}
        >
            {/* Slide show */}
            <div style={{ padding: '20px' }}>
                <Carousel arrows infinite={false}>
                    <div>
                        <div style={contentStyle}>
                            <Row>
                                <Col
                                    span={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h5 className={cx('slideTitle')}>Học lập trình</h5>
                                    <p className={cx('slideSub')}>Khóa học ReactJs cơ bản đến nâng cao</p>
                                    <ButtonLinkComponent
                                        to="/login" // Đường link đến trang đăng nhập
                                        padding="10px 15px"
                                        margin="0 10px 0 0"
                                        fontSize="1.4rem"
                                        fontWeight="500"
                                        color="var(--white)"
                                        borderRadius="20px"
                                        background="linear-gradient(to right bottom, #ff8f26, #ff5117)"
                                    >
                                        Xem chi tiết
                                    </ButtonLinkComponent>
                                </Col>
                                <Col span={12}>
                                    <img src={slideImage} alt="" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <Row>
                                <Col
                                    span={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h5 className={cx('slideTitle')}>Học lập trình</h5>
                                    <p className={cx('slideSub')}>Khóa học ReactJs cơ bản đến nâng cao</p>
                                    <ButtonLinkComponent
                                        to="/login" // Đường link đến trang đăng nhập
                                        padding="10px 15px"
                                        margin="0 10px 0 0"
                                        fontSize="1.4rem"
                                        fontWeight="500"
                                        color="var(--white)"
                                        borderRadius="20px"
                                        background="linear-gradient(to right bottom, #ff8f26, #ff5117)"
                                    >
                                        Xem chi tiết
                                    </ButtonLinkComponent>
                                </Col>
                                <Col span={12}>
                                    <img src={slideImage} alt="" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Course pro */}
            <div className={cx('container')}>
                <div className={cx('course')}>
                    <span className={cx('courseTitle')}>
                        Khóa học Pro <span></span>
                    </span>
                    <Row>
                        <Col span={6} style={{ marginBottom: '20px' }}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <Link to="/product">
                                        <img
                                            className={cx('courseImg')}
                                            style={{ width: '100%' }}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    </Link>
                                }
                            >
                                <Meta title="Card title" description="This is the description" />
                                <div className={cx('coursePrice')}>
                                    <span className={cx('OriginalPrice')}>2.500.000đ</span>
                                    <span className={cx('CurrentPrice')}>2.000.000đ</span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Course free */}
            <div className={cx('container')}>
                <div className={cx('course')}>
                    <span className={cx('courseTitle')}>Khóa học miễn phí</span>
                    <Row>
                        <Col span={6} style={{ marginBottom: '20px' }}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <Link to="/product">
                                        <img
                                            className={cx('courseImg')}
                                            style={{ width: '100%' }}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    </Link>
                                }
                            >
                                <Meta title="Card title" description="This is the description" />
                                <div className={cx('coursePrice')}>
                                    <span className={cx('CurrentPrice')}>Miễn phí</span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Featured article */}
            <div className={cx('container')}>
                <div className={cx('course')}>
                    <div className={cx('article')}>
                        <span className={cx('courseTitle')}>Bài viết nổi bật</span>
                        <span className={cx('articleAll')}>
                            Xem tất cả <RightOutlined />
                        </span>
                    </div>
                    <Row>
                        <Col span={6} style={{ marginBottom: '20px' }}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <Link to="/product">
                                        <img
                                            className={cx('courseImg')}
                                            style={{ width: '100%' }}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    </Link>
                                }
                            >
                                <Meta title="Card title" />
                                <div className={cx('coursePrice')}>
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    <span className={cx('CurrentPrice')}>Thế Quang</span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
