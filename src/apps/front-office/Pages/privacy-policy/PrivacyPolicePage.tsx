import NewPage from 'design-system/components/Sections/NewPage';
import URLS from '../../utils/urls';

export const PrivacyPolicePage = () => (
  <NewPage
    page="privacyPolice"
    content="privacy policy"
    links={[
      { label: 'home', value: URLS.home },
      { label: 'privacyPolice', value: URLS.privacyPolicy },
    ]}
  />
);
