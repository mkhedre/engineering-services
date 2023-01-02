import {
  Button,
  createStyles,
  Image,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import NewSection from 'design-system/components/Sections/NewSection';
import { useState } from 'react';
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
  // flex: {
  //   position: 'static',
  //   right: '20%',
  //   textAlign: 'center',
  // },
}));
const Verify = () => {
  const { classes } = useStyles();
  const { largescreen } = useBreakpoints();
  const [value, setValue] = useState(0);
  return (
    <NewSection
      helmetTitle="verifyCode"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'verifyCode', value: URLS.account.auth.verifyCode },
      ]}
      titleOrder={4}
    >
      <SimpleGrid cols={2} spacing="xl">
        <Image src={loginImage} alt="img" className={classes.image} />
        <Stack spacing={30} align="center" maw={'50%'}>
          <Text mb={30}>{trans('verifyCode')}</Text>
          <SimpleGrid cols={4}>
            <NumberInput value={value} hideControls />
            <NumberInput value={value} hideControls />
            <NumberInput value={value} hideControls />
            <NumberInput value={value} hideControls />
          </SimpleGrid>
          <Stack>
            <Button radius="xl">{trans('send')}</Button>
            <Link>{trans('resend')} : counter</Link>
          </Stack>
        </Stack>
      </SimpleGrid>
    </NewSection>
  );
};

export default Verify;
