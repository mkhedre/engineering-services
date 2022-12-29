import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';
import textFontResolver from 'shared/functions/textFontResolver';
import { WidthProperty } from 'shared/types/cssTypes';
import theme from '../../theme';

const { laptop, largmobile } = mediaQueries;
export default function Test(
  width: WidthProperty<string | 0> | null = null,
  error: boolean = false,
  height?: string
) {
  const InputBase = styled('input')({
    ...textFontResolver(400, '1.2rem', theme.colors.PRIMARY.main),
    width: `${width ? width : '100%'} !important`,
    height: `${height}`,
    backgroundColor: `${theme.colors.inputBackground}`,
    border: 'none',
    borderRadius: '7px',
    padding: '.6rem 1.5rem',
    zIndex: '10',
    outline: 'none',
    '&:focus': {
      border: `1px solid ${
        error ? theme.colors.red.main : theme.colors.PRIMARY.main
      }`,
    },
    [laptop]: {
      fontSize: '1rem',
      padding: '1rem 2.15625rem',
      '&::placholder': {
        fontSize: '1rem',
      },
    },
    [largmobile]: {
      fontSize: '.9rem',
      padding: '.6rem 1.4375rem',
      '&::placholder': {
        fontSize: '.9rem',
      },
    },
  });

  return InputBase;
}
