import { publicRoutes } from '../utils/router';
import URLS from '../utils/urls';
import Office from './components/engineeringOffice/Office';
import OfficessPage from './components/OfficessPage';

publicRoutes([
  {
    path: URLS.engineeringOfficess.root,
    component: OfficessPage,
  },
  {
    path: URLS.engineeringOfficess.viewRoute,
    component: Office,
  },
]);

// guardedRoutes([
//     {

//     }
// ])
