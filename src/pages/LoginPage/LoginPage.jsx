import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Button, Input, Form } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/image/logo/image.png';

const cx = classNames.bind(styles);

function LoginPage() {
    const [showEmailPhoneInputs, setShowEmailPhoneInputs] = useState(false);
    const [form] = Form.useForm(); // Ant Design Form instance

    const handleEmailPhoneClick = () => {
        setShowEmailPhoneInputs(true);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // Here you would typically handle the login logic
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-container')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={logoImage} alt="F8 Logo" />
                    </Link>
                </div>
                <h2 className={cx('title')}>Đăng nhập vào F8</h2>
                <p className={cx('warning')}>
                    Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
                </p>

                {!showEmailPhoneInputs ? (
                    <>
                        <Button
                            className={cx('login-option-button')}
                            onClick={handleEmailPhoneClick}
                            icon={<UserOutlined />}
                        >
                            Sử dụng email / số điện thoại
                        </Button>
                        <Button
                            className={cx('login-option-button')}
                            icon={
                                <img
                                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                                    alt="Google icon"
                                    className={cx('icon')}
                                />
                            } // Google icon
                            // No onClick functionality needed yet for Google login
                        >
                            Đăng nhập với Google
                        </Button>
                    </>
                ) : (
                    <Form
                        form={form}
                        name="login_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        className={cx('login-form')}
                    >
                        <Form.Item
                            name="emailPhone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email hoặc số điện thoại của bạn!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />} // Or PhoneOutlined based on validation
                                placeholder="Email hoặc số điện thoại"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu của bạn!',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={cx('login-form-button')}>
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                )}

                <div className={cx('links')}>
                    Bạn chưa có tài khoản?{' '}
                    <Link to="/register" className={cx('link')}>
                        Đăng ký
                    </Link>
                </div>
                <div className={cx('links')}>
                    <Link className={cx('link')}>Quên mật khẩu?</Link>
                </div>

                <p className={cx('terms')}>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                    <Link className={cx('link')}>điều khoản sử dụng</Link>
                    của chúng tôi.
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
