import { Container, Grid, Group, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import LogoIcon from 'shared/assets/svgs/logo/LogoIcon';
import mediaQueries from 'shared/constants/mediaQueries';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { serviceProviderAtom } from '../../../atoms';
import AccountType from './AccountType';
import CompanyLine from './companycomponents/CompanyLine';
import EntityInfo from './companycomponents/EntityInfo';
import ForthStep from './companycomponents/ForthStep';
import LastStep from './companycomponents/LastStep';
import ThirdStep from './companycomponents/ThirdStep';
import Personalnfo from './personComponents/Personalnfo';
import Line from './personComponents/PersonLine';
import Qualifications from './personComponents/Qualifications';
import ServicesTimes from './personComponents/ServicesTimes';

const { tablet } = mediaQueries;
export default function Providers() {
  const [activePerson, setPerson] = useState(0);
  const [activeCompany, setCompany] = useState(0);
  const currentProvider = serviceProviderAtom.useValue();
  const { tabletScreen, smallMobileScreen, ipadScreen, largescreen } =
    useBreakpoints();
  const nextStepPerson = () =>
    setPerson((current) => (current < 4 ? current + 1 : current));
  const prevStepPerson = () =>
    setPerson((current) => (current > 0 ? current - 1 : current));

  const nextStepCompany = () =>
    setCompany((current) => (current < 5 ? current + 1 : current));
  const prevStepCompany = () =>
    setCompany((current) => (current > 0 ? current - 1 : current));

  const displayPerson = () => {
    switch (activePerson) {
      case 0:
        return <AccountType />;
      case 1:
        return <Personalnfo />;
      case 2:
        return <Qualifications />;
      case 3:
        return <ServicesTimes />;
    }
  };
  const displayCompany = () => {
    switch (activeCompany) {
      case 0:
        return <AccountType />;
      case 1:
        return <EntityInfo />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <ForthStep />;
      case 4:
        return <LastStep />;
    }
  };
  return (
    <Grid sx={{ overflow: 'hidden' }}>
      <Grid.Col
        lg={4}
        sm={5}
        bg="#F6F9FA"
        h="100vh"
        p={50}
        sx={{ [tablet]: { display: 'none' } }}
      >
        <Link to="/">
          <LogoIcon size={118} />
        </Link>
        {currentProvider === 'person' ? (
          <Line active={activePerson} />
        ) : (
          <CompanyLine active={activeCompany} />
        )}
      </Grid.Col>
      <Grid.Col lg={8} sm={7} bg="#fff">
        {tabletScreen && (
          <Link to="/" style={{ padding: '20px' }}>
            <LogoIcon size={118} />
          </Link>
        )}
        <Container
          mt={100}
          size="sm"
          h="100%"
          sx={{ [tablet]: { marginTop: '40px' } }}
        >
          <Group spacing={2}>
            <img src={Icons.FlashIcon} />
            <Text>{trans('joinUs')}</Text>
          </Group>
          {currentProvider === 'person' ? displayPerson() : displayCompany()}
          <Group position="apart" px={65} pt={20}>
            <Button
              text={
                (currentProvider === 'person' && activePerson === 3) ||
                (currentProvider === 'company' && activeCompany === 4)
                  ? trans('early')
                  : trans('next')
              }
              onClick={
                currentProvider === 'person' ? nextStepPerson : nextStepCompany
              }
            />
            <Button
              text={trans('prev')}
              variant="secondary"
              onClick={
                currentProvider === 'person' ? prevStepPerson : prevStepCompany
              }
            />
          </Group>
        </Container>
      </Grid.Col>
    </Grid>
  );
}
