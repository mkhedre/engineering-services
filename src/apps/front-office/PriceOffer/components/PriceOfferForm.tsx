import {
  Card,
  Container,
  Group,
  Paper,
  Select,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import Button from 'design-system/components/Button';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import FileInput from 'design-system/components/input/FileInput';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import Icons from 'shared/assets/svgs';
import URLS from '../../utils/urls';

function PriceOfferForm() {
  return (
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
        <Paper shadow="sm" p={60} withBorder mt={25}>
          <Group spacing={0} mb={20}>
            <SMIcon src={Icons.FlashIcon} />
            <Text size="xl">{trans('addMainInfo')}</Text>
          </Group>
          <Select
            label={trans('selectService')}
            placeholder={trans('clickToSelectService')}
            data={['ok', 'lll']}
          />
          <Textarea
            my={15}
            label={trans('descripeNeeds')}
            placeholder={trans('writeNeedsHere')}
          />
        </Paper>
        <Paper shadow="sm" p={60} withBorder mt={25}>
          <Group spacing={0} mb={20}>
            <SMIcon src={Icons.FlashIcon} />
            <Text size="xl">{trans('addServiceInformation')}</Text>
          </Group>
          <Select
            label={trans('City')}
            placeholder={trans('clickToSelectService')}
            data={['ok', 'lll']}
          />
          <Select
            my={15}
            label={trans('neighborhood')}
            placeholder={trans('chooseneighborhood')}
            data={['ok', 'lll']}
          />
          <TextInput
            mb={15}
            label={trans('address')}
            placeholder={trans('writeAddress')}
          />
          <Text>{trans('files')}</Text>
          <FileInput />
        </Paper>
        <Paper shadow="sm" p={60} withBorder mt={25}>
          <Group spacing={0} mb={20}>
            <SMIcon src={Icons.FlashIcon} />
            <Text size="xl">{trans('orderType')}</Text>
          </Group>
          <Card
            sx={{
              border: `1px solid ${theme.colors.PRIMARY.main}`,
            }}
          >
            <Group spacing={2} align="center">
              <img src={Icons.ordersPrice} alt="price-offer" width={20} />
              <Text>{trans('publicOrder')}</Text>
            </Group>
            <Text size="sm" color="dimmed">
              {trans('showOrder')}
            </Text>
          </Card>
          <Card withBorder my={20}>
            <Group spacing={2} align="center">
              <img src={Icons.ordersPrice2} alt="price-offer" width={20} />
              <Text>{trans('privateOrder')}</Text>
            </Group>
            <Text size="sm" color="dimmed">
              {trans('showCustomOrder')}
            </Text>
          </Card>
          <Button text={trans('priceOffer')} fontSize="17px" />
        </Paper>
      </Container>
    </NewSection>
  );
}

export default PriceOfferForm;
