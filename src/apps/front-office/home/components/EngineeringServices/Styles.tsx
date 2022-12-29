import styled from '@emotion/styled';
import theme from 'design-system/theme';
import { MainWrapper } from '../HomePage/style';

export const CustomWrapper = styled(MainWrapper)({
  backgroundColor: theme.colors.background,
  paddingTop: theme.padding.main,
  paddingBottom: theme.padding.main,
});
