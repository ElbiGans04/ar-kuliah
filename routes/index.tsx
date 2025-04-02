import About from '../views/about';
import Ar from '../views/Ar';
import Help from '../views/help';
import Home from '../views/home';

const routes = [
    {
        name: 'Home',
        component: Home,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'About',
        component: About,
        options: {
            title: 'Tentang Aplikasi'
        },
    },
    {
        name: 'Help',
        component: Help,
        options: {
            title: 'Panduan Aplikasi'
        },
    },
    {
        name: 'Ar',
        component: Ar,
        options: {},
    },
];


export default routes;
