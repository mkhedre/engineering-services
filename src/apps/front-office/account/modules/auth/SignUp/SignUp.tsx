import { Center, Group, Stack, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import EmailInput from 'design-system/components/input/EmailInput';
import NumberInput from 'design-system/components/input/NumberInput';
import PasswordInput from 'design-system/components/input/PasswordInput';
import TextInput from 'design-system/components/input/TextInput';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import landingImage from 'shared/assets/images/overlay.png';
import URLS from '../../../../utils/urls';
import {
  CustomCheckbox,
  CustomLink,
  CustomStack,
  CustomWrapper,
} from './Styles';

const SignUp = () => {
  return (
    <NewSection
      helmetTitle="register"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'register', value: URLS.account.auth.register },
      ]}
    >
      <CustomWrapper image={landingImage}>
        <CustomStack>
          <Center>
            <Text size="xl">
              {trans('welcome')} ,<br /> {trans('newRegistration')}
            </Text>
          </Center>
          <TextInput name="firstName" label="firstName" required />
          <TextInput name="lastName" label="lastName" required />
          <NumberInput name="phone" label="phone" required />
          <EmailInput name="email" label="email" required />
          <PasswordInput name="password" label="password" />
          <PasswordInput name="confirmPassword" label="confirmPassword" />
          <Group>
            <CustomCheckbox />
            <CustomLink>{trans('aggreeWithconditions')}</CustomLink>
          </Group>
          <Center>
            <Stack>
              <Button text={trans('createAccount')} />
              <div>
                {trans('haveAccount')}
                {' , '}
                <Link
                  style={{ color: theme.colors.SECONDARY.main }}
                  to={'/login'}
                >
                  {trans('login')}
                </Link>
              </div>
            </Stack>
          </Center>
        </CustomStack>
      </CustomWrapper>
    </NewSection>
  );
};

export default SignUp;
