import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ProductPage from '../pages/ProductPage/ProductPage';

const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/login',
        page: LoginPage,
    },
    {
        path: '/register',
        page: RegisterPage,
    },
    {
        path: '/product',
        page: ProductPage,
    },
];

export default routes;
