import { DefaultLayout } from '~/Layouts';
import * as page from '~/Pages';

interface IRoute {
    path: string;
    page: any;
    layout: any;
    protected: boolean;
}

const publicRoutes: Array<IRoute> = [
    {
        path: '/',
        page: page.Page1,
        layout: DefaultLayout,
        protected: false,
    },
    {
        path: '/page2',
        page: page.Page2,
        layout: DefaultLayout,
        protected: false,
    },
    {
        path: '/:reg',
        page: page.NotFound,
        layout: DefaultLayout,
        protected: false,
    },
];
const privateRoutes = [
    {
        path: '/page3',
        page: page.Page3private,
        layout: DefaultLayout,
        protected: true,
    },
];
const routes = [...publicRoutes, ...privateRoutes];

export default routes;
