import { publicRoutes } from 'app/utils/router';
import URLS from '../utils/urls';
import SallesPage from './modules/SallesPage/SallesPage';

publicRoutes([
  {
    path: URLS.orders,
    component: SallesPage,
  },
]);
