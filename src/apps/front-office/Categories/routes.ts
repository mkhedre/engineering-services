import { publicRoutes } from '../utils/router';
import URLS from '../utils/urls';
import CategoriesPage from './components/CategoriesPage';

publicRoutes([
  {
    path: URLS.categories,
    component: CategoriesPage,
  },
]);

// guardedRoutes([
//     {

//     }
// ])
