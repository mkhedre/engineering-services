import {
  Box,
  Container,
  Group,
  Indicator,
  Paper,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import URLS from '../../utils/urls';
import OfferCard from './OfferCard';

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
          {/* color="red" position="top-end" size={20} withBorder */}
          <Indicator>
            <Text style={{ width: 'fit-content' }}>
              {trans('officesOffers')}
            </Text>
          </Indicator>
          {data.map((item, index) => (
            <OfferCard {...item} key={index} />
          ))}
        </Paper>
      </Container>
    </>
  );
}

export default PriceOfferPage;
