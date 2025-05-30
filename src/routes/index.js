import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ProductPage from '../pages/ProductPage/ProductPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true, // Hiện thị HeaderComponent
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeader: false,
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowHeader: false,
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        // URL không tồn tại
        path: '*',
        // page: NotFoundPage,
    },
];
