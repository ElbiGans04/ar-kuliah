import About from '../views/about';
import Ar from '../views/Ar';
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
        options: {},
    },
    {
        name: 'Ar',
        component: Ar,
        options: {},
    },
];


export default routes;
