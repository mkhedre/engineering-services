import { publicRoutes } from 'app/utils/router';
import URLS from 'app/utils/urls';
import { AboutUsPage } from './about-us/AboutUSPage';
import { ContactUsPage } from './contact-us/ContactUS';
import { PrivacyPolicePage } from './privacy-policy/PrivacyPolicePage';
import { TermsConditions } from './Terms-conditions/TermsConditionsPage';

publicRoutes([
  {
    path: URLS.aboutUs,
    component: AboutUsPage,
  },
  {
    path: URLS.privacyPolicy,
    component: PrivacyPolicePage,
  },

  {
    path: URLS.termsConditions,
    component: TermsConditions,
  },
  {
    path: URLS.contactUs,
    component: ContactUsPage,
  },
]);
