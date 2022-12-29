import { Col, Container, createStyles, Grid } from '@mantine/core';
import { trans } from '@mongez/localization';
import Heading from 'design-system/components/Heading';
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
import URLS from '../../../utils/urls';
import { MainWrapper } from '../HomePage/style';
import CategoryCard from './CategoryCard';

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
];
const useStyles = createStyles((theme) => ({
  card: {},
}));

const Categories = () => {
  const { classes } = useStyles();
  return (
    <MainWrapper>
      <Heading
        title={trans('categoriesSections')}
        button={{
          text: 'moreCategories',
          href: URLS.categories,
        }}
      />
      <Container size="xl">
        <Grid columns={20}>
          {data.map(({ img, text }, index) => (
            <Col lg={4} md={5} xs={10}>
              <CategoryCard key={index} img={img} text={text} />
            </Col>
          ))}
        </Grid>
      </Container>
    </MainWrapper>
  );
};

export default Categories;
