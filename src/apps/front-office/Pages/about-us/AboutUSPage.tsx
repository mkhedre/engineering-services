import NewPage from 'design-system/components/Sections/NewPage';
import URLS from '../../utils/urls';

export const AboutUsPage = () => (
  <NewPage
    page="aboutUs"
    content="more about us"
    align="center"
    links={[
      { label: 'home', value: URLS.home },
      { label: 'aboutUs', value: URLS.aboutUs },
    ]}
  />
);
