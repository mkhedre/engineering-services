import styled from '@emotion/styled';
import theme from 'design-system/theme';

export const HomeWrapper = styled('div')({
  backgroundColor: '#fff',
});

export const MainWrapper = styled('div')(() => ({
  marginTop: theme.margin.main,
}));

export const CardWrapper = styled('div')({
  backgroundColor: theme.colors.background,
  padding: '30px 20px',
  '& :hover': {
    backgroundColor: theme.colors.blue[100],
  },
});
