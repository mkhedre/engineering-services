import NewPage from 'design-system/components/Sections/NewPage';
import URLS from '../../utils/urls';

export const TermsConditions = () => (
  <NewPage
    page="termsConditions"
    content="termsConditions more"
    links={[
      { label: 'home', value: URLS.home },
      { label: 'termsConditions', value: URLS.termsConditions },
    ]}
  />
);
