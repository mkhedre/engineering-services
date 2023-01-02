import { LayoutNoHeaderFooter, publicRoutes } from '../utils/router';
import URLS from '../utils/urls';
import Login from './modules/auth/login/Login';
import SignUp from './modules/auth/SignUp/SignUp';
import Verify from './modules/auth/VerifyCode/Verify';
import CompanyProvider from './modules/myAccount/components/CompanyProvider';
import Providers from './modules/myAccount/Providers';

publicRoutes([
  {
    path: URLS.account.auth.login,
    component: Login,
  },
  {
    path: URLS.account.auth.register,
    component: SignUp,
  },
  {
    path: URLS.account.auth.verifyCode,
    component: Verify,
  },
]);

LayoutNoHeaderFooter([
  {
    path: URLS.account.personProvider,
    component: Providers,
  },
  {
    path: URLS.account.companyProvider,
    component: CompanyProvider,
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
