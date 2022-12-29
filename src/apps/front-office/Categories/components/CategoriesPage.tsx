import { Col, Container, Grid, Paper } from '@mantine/core';
import MainPagination from 'design-system/components/Pagination';
import NewSection from 'design-system/components/Sections/NewSection';
import cat5 from 'shared/assets/images/categories/shutterstock_1447702037.png';
import cat6 from 'shared/assets/images/categories/shutterstock_1902875932.png';
import cat7 from 'shared/assets/images/categories/shutterstock_1907180365.png';
import cat8 from 'shared/assets/images/categories/shutterstock_1929872402.png';
import cat9 from 'shared/assets/images/categories/shutterstock_1934637761.png';
import cat10 from 'shared/assets/images/categories/shutterstock_1935737098.png';
import cat1 from 'shared/assets/images/categories/shutterstock_382666645.png';
import cat2 from 'shared/assets/images/categories/shutterstock_634812566.png';
import cat3 from 'shared/assets/images/categories/shutterstock_683476705.png';
import cat4 from 'shared/assets/images/categories/shutterstock_763498477.png';
import CategoryCard from '../../home/components/Categories/CategoryCard';
import URLS from '../../utils/urls';
const data = [
  {
    img: cat1,
    text: 'emarra',
  },
  {
    img: cat2,
    text: 'emarra',
  },
  {
    img: cat3,
    text: 'emarra',
  },
  {
    img: cat4,
    text: 'emarra',
  },
  {
    img: cat5,
    text: 'emarra',
  },
  {
    img: cat6,
    text: 'emarra',
  },
  {
    img: cat7,
    text: 'emarra',
  },
  {
    img: cat8,
    text: 'emarra',
  },
  {
    img: cat9,
    text: 'emarra',
  },
  {
    img: cat10,
    text: 'emarra',
  },
  {
    img: cat1,
    text: 'emarra',
  },
  {
    img: cat2,
    text: 'emarra',
  },
  {
    img: cat3,
    text: 'emarra',
  },
  {
    img: cat4,
    text: 'emarra',
  },
  {
    img: cat5,
    text: 'emarra',
  },
];
const CategoriesPage = () => {
  return (
    <NewSection
      helmetTitle="categories"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'categories', value: URLS.categories },
      ]}
      title="StudioPlatformSections"
      titleOrder={2}
      subtitle="browseSections"
    >
      <Container size="lg">
        <Grid columns={20} mt={30}>
          {data.map(({ img, text }, index) => (
            <Col lg={4} md={5} xs={10}>
              <CategoryCard key={index} img={img} text={text} />
            </Col>
          ))}
        </Grid>
        <Paper my={30}>
          <MainPagination />
        </Paper>
      </Container>
    </NewSection>
  );
};

export default CategoriesPage;
