import {
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Input,
  Table,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { navigateTo } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import NewSection from 'design-system/components/Sections/NewSection';
import Subheading from 'design-system/components/Subheading/Subheading';
import theme from 'design-system/theme';
import { useState } from 'react';
import packimg from 'shared/assets/images/packages/Base.png';
import Icons from 'shared/assets/svgs';
import payment from 'shared/assets/svgs/pay/b-300x37.png';
import mediaQueries from 'shared/constants/mediaQueries';
import URLS from '../../../utils/urls';
import { Price } from './style';

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
];
const { tablet, smallmobile } = mediaQueries;
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
    <td
      style={{
        borderRight: '1px solid #F4F4F4',
        paddingRight: '40px',
      }}
    >
      <UnstyledButton>
        <ThemeIcon variant="light" radius="xl" size="xl" color="#EDEDED">
          <img src={Icons.DeleteIcon} />
        </ThemeIcon>
      </UnstyledButton>
    </td>
  </tr>
));

export default function SallesPage() {
  const [hascode, setHasCode] = useState(false);
  return (
    <NewSection
      helmetTitle="myPasket"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'myPasket', value: URLS.orders },
      ]}
    >
      <Container size="lg">
        <Subheading text="myPasket" icon={Icons.ShopIcon} />
        <Grid gutter={29}>
          <Grid.Col lg={8}>
            <Table bgcolor="#fff" highlightOnHover>
              <tbody>{rows}</tbody>
            </Table>
          </Grid.Col>
          <Grid.Col lg={4} sm={6} xs={12}>
            <Card withBorder sx={{ borderColor: '#F5F5F5' }}>
              <Text py={15}>{trans('haveCopoun')}</Text>
              <Group spacing={0}>
                <Input
                  name="coupon"
                  placeholder={trans('coupon')}
                  variant="filled"
                  styles={() => ({
                    input: {
                      '&:focus-within': {
                        borderColor: theme.colors.PRIMARY.main,
                      },
                    },
                  })}
                />
                <UnstyledButton
                  sx={{
                    backgroundColor: theme.colors.PRIMARY.main,
                    color: '#fff',
                    padding: '.5rem',
                    borderRadius: '7px',
                  }}
                >
                  {hascode ? trans('apply') : trans('delete')}
                </UnstyledButton>
              </Group>
            </Card>
            <Card withBorder mt={20} sx={{ borderColor: '#F5F5F5' }}>
              <Text py={15}>{trans('totalServicesPrice')}</Text>
              <Group position="apart">
                <Text py={15} color="dimmed">
                  {trans('tax')} 14%
                </Text>
                <Text py={15}>323 {trans('sr')}</Text>
              </Group>
              <Group position="apart" mb={50}>
                <Text py={15} color="dimmed">
                  {trans('price')}
                </Text>
                <Text py={15}>323 {trans('sr')}</Text>
              </Group>
              <Center>
                <Button
                  fontSize="17px"
                  text={trans('completePaying')}
                  style={{ width: '70%' }}
                  onClick={() => navigateTo('checkout')}
                />
              </Center>
            </Card>
            <Center mt={10}>
              <img src={payment} />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </NewSection>
  );
}
