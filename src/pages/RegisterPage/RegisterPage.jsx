import React from 'react';
import classNames from 'classnames/bind';
import { Button, Input, Form, DatePicker } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined, CalendarOutlined } from '@ant-design/icons';
import styles from './RegisterPage.module.scss';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/image/logo/image.png';

const cx = classNames.bind(styles);

function RegisterPage() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const dob = values.dob ? values.dob.format('YYYY-MM-DD') : null;
        console.log('Date of Birth:', dob);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('register-container')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={logoImage} alt="F8 Logo" />
                    </Link>
                </div>
                <h2 className={cx('title')}>Đăng ký tài khoản F8</h2>
                <p className={cx('description')}>Tạo tài khoản để tham gia cộng đồng và học tập cùng F8!</p>

                <Form
                    form={form}
                    name="register_form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className={cx('register-form')}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ email của bạn!',
                            },
                            {
                                type: 'email',
                                message: 'Địa chỉ email không hợp lệ!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại của bạn!',
                            },
                            {
                                pattern: /^[0-9]{10,11}$/,
                                message: 'Số điện thoại không hợp lệ!',
                            },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
                    </Form.Item>

                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên của bạn!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Họ và tên" />
                    </Form.Item>

                    <Form.Item
                        label="Ngày sinh"
                        name="dob"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn ngày sinh của bạn!',
                            },
                        ]}
                    >
                        <DatePicker
                            prefix={<CalendarOutlined />}
                            placeholder="Ngày/Tháng/Năm"
                            format="DD/MM/YYYY"
                            style={{ width: '100%' }}
                            // disabledDate to disallow future dates
                            disabledDate={(current) => current && current > dayjs().endOf('day')}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                            {
                                min: 6,
                                message: 'Mật khẩu phải có ít nhất 6 ký tự!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu của bạn!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Xác nhận mật khẩu" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={cx('register-form-button')}>
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>

                <div className={cx('links')}>
                    Bạn đã có tài khoản?{' '}
                    <Link to="/login" className={cx('link')}>
                        Đăng nhập
                    </Link>
                </div>

                <p className={cx('terms')}>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                    <Link className={cx('link')}>điều khoản sử dụng</Link> của chúng tôi.
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
