import ResetPassword from '../containers/Auth/ResetPassword';
import Signin from '../containers/Auth/Signin';
import TablePage from '../containers/TablePage';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: TablePage,
  },
  {
    path: '/signin',
    exact: true,
    component: Signin,
  },
  {
    path: '/password-reset',
    exact: true,
    component: ResetPassword,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '',
    exact: false,
    component: NotFound,
  },
];
