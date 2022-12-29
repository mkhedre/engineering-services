import { publicRoutes } from '../utils/router';
import URLS from '../utils/urls';
import Login from './modules/auth/login/Login';

publicRoutes([
  {
    path: URLS.account.auth.login,
    component: Login,
  },
]);

// guardedRoutes([
//   // {
//   //   path: URLS.account.orders,
//   //   component: Orders,
//   // },
//   // {
//   //   path: URLS.account.profile,
//   //   component: MyAccount,
//   // },
//   // {
//   //   path: URLS.account.editProfile,
//   //   component: EditProfile,
//   // },
//   // {
//   //   path: URLS.account.auth.changePassword,
//   //   component: ChangePasswordPage,
//   // },
// ]);
