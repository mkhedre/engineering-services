import { Group, NavLink } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link, queryString } from '@mongez/react-router';
import { IconMenu2 } from '@tabler/icons';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import LogoIcon from 'shared/assets/svgs/logo/LogoIcon';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { SMIcon } from '../../components/ColoredIcon/SMIcon';
import { useStyles } from '../../globalStyles';
import theme from '../../theme';
import { CustomContainer, HeaderIconButton, HeaderWrapper } from './style';

const mockdata = [
  {
    Icon: Icons.CategoryIcon,
    title: 'categories',
    link: '/categories',
  },
  {
    Icon: Icons.AboutUsIcon,
    title: 'aboutUS',
    link: '/about-us',
  },
  {
    Icon: Icons.CallIcon,
    title: 'contactUS',
    link: '/contact-us',
  },
  {
    Icon: Icons.AddIcon,
    title: 'serviceProvider',
    link: '/serviceProvider',
  },
];

const Header = () => {
  const { classes } = useStyles();
  const [openDrawer, setOpenDrawer] = useState<Boolean>(
    ['login', 'register'].includes(queryString().get('open'))
  );
  const links = mockdata.map(({ title, Icon, link }, index) => (
    <NavLink
      key={index}
      sx={{
        textAlign: 'right',
        width: 'fit-content',
      }}
      label={trans(title)}
      icon={<SMIcon src={Icon} />}
      component={Link}
      to={link}
    />
  ));

  const { tabletScreen } = useBreakpoints();
  return (
    <>
      {tabletScreen ? (
        <HeaderWrapper isHomePage>
          <CustomContainer size="xl">
            <HeaderIconButton onClick={() => setOpenDrawer(true)}>
              <IconMenu2 color={theme.colors.PRIMARY.main} />
            </HeaderIconButton>
            <Link to="/">
              <LogoIcon size={118} />
            </Link>
          </CustomContainer>
        </HeaderWrapper>
      ) : (
        <HeaderWrapper>
          <CustomContainer size="xl">
            <Link to="/">
              <LogoIcon size={118} />
            </Link>
            <Group>{links}</Group>
            <Group>
              {/* <ColoredIcon icon={Icons.NotificationIcon} color="orange" />
              <ColoredIcon icon={Icons.NotificationIcon} color="orange" />
              <ColoredIcon icon={Icons.NotificationIcon} color="orange" />
              <ColoredIcon icon={Icons.NotificationIcon} color="orange" /> */}
            </Group>
          </CustomContainer>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
