import React from 'react';
import { Table, Button, Space, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './ManageUser.module.scss';
import InputSearchComponent from '../../components/InputSearchComponent/InputSearchComponent';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function showUser() {
    const data = [
        {
            key: '1',
            stt: 1,
            fullName: 'Nguyễn Văn A',
            dob: '1990-01-15',
            email: 'vana@example.com',
            tel: '0912345678',
            password: '******', // Không nên hiển thị mật khẩu thực tế
            status: 'Kích hoạt',
        },
        {
            key: '2',
            stt: 2,
            fullName: 'Trần Thị B',
            dob: '1992-05-20',
            email: 'thib@example.com',
            tel: '0987654321',
            password: '******',
            status: 'Chưa kích hoạt',
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
            title: 'Họ và tên',
            dataIndex: 'fullName',
            key: 'fullName',
            sorter: (a, b) => a.fullName.localeCompare(b.fullName),
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Tel',
            dataIndex: 'tel',
            key: 'tel',
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = '';
                let text = '';
                if (status === 'Kích hoạt') {
                    color = 'green';
                    text = 'Kích hoạt';
                } else {
                    // Chưa kích hoạt
                    color = 'red';
                    text = 'Chưa kích hoạt';
                }
                return (
                    <Tag color={color} key={status}>
                        {text}
                    </Tag>
                );
            },
            filters: [
                // Thêm bộ lọc cho cột trạng thái
                { text: 'Kích hoạt', value: 'Kích hoạt' },
                { text: 'Chưa kích hoạt', value: 'Chưa kích hoạt' },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Chức năng',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Link to="/manage/editUser">
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => console.log('Sửa người dùng:', record.fullName)}
                            className={cx('action-button', 'edit-button')}
                        >
                            Sửa
                        </Button>
                    </Link>
                    <Button
                        type="danger" // Hoặc type="primary" danger nếu bạn dùng Ant Design v5+
                        icon={<DeleteOutlined />}
                        onClick={() => console.log('Xóa người dùng:', record.fullName)}
                        className={cx('action-button', 'delete-button')}
                    >
                        Xóa
                    </Button>
                </Space>
            ),
            width: 200, // Đặt chiều rộng cho cột chức năng
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {/* Phần header - Có thể thêm tiêu đề hoặc các nút thêm mới ở đây */}
            <h4 className={cx('page-header')}>Quản lý người dùng</h4>
            <div className={cx('feature-container')}>
                <InputSearchComponent
                    widthInput={300}
                    border="1px solid #ddd"
                    placeholderInput="Tìm kiếm khóa học, tin tức, bài viết,..."
                />

                <div>
                    <Link to="/manage/createUser">Thêm</Link>
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

export default showUser;
