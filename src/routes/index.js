import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import LessonPage from '../pages/LessonPage/LessonPage';
import createUser from '../pages/ManageUser/createUser';
import editUser from '../pages/ManageUser/editUser';
import showUser from '../pages/ManageUser/showUser';
import ShowCourse from '../pages/ManageCourse/showCourse';
import CreateCourse from '../pages/ManageCourse/createCourse';
import EditCourse from '../pages/ManageCourse/editCourse';

// General application routes
export const generalRoutes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
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
        path: '/lesson',
        page: LessonPage,
        isShowHeader: false,
    },
];

// Management routes
export const manageRoutes = [
    {
        path: '/manage/showUser',
        page: showUser,
        isManageRoute: true,
    },
    {
        path: '/manage/createUser',
        page: createUser,
        isManageRoute: true,
    },
    {
        path: '/manage/editUser',
        page: editUser,
        isManageRoute: true,
    },
    {
        path: '/manage/showCourse',
        page: ShowCourse,
        isManageRoute: true,
    },
    {
        path: '/manage/createCourse',
        page: CreateCourse,
        isManageRoute: true,
    },
    {
        path: '/manage/editCourse',
        page: EditCourse,
        isManageRoute: true,
    },
];

// Routes tổng
export const routes = [
    ...generalRoutes,
    ...manageRoutes,
    {
        path: '*',
        // page: NotFoundPage,
        isShowHeader: false,
    },
];
