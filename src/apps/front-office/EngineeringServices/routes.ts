import { publicRoutes } from '../utils/router';
import URLS from '../utils/urls';
import ServicesPage from './components/ServicesPage';

publicRoutes([
  {
    path: URLS.engineeringServices,
    component: ServicesPage,
  },
]);

// guardedRoutes([
//     {

//     }
// ])
