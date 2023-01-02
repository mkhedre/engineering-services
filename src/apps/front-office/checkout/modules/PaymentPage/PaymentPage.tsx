import {
  Box,
  Card,
  Col,
  Container,
  Grid,
  Group,
  Paper,
  Switch,
  Text,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import NewSection from 'design-system/components/Sections/NewSection';
import Subheading from 'design-system/components/Subheading/Subheading';
import theme from 'design-system/theme';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import URLS from '../../../utils/urls';
import BankInfo from '../../components/BankInfo/BankInfo';
import PayButton from './PayButton';

const data = [
  {
    icon: Icons.Visa,
  },
  {
    icon: Icons.pay3,
  },
  {
    icon: Icons.Mada,
  },
];

function PaymentPage() {
  const [haveMoney, setMoney] = useState(false);
  const [isBank, setBank] = useState(true);

  return (
    <NewSection
      helmetTitle="checkout"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'pay', value: URLS.pay.checkout },
      ]}
    >
      <Container size="lg">
        <Subheading icon={Icons.EmptyWallet} text="Availablepayment" />
        <Grid gutter={40}>
          <Col lg={5} xs={6}>
            <Paper withBorder p={15} radius="md" mb={20}>
              <Group position="apart">
                <Group spacing={5} position="center">
                  <Switch onClick={() => setMoney(true)} />
                  <Text>{trans('Walletbalance')}</Text>
                </Group>
                <Text size="sm" color="dimmed">
                  500sr
                </Text>
              </Group>
            </Paper>
            {data.map(({ icon }, index) => (
              <PayButton icon={icon} key={index} />
            ))}
            <PayButton icon={Icons.Bank} setBank={setBank} isBank={isBank} />
            {isBank && <BankInfo />}
          </Col>
          <Col lg={3.5} xs={6} offsetLg={3.5}>
            <Card withBorder sx={{ borderColor: '#F5F5F5' }}>
              <Text py={15}>{trans('totalServicesPrice')}</Text>
              <Group position="apart">
                <Text py={15} color="dimmed">
                  {trans('coupon')}
                </Text>
                <Text py={15} color="green">
                  323 {trans('sr')}
                </Text>
              </Group>
              <Group position="apart">
                <Text py={15} color="dimmed">
                  {trans('tax')} 14%
                </Text>
                <Text py={15}>323 {trans('sr')}</Text>
              </Group>
              <Group position="apart">
                <Text py={15} color="dimmed">
                  {trans('wallet')}
                </Text>
                <Text py={15} color="red">
                  -323 {trans('sr')}
                </Text>
              </Group>
              <Group position="apart" mb={30}>
                <Text py={15} color="dimmed">
                  {trans('totalPrice')}
                </Text>
                <Text py={15}>323 {trans('sr')}</Text>
              </Group>
              <Group bg="#F1F9FC" position="apart" p={15}>
                <Box>
                  <Text weight={200}>{trans('withTax')}</Text>
                  <Text c={theme.colors.SUCCESS}>
                    {trans('Requiredpayment')}
                  </Text>
                </Box>
                <Text c={theme.colors.SUCCESS}>350 {trans('sr')}</Text>
              </Group>
            </Card>
          </Col>
        </Grid>
      </Container>
    </NewSection>
  );
}

export default PaymentPage;
