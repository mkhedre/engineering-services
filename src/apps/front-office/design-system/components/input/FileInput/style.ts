import styled from '@emotion/styled';
import theme from '../../../theme';

export const Wrapper = styled('label')(() => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  border: `2px dashed ${theme.colors.gray[100]}`,
  padding: '20px',
  background: '#fff',
}));
export const Input = styled('input')({
  position: 'absolute',
  opacity: '0',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});
