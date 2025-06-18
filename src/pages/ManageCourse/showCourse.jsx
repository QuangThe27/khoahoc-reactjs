import React from 'react';
import { Table, Button, Space, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './ManageCourse.module.scss'; // Assuming you'll reuse the same CSS module for general layout
import InputSearchComponent from '../../components/InputSearchComponent/InputSearchComponent';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShowCourse() {
    const data = [
        {
            key: '1',
            stt: 1,
            courseName: 'Khóa học React cơ bản',
            author: 'Nguyễn Văn A',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
            originalPrice: 1000000,
            discount: 10, // 10%
            sellingPrice: 900000,
            description: 'Khóa học dành cho người mới bắt đầu với React.',
            status: 'Công khai',
        },
        {
            key: '2',
            stt: 2,
            courseName: 'Khóa học Node.js nâng cao',
            author: 'Trần Thị B',
            image: 'url_to_node_image.jpg',
            originalPrice: 1500000,
            discount: 0,
            sellingPrice: 1500000,
            description: 'Đi sâu vào kiến thức Node.js và xây dựng API RESTful.',
            status: 'Bản nháp',
        },
        {
            key: '3',
            stt: 3,
            courseName: 'Khóa học Thiết kế UI/UX',
            author: 'Lê Văn C',
            image: 'url_to_uiux_image.jpg',
            originalPrice: 800000,
            discount: 20, // 20%
            sellingPrice: 640000,
            description: 'Học cách tạo ra giao diện người dùng thân thiện và trải nghiệm người dùng tuyệt vời.',
            status: 'Công khai',
        },
    ];

    // Định nghĩa các cột cho bảng
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: 70,
        },
        {
            title: 'Khóa học',
            dataIndex: 'courseName',
            key: 'courseName',
            sorter: (a, b) => a.courseName.localeCompare(b.courseName),
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="Course" style={{ width: '50px', height: 'auto' }} />,
        },
        {
            title: 'Giá gốc',
            dataIndex: 'originalPrice',
            key: 'originalPrice',
            render: (price) => `${price.toLocaleString('vi-VN')} VNĐ`,
            sorter: (a, b) => a.originalPrice - b.originalPrice,
        },
        {
            title: 'Giảm giá',
            dataIndex: 'discount',
            key: 'discount',
            render: (discount) => `${discount}%`,
        },
        {
            title: 'Giá bán',
            dataIndex: 'sellingPrice',
            key: 'sellingPrice',
            render: (price) => `${price.toLocaleString('vi-VN')} VNĐ`,
            sorter: (a, b) => a.sellingPrice - b.sellingPrice,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true, // Hiển thị dấu ba chấm nếu mô tả quá dài
            width: 250,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = '';
                let text = '';
                if (status === 'Công khai') {
                    color = 'green';
                    text = 'Công khai';
                } else {
                    color = 'volcano'; // Hoặc 'red'
                    text = 'Bản nháp';
                }
                return (
                    <Tag color={color} key={status}>
                        {text}
                    </Tag>
                );
            },
            filters: [
                { text: 'Công khai', value: 'Công khai' },
                { text: 'Bản nháp', value: 'Bản nháp' },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Chức năng',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Link to="/manage/editCourse">
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => console.log('Sửa khóa học:', record.courseName)}
                            className={cx('action-button', 'edit-button')}
                        >
                            Sửa
                        </Button>
                    </Link>
                    <Button
                        type="danger"
                        icon={<DeleteOutlined />}
                        onClick={() => console.log('Xóa khóa học:', record.courseName)}
                        className={cx('action-button', 'delete-button')}
                    >
                        Xóa
                    </Button>
                </Space>
            ),
            width: 200,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('page-header')}>Quản lý khóa học</h4>
            <div className={cx('feature-container')}>
                <InputSearchComponent
                    widthInput={300}
                    border="1px solid #ddd"
                    placeholderInput="Tìm kiếm khóa học, tin tức, bài viết,..."
                />

                <div>
                    <Link to="/manage/CreateCourse">Thêm</Link>
                </div>
            </div>
            <div className={cx('table-container')}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: 'max-content' }}
                />
            </div>
        </div>
    );
}

export default ShowCourse;
