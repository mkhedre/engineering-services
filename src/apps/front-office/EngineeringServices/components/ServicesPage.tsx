import { Col, Container, Grid } from '@mantine/core';
import MainPagination from 'design-system/components/Pagination';
import NewSection from 'design-system/components/Sections/NewSection';
import serv3 from 'shared/assets/images/services/Mask Group 16.png';
import serv4 from 'shared/assets/images/services/Mask Group 17.png';
import ServiceCard from '../../home/components/EngineeringServices/ServiceCard';
import URLS from '../../utils/urls';
const data = [
  {
    img: serv3,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
  {
    img: serv4,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
  {
    img: serv3,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
  {
    img: serv4,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
  {
    img: serv3,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
  {
    img: serv4,
    head: 'حساب كميات المواد',
    text: 'ترغب بتحقيق كافة أهدافك في المشروع بأمان وجودة؟ اسند الينا مهمة إدارته؛ نضمن لك أنسب جودة مع متابعة مستمرة والتزام كامل بمدة التنفيذ!',
  },
];
const ServicesPage = () => {
  return (
    <NewSection
      helmetTitle="engineeringServices"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'engineeringServices', value: URLS.engineeringServices },
      ]}
      title="engineeringServices"
      titleOrder={2}
      subtitle="browseSections"
    >
      <Container size="lg">
        <Grid mt={10} mb={50}>
          {data.map(({ img, head, text }, index) => (
            <Col lg={4} sm={6}>
              <ServiceCard
                id={index}
                head={head}
                key={index}
                img={img}
                text={text}
              />
            </Col>
          ))}
        </Grid>
      </Container>
      <MainPagination />
    </NewSection>
  );
};

export default ServicesPage;
