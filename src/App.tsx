import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './Routes';

function App() {
    const auth = true;
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.page;
                    const Layout = route.layout;
                    const navigate = () => {
                        if (!auth && route.protected) {
                            return <Navigate to="/" />;
                        }
                        return <></>;
                    };
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <>
                                    <Layout>
                                        {navigate()}
                                        <Page />
                                    </Layout>
                                </>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
