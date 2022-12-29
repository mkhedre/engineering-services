import { ActionIcon, Box, Container, createStyles, Group } from '@mantine/core';

import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons';
import PaymentMethods from 'shared/assets/svgs/pay/b-300x37.png';

import Icons from 'shared/assets/svgs';
// import { Flex } from '../../components/Flex';
import Text from '../../components/Text';

const useStyles = createStyles((theme) => ({
  footer: {
    width: '100%',
    marginTop: '120px',
    bottom: '10px',
    backgroundColor: theme.colors.background,
    zIndex: 50,
    left: '0',
    height: '100px',
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
    },
  },
  text: {
    color: theme.colors.gray[1],
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      {/* <Flex
        maxWidth="35%"
        flexDirection="row"
        style={{
          margin: 'auto',
        }}
      >
        <NavLink component={Link} to="/about-us" label={trans('aboutUs')} />
        <NavLink
          component={Link}
          to="/conditions-page"
          label={trans('conditionsPage')}
        />
        <NavLink component={Link} to="/privacy" label={trans('privacy')} />
        <NavLink component={Link} to="/contact-us" label={trans('contactUS')} />
      </Flex> */}
      <Container size="xl" className={classes.inner}>
        <Box sx={{ textAlign: 'center' }}>
          <Text text={trans('paymentMethods')} />
          <img src={PaymentMethods} />
        </Box>

        <Box>
          <Text text={trans('footerWrites')} />
          <Group>
            <ActionIcon>
              <IconBrandTwitter />
            </ActionIcon>
            <ActionIcon>
              <IconBrandYoutube />
            </ActionIcon>
            <ActionIcon>
              <IconBrandFacebook />
            </ActionIcon>
          </Group>
        </Box>
        <Link to="https://www.rh.net.sa/">
          <Group>
            <Box className={classes.text}>
              <Text text={trans('designdWith')} />
            </Box>
            <img src={Icons.Rowwad} alt="rowaad" />
          </Group>
        </Link>
      </Container>
    </div>
  );
}

//  <img src={Icons.Rowwad} alt="rowaad" />
