import { Anchor, Box, Group, Stack, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Icons from 'shared/assets/svgs';
import { serviceProviderAtom } from '../../../atoms';
import { CustomButton } from '../components/styles';

export default function AccountType() {
  const currentProvider = serviceProviderAtom.useValue();

  return (
    <Stack align="center" justify="center" mt={50}>
      <Text>{trans('chooseAccountType')}</Text>
      <Text size="sm" color="dimmed">
        {trans('needMoreInfo')}
      </Text>
      <Anchor component={Link} to="pages" size="sm">
        {trans('FAQpage')}
      </Anchor>
      <CustomButton onClick={() => serviceProviderAtom.update('person')}>
        <Group>
          <img src={Icons.Usr} alt="user" width={40} />
          <Box>
            <Text w="fit-content">{trans('personProvider')}</Text>
            <Text size="xs" color="dimmed">
              {trans('createPersonAccount')}
            </Text>
          </Box>
        </Group>
      </CustomButton>
      <CustomButton onClick={() => serviceProviderAtom.update('company')}>
        <Group>
          <img src={Icons.MainIcon} alt="user" width={40} />
          <Box>
            <Text w="fit-content">{trans('companyProvider')}</Text>
            <Text size="xs" color="dimmed">
              {trans('createCompanyAccount')}
            </Text>
          </Box>
        </Group>
      </CustomButton>
    </Stack>
  );
}
