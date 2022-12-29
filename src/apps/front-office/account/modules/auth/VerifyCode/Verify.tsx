import { Button, createStyles, Group, Image, Stack, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import { Flex } from 'design-system/components/Flex';
import NumberInput from 'design-system/components/input/NumberInput';
import NewSection from 'design-system/components/Sections/NewSection';
import loginImage from 'shared/assets/images/Group 66288.png';
import mediaQueries from 'shared/constants/mediaQueries';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import URLS from '../../../../utils/urls';

const { tablet, miniLaptop } = mediaQueries;
const useStyles = createStyles((theme) => ({
  image: {
    maxWidth: 500,
    [miniLaptop]: {
      maxWidth: 400,
    },
    [tablet]: {
      display: 'none',
    },
  },
}));
const Verify = () => {
  const { classes } = useStyles();
  const { largescreen } = useBreakpoints();
  return (
    <NewSection
      helmetTitle="verifyCode"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'verifyCode', value: URLS.account.auth.verifyCode },
      ]}
      titleOrder={4}
    >
      <Flex
        width="100%"
        gap={largescreen ? '200px' : '40px'}
        alignItems="center"
      >
        <Image src={loginImage} alt="img" className={classes.image} />
        <Stack spacing={30} align="center">
          <Text mb={30}>{trans('verifyCode')}</Text>
          <Group sx={{ flex: 1 }} spacing="xl">
            <NumberInput />
            <NumberInput />
            <NumberInput />
            <NumberInput />
          </Group>
          <Stack>
            <Button radius="xl">{trans('send')}</Button>
            <Link>{trans('resend')} : counter</Link>
          </Stack>
        </Stack>
      </Flex>
    </NewSection>
  );
};

export default Verify;
