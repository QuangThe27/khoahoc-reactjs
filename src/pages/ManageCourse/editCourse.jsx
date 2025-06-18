import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, InputNumber, Upload, message, Spin, Modal, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs'; // Import dayjs nếu bạn có trường ngày tháng (hiện tại không có trong khóa học)
import classNames from 'classnames/bind';
import styles from './ManageCourse.module.scss'; // Sử dụng chung SCSS

const cx = classNames.bind(styles);
const { Option } = Select;
const { TextArea } = Input;

function EditCourse() {
    const { id } = useParams(); // Lấy ID khóa học từ URL
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(true);
    const [fileList, setFileList] = useState([]); // Trạng thái cho file ảnh

    // Giả lập dữ liệu khóa học cần chỉnh sửa
    const mockCourseData = {
        courseName: 'Khóa học React cơ bản',
        author: 'Nguyễn Văn A',
        image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=ReactCourse', // URL ảnh mẫu
        originalPrice: 1000000,
        discount: 10, // 10%
        sellingPrice: 900000,
        description:
            'Khóa học dành cho người mới bắt đầu với React. Học cách xây dựng giao diện người dùng tương tác với thư viện JavaScript phổ biến này. Bao gồm các kiến thức từ cơ bản đến nâng cao, thực hành qua các dự án nhỏ.',
        status: 'Công khai',
    };

    // Hàm giả lập tải dữ liệu khóa học
    useEffect(() => {
        setLoading(true);
        // Trong thực tế: gọi API để lấy thông tin khóa học theo ID (id từ useParams)
        setTimeout(() => {
            // Thiết lập giá trị cho form
            form.setFieldsValue({
                courseName: mockCourseData.courseName,
                author: mockCourseData.author,
                originalPrice: mockCourseData.originalPrice,
                discount: mockCourseData.discount,
                sellingPrice: mockCourseData.sellingPrice,
                description: mockCourseData.description,
                status: mockCourseData.status,
            });

            // Nếu có ảnh, thiết lập fileList cho Upload component
            if (mockCourseData.image) {
                setFileList([
                    {
                        uid: '-1', // Unique id for the file
                        name: 'course_image.png', // Tên file hiển thị
                        status: 'done', // Trạng thái của file
                        url: mockCourseData.image, // URL của ảnh
                    },
                ]);
            }
            setLoading(false);
        }, 1000);
    }, [id, form]);

    const onFinish = (values) => {
        console.log('Thông tin khóa học cập nhật (ID:', id, '):', values);
        // values.image sẽ là một mảng các file đã upload (hoặc rỗng nếu không có)
        // Bạn cần trích xuất URL ảnh từ fileList hoặc từ response của API upload ảnh
        const uploadedImage = fileList.length > 0 ? fileList[0].url || fileList[0].response?.url : null;
        console.log('URL ảnh:', uploadedImage);

        // Ở đây bạn sẽ gọi API để gửi dữ liệu cập nhật lên server
        message.success('Cập nhật khóa học thành công!');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Lỗi khi gửi form:', errorInfo);
        message.error('Vui lòng kiểm tra lại thông tin nhập liệu.');
    };

    // Hàm xử lý khi file được chọn/thay đổi
    const handleFileChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    // Hàm xử lý trước khi upload (ngăn Ant Design tự động upload)
    const beforeUpload = () => false;

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('page-header')}>Chỉnh sửa thông tin khóa học</h4>
            <div className={cx('form-container')}>
                <Spin spinning={loading} tip="Đang tải thông tin khóa học...">
                    <Form
                        form={form}
                        name="editCourse"
                        layout="vertical"
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
                            // Không cần valuePropName và getValueFromEvent nếu bạn quản lý fileList bằng state riêng
                            // Thay vào đó, chúng ta sẽ đọc fileList từ state để gửi đi
                        >
                            <Upload
                                name="courseImage"
                                listType="picture"
                                maxCount={1}
                                fileList={fileList}
                                onChange={handleFileChange}
                                beforeUpload={beforeUpload}
                            >
                                <Button icon={<UploadOutlined />}>Thay đổi ảnh</Button>
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
                            rules={[{ type: 'number', min: 0, max: 100, message: 'Giảm giá phải từ 0 đến 100!' }]}
                        >
                            <InputNumber
                                min={0}
                                max={100}
                                style={{ width: '100%' }}
                                placeholder="Nhập phần trăm giảm giá"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Giá bán (VNĐ)"
                            name="sellingPrice"
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
                        >
                            <Select placeholder="Chọn trạng thái khóa học">
                                <Option value="Công khai">Công khai</Option>
                                <Option value="Bản nháp">Bản nháp</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={cx('submit-button')}>
                                Cập nhật khóa học
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </div>
    );
}

export default EditCourse;
