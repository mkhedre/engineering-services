import { Carousel } from '@mantine/carousel';
import {
  Container,
  Group,
  Image,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import Button from 'design-system/components/Button';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import packimg from 'shared/assets/images/packages/Base.png';
import Icons from 'shared/assets/svgs';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import OfficeServiceCard from '../officeServices/OfficeServiceCard';
import { CustomTable, PackageWrapper, Price } from '../styles';
const data = [
  {
    img: packimg,
    title: 'صمم مشروعك معماريا وانشائيا وفق احدث البرامج الهندسية',
    category: 'تصميم / تصميم معماري وديكور',
    price: '3.500 س.ر',
  },
  {
    img: packimg,
    title: 'صمم مشروعك معماريا وانشائيا وفق احدث البرامج الهندسية',
    category: 'تصميم / تصميم معماري وديكور',
    price: '3.500 س.ر',
  },
  {
    img: packimg,
    title: 'صمم مشروعك معماريا وانشائيا وفق احدث البرامج الهندسية',
    category: 'تصميم / تصميم معماري وديكور',
    price: '3.500 س.ر',
  },
  {
    img: packimg,
    title: 'صمم مشروعك معماريا وانشائيا وفق احدث البرامج الهندسية',
    category: 'تصميم / تصميم معماري وديكور',
    price: '3.500 س.ر',
  },
  {
    img: packimg,
    title: 'صمم مشروعك معماريا وانشائيا وفق احدث البرامج الهندسية',
    category: 'تصميم / تصميم معماري وديكور',
    price: '3.500 س.ر',
  },
];

const rows = data.map(({ img, category, price, title }) => (
  <tr>
    <td>
      <Image src={img} width={90} />
    </td>
    <td>
      <div>
        <Text>{title}</Text>
        <Text color="dimmed" size="sm">
          {category}
        </Text>
      </div>
    </td>
    <td style={{ borderRight: '1px solid #F4F4F4' }}>
      <Price>{price}</Price>
    </td>
    <td style={{ borderRight: '1px solid #F4F4F4', paddingRight: '40px' }}>
      <Group>
        <Button text={trans('buyService')} variant="secondary" weight={700} />
        <UnstyledButton>
          <ThemeIcon variant="light" radius="xl" size="xl" color="#EDEDED">
            <img src={Icons.ustyledHeard} />
          </ThemeIcon>
        </UnstyledButton>
      </Group>
    </td>
  </tr>
));

const OfficePackage = () => {
  const { ipadScreen, largeMobileScreen, miniLaptopScreen, tabletScreen } =
    useBreakpoints();
  return (
    <Container size="lg">
      <PackageWrapper>
        <Group spacing={0} mb={40}>
          <SMIcon src={Icons.FlashIcon} />
          <Text size="xl">{trans('engineeringPackages')}</Text>
        </Group>
        {tabletScreen ? (
          <Carousel
            slideSize="25%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
            styles={{
              controls: {},
            }}
          >
            {data.map(({ img, category, price, title }) => (
              <Carousel.Slide
                size={
                  largeMobileScreen
                    ? '100%'
                    : ipadScreen
                    ? '50%'
                    : miniLaptopScreen
                    ? '33.3333%'
                    : '25%'
                }
              >
                <OfficeServiceCard
                  img={img}
                  text={title}
                  price={price}
                  desc={category}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <CustomTable bgcolor="#fff" highlightOnHover>
            <tbody>{rows}</tbody>
          </CustomTable>
        )}
      </PackageWrapper>
    </Container>
  );
};

export default OfficePackage;
