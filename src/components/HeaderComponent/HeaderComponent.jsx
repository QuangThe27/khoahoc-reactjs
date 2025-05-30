import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderComponent.module.scss';
import { Col, Row } from 'antd';
import logoImage from '../../assets/image/logo/image.png';
import InputSearchComponent from '../InputSearchComponent/InputSearchComponent';
import ButtonLinkComponent from '../ButtonLinkComponent/ButtonLinkComponent';

const cx = classNames.bind(styles);

function HeaderComponent() {
    return (
        <Row className={cx('wrapper')}>
            <Col className={cx('col', 'col_left')} span={8}>
                <img src={logoImage} alt="logo" />
                <span>Học lập trình</span>
            </Col>
            <Col className={cx('col', 'col_center')} span={8}>
                <div>
                    <InputSearchComponent
                        widthInput={300}
                        placeholderInput="Tìm kiếm khóa học, tin tức, bài viết,..."
                    />
                </div>
            </Col>
            <Col className={cx('col', 'col_right')} span={8}>
                <ButtonLinkComponent
                    to="/register" // Đường link đến trang đăng ký
                    padding="10px 15px"
                    margin="0 10px 0 0"
                    fontSize="1.4rem"
                    fontWeight="500"
                    color="var(--white)"
                    // border="1px solid var(--white)"
                    // borderRadius="4px"
                    // background="transparent"
                >
                    Đăng ký
                </ButtonLinkComponent>

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
                    Đăng nhập
                </ButtonLinkComponent>
            </Col>
        </Row>
    );
}

export default HeaderComponent;
