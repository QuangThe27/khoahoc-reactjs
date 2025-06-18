import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, message } from 'antd'; // Import Ant Design components
import classNames from 'classnames/bind';
import styles from './ManageUser.module.scss'; // Sử dụng chung SCSS

const cx = classNames.bind(styles);
const { Option } = Select;

function CreateUser() {
    // Đổi tên hàm thành CreateUser
    const [form] = Form.useForm(); // Sử dụng Ant Design Form instance

    const onFinish = (values) => {
        console.log('Thông tin người dùng mới:', values);
        // Ở đây bạn sẽ gọi API để gửi dữ liệu lên server
        message.success('Thêm người dùng thành công!');
        form.resetFields(); // Reset form sau khi gửi thành công
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Lỗi khi gửi form:', errorInfo);
        message.error('Vui lòng kiểm tra lại thông tin nhập liệu.');
    };

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('page-header')}>Thêm người dùng mới</h4>
            <div className={cx('form-container')}>
                <Form
                    form={form}
                    name="createUser"
                    layout="vertical" // Dạng layout form dọc
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className={cx('user-form')}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                    >
                        <Input placeholder="Nhập họ và tên" />
                    </Form.Item>

                    <Form.Item
                        label="Ngày sinh"
                        name="dob"
                        rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" placeholder="Chọn ngày sinh" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Email!' },
                            { type: 'email', message: 'Email không hợp lệ!' },
                        ]}
                    >
                        <Input placeholder="Nhập Email" />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="tel"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                    >
                        <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu!' },
                            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                        ]}
                        hasFeedback // Hiển thị icon feedback
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirm"
                        dependencies={['password']} // Phụ thuộc vào trường password
                        hasFeedback
                        rules={[
                            { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
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
                        <Input.Password placeholder="Xác nhận mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Trạng thái"
                        name="status"
                        rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                        initialValue="Kích hoạt" // Giá trị mặc định
                    >
                        <Select placeholder="Chọn trạng thái tài khoản">
                            <Option value="Kích hoạt">Kích hoạt</Option>
                            <Option value="Chưa kích hoạt">Chưa kích hoạt</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={cx('submit-button')}>
                            Thêm người dùng
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default CreateUser;
