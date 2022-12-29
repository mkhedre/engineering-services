// export const StyledNavLink = styled(NavLink)({
import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import mediaQueries from 'shared/constants/mediaQueries';
interface HeaderProps {
  isHomePage?: boolean;
}
const { ipad, laptop, tablet } = mediaQueries;
export const HeaderIconButton = styled(IconMenu2)({
  marginLeft: 'auto',
});

export const Nav = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  [laptop]: {
    gap: '1.5rem',
  },
  [ipad]: {
    gap: '.5rem',
  },
  [tablet]: {
    flexDirection: 'column',
  },
});
export const HeaderWrapper = styled('div')(({ isHomePage }: HeaderProps) => {
  let homePageProperities = {};
  if (isHomePage) {
    homePageProperities = {
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: 'transparent !important',
      position: 'absolute',
      padding: '0 5rem',
      [ipad]: {
        padding: '0 1.5rem',
      },
      zIndex: 50,
    };
  }
  return {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    [laptop]: {
      paddingTop: '1.8rem',
    },
    [tablet]: {
      paddingTop: '1.25rem',
      justifyContent: 'space-between',
    },
    marginBottom: '1.5rem',
    ...homePageProperities,
  };
});

export const CustomContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
