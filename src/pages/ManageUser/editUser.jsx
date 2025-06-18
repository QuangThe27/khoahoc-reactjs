import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, message, Spin, Modal, Space } from 'antd'; // Thêm Modal
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import classNames from 'classnames/bind';
import styles from './ManageUser.module.scss';

const cx = classNames.bind(styles);
const { Option } = Select;

function EditUser() {
    const { id } = useParams(); // Lấy ID người dùng từ URL
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(true);
    const [isResetModalVisible, setIsResetModalVisible] = useState(false); // Trạng thái hiển thị modal reset mật khẩu

    // Giả lập dữ liệu người dùng cần chỉnh sửa
    const mockUserData = {
        fullName: 'Nguyễn Văn A',
        dob: '1990-01-15',
        email: 'vana@example.com', // Tài khoản thường là email
        tel: '0912345678',
        password: 'admin123', // Mật khẩu mẫu (trong thực tế sẽ không lưu ở đây)
        status: 'Kích hoạt',
    };

    // Hàm giả lập tải dữ liệu người dùng
    useEffect(() => {
        setLoading(true);
        // Trong thực tế: gọi API để lấy thông tin người dùng theo ID
        setTimeout(() => {
            form.setFieldsValue({
                ...mockUserData,
                dob: mockUserData.dob ? dayjs(mockUserData.dob) : null,
            });
            setLoading(false);
        }, 1000);
    }, [id, form]);

    const onFinish = (values) => {
        console.log('Thông tin người dùng cập nhật (ID:', id, '):', values);
        // Ở đây bạn sẽ gọi API để gửi dữ liệu cập nhật lên server
        message.success('Cập nhật người dùng thành công!');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Lỗi khi gửi form:', errorInfo);
        message.error('Vui lòng kiểm tra lại thông tin nhập liệu.');
    };

    // Xử lý khi click nút Reset mật khẩu
    const handleResetPassword = () => {
        setIsResetModalVisible(true); // Hiển thị modal xác nhận
    };

    // Xử lý khi người dùng xác nhận trong modal
    const handleConfirmReset = () => {
        // Trong thực tế: Gọi API để gửi mật khẩu mới về email người dùng
        console.log('Gửi yêu cầu reset mật khẩu cho email:', form.getFieldValue('email'));
        message.success(`Mật khẩu mới đã được gửi về email ${form.getFieldValue('email')}.`);
        setIsResetModalVisible(false); // Đóng modal
    };

    // Xử lý khi người dùng hủy trong modal
    const handleCancelReset = () => {
        setIsResetModalVisible(false); // Đóng modal
    };

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('page-header')}>Chỉnh sửa thông tin người dùng</h4>
            <div className={cx('form-container')}>
                <Spin spinning={loading} tip="Đang tải thông tin...">
                    <Form
                        form={form}
                        name="editUser"
                        layout="vertical"
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
                            label="Tài khoản (Email)"
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

                        {/* Hiển thị mật khẩu dưới dạng ẩn (có thể thêm toggle) */}
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            // Không có rules required vì đây là hiển thị, không phải nhập mới
                        >
                            {/* Sử dụng Input.Password để ẩn/hiện mật khẩu */}
                            <Input.Password
                                placeholder="Mật khẩu (không chỉnh sửa trực tiếp)"
                                disabled // Không cho phép chỉnh sửa trực tiếp trường này
                            />
                        </Form.Item>

                        <Form.Item
                            label="Trạng thái"
                            name="status"
                            rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                        >
                            <Select placeholder="Chọn trạng thái tài khoản">
                                <Option value="Kích hoạt">Kích hoạt</Option>
                                <Option value="Chưa kích hoạt">Chưa kích hoạt</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Space>
                                <Button type="primary" htmlType="submit" className={cx('submit-button')}>
                                    Cập nhật thông tin
                                </Button>
                                <Button
                                    type="default" // Hoặc type="dashed"
                                    onClick={handleResetPassword}
                                    className={cx('reset-password-button')}
                                >
                                    Reset Mật khẩu
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>

            {/* Modal xác nhận reset mật khẩu */}
            <Modal
                title="Xác nhận Reset Mật khẩu"
                open={isResetModalVisible} // Thay visible bằng open cho Ant Design v5+
                onOk={handleConfirmReset}
                onCancel={handleCancelReset}
                okText="Gửi"
                cancelText="Hủy"
            >
                <p>Bạn có chắc chắn muốn gửi mật khẩu mới về email của người dùng này không?</p>
                <p>
                    Email: <strong>{form.getFieldValue('email')}</strong>
                </p>
            </Modal>
        </div>
    );
}

export default EditUser;
