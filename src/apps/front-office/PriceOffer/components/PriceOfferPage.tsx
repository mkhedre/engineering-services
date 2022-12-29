import {
  Box,
  Container,
  Group,
  Image,
  Indicator,
  Paper,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import Button from 'design-system/components/Button';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import URLS from '../../utils/urls';

const data = [
  {
    img: Layer,
    rating: '4.9',
    name: 'مكتب الهندسة المعماريه',
    subtitle: 'التصميم الهندسية',
    price: '190',
    withConditions: false,
  },
  {
    img: Layer,
    rating: '4.9',
    name: 'مكتب الهندسة المعماريه',
    subtitle: 'التصميم الهندسية',
    price: '190',
    withConditions: true,
  },
  {
    img: Layer,
    rating: '4.9',
    name: 'مكتب الهندسة المعماريه',
    subtitle: 'التصميم الهندسية',
    price: '190',
    withConditions: false,
  },
  {
    img: Layer,
    rating: '4.9',
    name: 'مكتب الهندسة المعماريه',
    subtitle: 'التصميم الهندسية',
    price: '190',
    withConditions: false,
  },
];
function PriceOfferPage() {
  return (
    <>
      <NewSection
        helmetTitle="priceOffer"
        links={[
          { label: 'home', value: URLS.home },
          { label: 'priceOffer', value: URLS.priceOffer },
        ]}
        title="priceOffer"
        titleOrder={3}
        subtitle="addYourOrderAndGetPrice"
      >
        <Container size="lg">
          <Paper mt={50} withBorder p={40}>
            <Group align="inherit">
              <ThemeIcon variant="light" color="#EEEFF1" size={60}>
                <img src={Icons.ordersPrice2} />
              </ThemeIcon>
              <Box sx={{ flex: 0.8 }}>
                <Text>{trans('تصميم واجهة كلاسيك لمنزل مساحة 1400')}</Text>
                <Text color="dimmed" size="sm">
                  {trans('تصميم / تصميم معماري وديكور')}
                </Text>
                <Text color="dimmed" mt={30} size="sm">
                  {trans(
                    'السلام عليكم ورحمة الله وبركاته احتاج تصميم واجهة كلاسيك لمنزل مساحة الأرض 312 م مع السور والباب الرئيسي ليتناسب مع الواجهه وشرط ان تكون غير مكلفة التنفيذ .. ذات طابع كلاسيكي فخم ..ألوان حواف الشبابيك ابيض شبيهه بالصور المرفقة لدي ابعاد الواجهة والمخطط كامل'
                  )}
                </Text>
              </Box>
            </Group>
          </Paper>
        </Container>
      </NewSection>
      <Container size="lg">
        <Paper
          sx={{
            backgroundColor: theme.colors.background,
          }}
          mt={50}
        >
          <Text>{trans('officesOffers')}</Text>
          {data.map(
            ({ img, name, price, rating, subtitle, withConditions }, index) => (
              <Paper
                key={index}
                withBorder
                p={10}
                my={20}
                sx={{ backgroundColor: '#fff', borderColler: '#F6F7F7' }}
              >
                <Group position="apart">
                  <Group position="apart">
                    <Indicator
                      inline
                      label={rating}
                      size={30}
                      color={theme.colors.SECONDARY.main}
                      withBorder
                    >
                      <ThemeIcon size={70} color="#fff">
                        <Image src={Layer} height={25} width="fit-content" />
                      </ThemeIcon>
                    </Indicator>
                    <Box>
                      <Text>{name}</Text>
                      <Text size="sm">{subtitle}</Text>
                    </Box>
                  </Group>
                  <Group>
                    <Button
                      text={`${trans(`priceIs`)} ${price} ${trans('sr')}`}
                      variant="transparent"
                    />
                    <Button text={trans('acceptOffer')} variant="secondary" />
                  </Group>
                </Group>
              </Paper>
            )
          )}
        </Paper>
      </Container>
    </>
  );
}

export default PriceOfferPage;
