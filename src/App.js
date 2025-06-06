import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import ManageLayoutComponent from './components/ManageLayoutComponent/ManageLayoutComponent';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        // Xác định layout nào sẽ được sử dụng dựa trên thuộc tính 'isManageRoute'
                        const Layout = route.isManageRoute ? ManageLayoutComponent : DefaultComponent;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout isShowHeader={route.isShowHeader}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
