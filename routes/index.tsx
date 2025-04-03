import About from 'views/about';
import Ar from 'views/Ar';
import Help from 'views/help';
import Home from 'views/home';
import Materi from 'views/Materi';
import MateriDetail from 'views/materi/detail';
import Quiz from 'views/quiz';

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
      title: 'Tentang Aplikasi',
    },
  },
  {
    name: 'Help',
    component: Help,
    options: {
      title: 'Panduan Aplikasi',
    },
  },
  {
    name: 'Quiz',
    component: Quiz,
    options: {
      title: 'Quis Aplikasi',
    },
  },
  {
    name: 'Materi',
    component: Materi,
    options: {
      title: 'Materi',
    },
  },
  {
    name: 'MateriDetail',
    component: MateriDetail,
    options: {
      title: 'Pembahasan',
    },
  },
  {
    name: 'Ar',
    component: Ar,
    options: {},
  },
];

export default routes;
