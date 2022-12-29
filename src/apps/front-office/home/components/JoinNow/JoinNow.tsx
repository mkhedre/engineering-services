import { Col, Container, Grid, Image, Text, Title } from '@mantine/core';
import { trans } from '@mongez/localization';
import Button from 'design-system/components/Button';
import right from 'shared/assets/images/shutterstock_212765824.png';
import { MainWrapper } from '../HomePage/style';
import { Customstack } from './styles';
const JoinNow = () => {
  return (
    <MainWrapper>
      <Container size="xl">
        <Grid gutter={80} align="center" justify="center">
          <Col lg={5} sm={6}>
            <Image src={right} alt="join as a provider" />
          </Col>
          <Col lg={5} sm={6}>
            <Customstack sx={{ maxWidth: '80%' }}>
              <Title>{trans('joinAsOffice')}</Title>
              <Text mb={15}>{trans('hasOportunity')}</Text>
              <Button weight={600} text="joinUsNow" variant="primary" />
            </Customstack>
          </Col>
        </Grid>
      </Container>
    </MainWrapper>
  );
};

export default JoinNow;
