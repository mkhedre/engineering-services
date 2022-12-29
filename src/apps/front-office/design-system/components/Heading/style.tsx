import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';
import theme from '../../theme';

const { smallmobile, tablet } = mediaQueries;

export const HeadingWrapper = styled('div')({
  textAlign: 'center',
  margin: ' 0 0 50px 0',
  paddingTop: tablet ? theme.padding.small : theme.padding.main,
  paddingBottom: tablet ? theme.padding.small : theme.padding.main,
});

export const HeadingTitle = styled('h2')((props) => ({
  fontWeight: 'normal',
  fontSize: '40px',
  position: 'relative',
  marginBottom: '10px',
  [tablet]: {
    fontSize: '35px',
  },
  // '&::after': {
  //   position: 'absolute',
  //   content: '""',
  // },
}));

// export const CustomBadge = styled('div')({
//   position: 'relative',
//   top: '0',
// });
