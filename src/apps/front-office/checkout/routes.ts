import { publicRoutes } from 'app/utils/router';
import URLS from 'app/utils/urls';
import PaymentPage from './modules/PaymentPage/PaymentPage';

publicRoutes([
  {
    path: URLS.pay.checkout,
    component: PaymentPage,
  },
  // {
  //   path: URLS.pay.ePay,
  //   component: EPayPage,
  // },
  // {
  //   path: URLS.pay.bankAccounts,
  //   component: BankAccounts,
  // },
  // {
  //   path: URLS.pay.bankTransfer,
  //   component: BankTransfer,
  // },
  // {
  //   path: URLS.pay.cart,
  //   component: CartPage,
  // },
  // {
  //   path: URLS.pay.paymentSuccess,
  //   component: PaymentSuccess,
  // },
]);
