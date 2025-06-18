import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Upload, message } from 'antd'; // Import Ant Design components, thêm InputNumber và Upload
import { UploadOutlined } from '@ant-design/icons'; // Import icon Upload
import classNames from 'classnames/bind';
import styles from './ManageCourse.module.scss'; // Sử dụng chung SCSS

const cx = classNames.bind(styles);
const { Option } = Select;
const { TextArea } = Input; // Để dùng cho mô tả khóa học

function CreateCourse() {
    const [form] = Form.useForm(); // Sử dụng Ant Design Form instance

    const onFinish = (values) => {
        console.log('Thông tin khóa học mới:', values);
        // Ở đây bạn sẽ gọi API để gửi dữ liệu lên server
        message.success('Thêm khóa học thành công!');
        form.resetFields(); // Reset form sau khi gửi thành công
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Lỗi khi gửi form:', errorInfo);
        message.error('Vui lòng kiểm tra lại thông tin nhập liệu.');
    };

    // Hàm xử lý upload file (hình ảnh)
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('page-header')}>Thêm khóa học mới</h4>
            <div className={cx('form-container')}>
                <Form
                    form={form}
                    name="createCourse"
                    layout="vertical" // Dạng layout form dọc
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className={cx('user-form')}
                >
                    <Form.Item
                        label="Tên khóa học"
                        name="courseName"
                        rules={[{ required: true, message: 'Vui lòng nhập tên khóa học!' }]}
                    >
                        <Input placeholder="Nhập tên khóa học" />
                    </Form.Item>

                    <Form.Item
                        label="Tác giả"
                        name="author"
                        rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}
                    >
                        <Input placeholder="Nhập tên tác giả" />
                    </Form.Item>

                    <Form.Item
                        label="Hình ảnh"
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: 'Vui lòng tải lên hình ảnh khóa học!' }]}
                    >
                        <Upload name="courseImage" listType="picture" maxCount={1} beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Giá gốc (VNĐ)"
                        name="originalPrice"
                        rules={[{ required: true, message: 'Vui lòng nhập giá gốc!' }]}
                    >
                        <InputNumber
                            min={0}
                            style={{ width: '100%' }}
                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            placeholder="Nhập giá gốc"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Giảm giá (%)"
                        name="discount"
                        initialValue={0} // Mặc định không giảm giá
                        rules={[{ type: 'number', min: 0, max: 100, message: 'Giảm giá phải từ 0 đến 100!' }]}
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            style={{ width: '100%' }}
                            placeholder="Nhập phần trăm giảm giá"
                        />
                    </Form.Item>

                    {/* Giá bán có thể được tính toán tự động hoặc là một trường input nếu cần chỉnh sửa thủ công */}
                    {/* Ví dụ: Nếu muốn giá bán tự động tính từ giá gốc và giảm giá, bạn có thể sử dụng Form.Item.useWatch hoặc đặt logic trong onFinish */}
                    <Form.Item
                        label="Giá bán (VNĐ)"
                        name="sellingPrice"
                        // Nếu muốn giá bán là input để chỉnh sửa
                        rules={[{ required: true, message: 'Vui lòng nhập giá bán!' }]}
                    >
                        <InputNumber
                            min={0}
                            style={{ width: '100%' }}
                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            placeholder="Nhập giá bán"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả khóa học"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập mô tả khóa học!' }]}
                    >
                        <TextArea rows={4} placeholder="Nhập mô tả chi tiết về khóa học" />
                    </Form.Item>

                    <Form.Item
                        label="Trạng thái"
                        name="status"
                        rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                        initialValue="Bản nháp" // Giá trị mặc định
                    >
                        <Select placeholder="Chọn trạng thái khóa học">
                            <Option value="Công khai">Công khai</Option>
                            <Option value="Bản nháp">Bản nháp</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={cx('submit-button')}>
                            Thêm khóa học
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default CreateCourse;
