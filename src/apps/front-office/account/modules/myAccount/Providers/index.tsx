import {
  Anchor,
  Box,
  Container,
  Grid,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import LogoIcon from 'shared/assets/svgs/logo/LogoIcon';
import { CustomButton } from '../components/styles';
import Line from '../components/Timeline';

export default function Providers() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <Grid sx={{ overflow: 'hidden' }}>
      <Grid.Col lg={4} bg="#F6F9FA" h="100vh" p={50}>
        <Link to="/">
          <LogoIcon size={118} />
        </Link>
        <Line active={active} />
      </Grid.Col>
      <Grid.Col lg={8}>
        <Container mt={100} size="sm" h="100%">
          <Group>
            <img src={Icons.FlashIcon} />
            <Text>{trans('joinUs')}</Text>
          </Group>
          <Stack align="center" justify="center" top={100} pos="relative">
            <Text>{trans('chooseAccountType')}</Text>
            <Text size="sm" color="dimmed">
              {trans('needMoreInfo')}
            </Text>
            <Anchor component={Link} to="pages" size="sm">
              {trans('FAQpage')}
            </Anchor>
            {/* <Link to="pages">{trans('FAQpage')}</Link> */}
            <CustomButton>
              <Group>
                <img src={Icons.Usr} alt="user" width={40} />
                <Box w={400}>
                  <Text>{trans('personProvider')}</Text>
                  <Text size="xs" color="dimmed">
                    {trans('createPersonAccount')}
                  </Text>
                </Box>
              </Group>
            </CustomButton>
            <CustomButton>
              <Group>
                <img src={Icons.MainIcon} alt="user" width={40} />
                <Box w={400}>
                  <Text>{trans('companyProvider')}</Text>
                  <Text size="sm" color="dimmed">
                    {trans('createCompanyAccount')}
                  </Text>
                </Box>
              </Group>
            </CustomButton>
            <Group position="apart" w="73%">
              <Button text={trans('next')} onClick={nextStep} />
              <Button
                text={trans('prev')}
                variant="secondary"
                onClick={prevStep}
              />
            </Group>
          </Stack>
        </Container>
      </Grid.Col>
    </Grid>
  );
}
