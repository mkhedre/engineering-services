import {
  Card,
  Center,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { Form } from '@mongez/react-form';
import { navigateTo } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import FileInput from 'design-system/components/input/FileInput';
import TextInput from 'design-system/components/input/TextInput';
import theme from 'design-system/theme';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import URLS from '../../../../utils/urls';
import { CustomModal } from '../styles';
interface CardProps {
  img: string;
  text: string;
  price: string;
  desc?: string;
}

const OfficeServiceCard = ({ img, text, price, desc }: CardProps) => {
  const [opened, setOpened] = useState(false);
  const [openeSecond, setSecondModal] = useState(false);

  const handleSubmit = () => {
    setOpened(false);
    setTimeout(() => {
      setSecondModal(true);
    }, 1000);
    // navigateTo('/');
  };

  const handleSalla = () => {
    navigateTo(URLS.orders);
  };
  return (
    <>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={img} height={200} />
        </Card.Section>
        <Card.Section p="2rem">
          <Text>{text}</Text>
          {desc && <Text color="dimmed">{desc}</Text>}
          <Text color="dimmed" size="sm" pt={10}>
            {price}
          </Text>
          <Group mt={20} position="apart">
            <Button
              variant="secondary"
              text={trans('buyService')}
              style={{
                flex: 1,
              }}
              onClick={() => setOpened(true)}
            />
            <UnstyledButton>
              <ThemeIcon
                variant="light"
                radius="xl"
                size="xl"
                color={theme.colors.gray[200]}
              >
                <img src={Icons.ustyledHeard} width={16} />
              </ThemeIcon>
            </UnstyledButton>
          </Group>
        </Card.Section>
      </Card>
      <CustomModal
        opened={opened}
        onClose={() => setOpened(false)}
        title={trans('addServicesToPasket')}
        padding={50}
        // centered
        // size="sm"
      >
        <Form onSubmit={handleSubmit}>
          <TextInput name="location" label="locaton" />
          <TextInput name="" label="state" />
          <TextInput name="address" label="address" />
          <FileInput label={trans('addBuildingArchtecture')} />
          <Center>
            <Button
              type="submit"
              weight={300}
              fontSize="15px"
              text={trans('addToPasket')}
            />
          </Center>
        </Form>
      </CustomModal>
      <CustomModal
        opened={openeSecond}
        size="md"
        onClose={() => setOpened(false)}
      >
        <Stack align="center" justify="center" spacing="md">
          <img src={Icons.salla} alt="sucess buy" />
          <Text sx={{ width: '60%', textAlign: 'center' }}>
            {trans('serviceAddedSuccessfully')}
          </Text>
          <Button
            variant="secondary"
            text={trans('goToSalla')}
            onClick={handleSalla}
          />
        </Stack>
      </CustomModal>
    </>
  );
};

export default OfficeServiceCard;
