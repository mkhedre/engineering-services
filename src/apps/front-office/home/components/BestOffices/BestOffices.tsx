import {
  ActionIcon,
  Col,
  Container,
  Grid,
  MantineNumberSize,
  MantineSize,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import Heading from 'design-system/components/Heading';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import URLS from '../../../utils/urls';
import { MainWrapper } from '../HomePage/style';
import OfficeCard from './OfficeCard';

export interface MyCompParams {
  radius: MantineNumberSize;
  color: MantineSize;
}

const data = [
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
];
const Star = () => (
  <ActionIcon size={8} radius="sm" variant="transparent">
    <img src={Icons.Star} />
  </ActionIcon>
);

const BestOffices = () => {
  return (
    <MainWrapper>
      <Heading
        title={trans('bestOffices')}
        button={{ text: 'moreOfficces', href: URLS.engineeringOfficess.root }}
      />
      <Container size="xl">
        <Grid>
          {data.map(({ image, address, rate, text }, index) => (
            <Col lg={3} md={4} xs={6}>
              <OfficeCard
                key={index}
                id={index}
                img={image}
                address={address}
                rate={rate}
                text={text}
                icon={<Star />}
              />
            </Col>
          ))}
        </Grid>
      </Container>
    </MainWrapper>
  );
};

export default BestOffices;

// const onError = (error: RuleResponse, formInput: FormControl) => {
//   console.log(error);
//   console.log(formInput);
// };
