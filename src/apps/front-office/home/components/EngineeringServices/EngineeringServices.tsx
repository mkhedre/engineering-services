import { Center, Col, Container, Grid } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import Heading from 'design-system/components/Heading';
import serv3 from 'shared/assets/images/services/Mask Group 16.png';
import serv4 from 'shared/assets/images/services/Mask Group 17.png';
import URLS from '../../../utils/urls';
import ServiceCard from './ServiceCard';
import { CustomWrapper } from './Styles';

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
const EngineeringServices = () => {
  return (
    <CustomWrapper>
      <Heading title={trans('EngineeringServices')} badge="ok" />
      <Container size="lg">
        <Grid>
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
        <Center py={40}>
          <Link
            to={URLS.engineeringServices}
            style={{ textDecoration: 'none' }}
          >
            <Button text="moreServices" variant="secondary" />
          </Link>
        </Center>
      </Container>
    </CustomWrapper>
  );
};

export default EngineeringServices;
