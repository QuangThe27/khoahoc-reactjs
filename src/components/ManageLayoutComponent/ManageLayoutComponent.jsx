import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './ManageLayoutComponent.module.scss';
import '../DefaultComponent/DefaultComponent.scss';
import { Link } from 'react-router-dom';

const { Sider, Content } = Layout;
const cx = classNames.bind(styles);

function ManageLayoutComponent({ children }) {
    return (
        <Layout className={cx('manage-layout-wrapper')}>
            <Sider width={250} className={cx('sider')}>
                <div className={cx('logo')}>Quản lý</div>
                <Menu
                    theme="dark" // Giao diện menu tối
                    mode="inline" // Menu dọc
                    defaultSelectedKeys={['1']} // Mặc định chọn item đầu tiên
                    className={cx('menu')}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/manage/showUser">Quản lý người dùng</Link>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Quản lý khóa học
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className={cx('site-layout')}>
                <Content className={cx('content')}>{children}</Content>
            </Layout>
        </Layout>
    );
}

export default ManageLayoutComponent;
