import { publicRoutes } from 'app/utils/router';
import URLS from '../utils/urls';
import PriceOfferPage from './components/PriceOfferPage';

publicRoutes([
  {
    path: URLS.priceOffer,
    component: PriceOfferPage,
  },
]);
