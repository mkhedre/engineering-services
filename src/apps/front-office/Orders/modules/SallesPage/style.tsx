import styled from '@emotion/styled';
import { Input } from '@mantine/core';
import theme from 'design-system/theme';

export const Price = styled('div')({
  backgroundColor: theme.colors.gray.text,
  borderRadius: '30px',
  textAlign: 'center',
  padding: '3px',
  fontWeight: 'bold',
  color: theme.colors.gray.DARK_GRAY,
  fontSize: '12px',
  margin: '1rem 2rem',
});

export const CustomInput = styled(Input)({
  '& .mantine-TextInput-input': {
    '&:focus-within': {
      borderColor: theme.colors.PRIMARY.main,
    },
  },
});
