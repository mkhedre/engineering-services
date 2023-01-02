import { createStyles, Image, Stack, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';
import { Flex } from 'design-system/components/Flex';
import EmailInput from 'design-system/components/input/EmailInput';
import PasswordInput from 'design-system/components/input/PasswordInput';
import NewSection from 'design-system/components/Sections/NewSection';
import theme from 'design-system/theme';
import loginImage from 'shared/assets/images/Group 66288.png';
import mediaQueries from 'shared/constants/mediaQueries';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import URLS from '../../../../utils/urls';

const { laptop, tablet, miniLaptop } = mediaQueries;

const useStyles = createStyles((theme) => ({
  image: {
    maxWidth: 500,
    [miniLaptop]: {
      maxWidth: 300,
    },
    [tablet]: {
      display: 'none',
    },
  },
}));
const Login = () => {
  const { classes } = useStyles();
  const { largescreen, tabletScreen } = useBreakpoints();
  return (
    <NewSection
      helmetTitle="login"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'login', value: URLS.account.auth.login },
      ]}
      titleOrder={3}
    >
      <Flex
        width="100%"
        gap={largescreen ? '140px' : '70px'}
        justifyContent={'center'}
      >
        <Image src={loginImage} alt="img" className={classes.image} />
        <Stack sx={{ flex: 0.75 }} justify="center">
          <Text weight={300} size={30} sx={{ textAlign: 'center' }}>
            {trans('welcome')} <br /> {trans('login')}
          </Text>
          <EmailInput
            label={trans('email')}
            name="email"
            required
            helper={<div>error</div>}
          />
          <PasswordInput name="password" label={trans('password')} required />
          <Button
            variant="link"
            textColor="red"
            text={trans('forgetPassword')}
          />
          <Stack align="center">
            <Button variant="primary" text={trans('login')} />
            <Text weight={500}>
              {trans('dontHaveAccount')}
              {', '}
              <Link
                style={{ color: theme.colors.SECONDARY.main }}
                to={'/register'}
              >
                {trans('joinNow')}
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </NewSection>
  );
};

export default Login;
