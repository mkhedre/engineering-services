import { Card, Group, Image, Stack, Text, ThemeIcon } from '@mantine/core';
import { Link } from '@mongez/react-router';
import Icons from 'shared/assets/svgs';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import URLS from '../../../utils/urls';
import { CustomGroup, CustomImage } from './Styles';
interface CardProps {
  id?: any;
  img: string;
  text: string;
  icon: React.ReactNode;
  rate: string;
  address: string;
}
const OfficeCard = ({ img, address, icon, rate, text, id }: CardProps) => {
  const { ipadScreen } = useBreakpoints();
  return (
    <Card
      shadow="sm"
      withBorder
      component={Link}
      to={`/${URLS.engineeringOfficess.root}/${id}`}
      sx={{
        backgroundColor: '#F9FAFB',
        ':hover': {
          backgroundColor: '#EAF5FA',
        },
      }}
    >
      <Card.Section py={35} px={30}>
        <Group>
          <ThemeIcon size={70} variant="outline">
            <Image src={img} height={25} width="fit-content" />
          </ThemeIcon>
          <Stack sx={{ flex: 1 }}>
            <Text weight={350}>{text}</Text>
            <CustomGroup>
              {rate} {icon}
            </CustomGroup>
          </Stack>
        </Group>
      </Card.Section>
      <Card.Section
        pr={30}
        pb={20}
        pt={10}
        withBorder
        sx={{ borderWidth: '4px', borderColor: '#fff' }}
      >
        <Group>
          <CustomImage src={Icons.Location} width="20px" alt="" />
          <Text>{address}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default OfficeCard;
