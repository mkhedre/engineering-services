import {
  Container,
  Divider,
  Group,
  Image,
  Indicator,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { current } from '@mongez/react';
import { navigateTo } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import URLS from '../../../utils/urls';
import Comments from './comments/Comments';
import OfficePackage from './officePackages/OfficePackage';
import OfficeService from './officeServices/OfficeService';

const Office = () => {
  return (
    <NewSection
      helmetTitle="office name"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'engineeringOfficess', value: URLS.engineeringOfficess.root },
        { label: 'office name', value: URLS.engineeringOfficess.viewRoute },
      ]}
    >
      <Container size="lg">
        <Group
          position="apart"
          p={20}
          sx={{
            backgroundColor: '#F9FAFB',
            ':hover': {
              backgroundColor: '#EAF5FA',
            },
          }}
        >
          <Group>
            <Indicator
              label="4.9"
              size={30}
              color={theme.colors.SECONDARY.main}
              withBorder
              position={
                current('localeCode') === 'ar' ? 'middle-start' : 'middle-end'
              }
            >
              <ThemeIcon size={70} color="#fff">
                <Image src={Layer} height={25} width="fit-content" />
              </ThemeIcon>
            </Indicator>
            <div>
              <Text weight={350}>مكتب الهندسة المعمارية</Text>
              <Text size="sm">التصميم الهندسي</Text>
            </div>
          </Group>
          <Group position="apart" style={{ flex: 0.6 }}>
            <Button
              text={trans('address')}
              Icon={Icons.Location}
              variant="link"
              textColor={theme.colors.PRIMARY.main}
            />
            <Divider orientation="vertical" />
            <div>
              <Text size="sm">10.9K</Text>
              <Text size="sm">{trans('servicesNum')}</Text>
            </div>
            <Button
              variant="burble"
              text={trans('askForPrice')}
              onClick={() => navigateTo('/price-offer')}
            />
          </Group>
        </Group>
      </Container>
      <OfficeService />
      <OfficePackage />
      <Comments />
    </NewSection>
  );
};

export default Office;
