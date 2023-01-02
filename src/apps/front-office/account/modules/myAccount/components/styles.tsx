import styled from '@emotion/styled';

export const CustomButton = styled('div')({
  border: `1px dotted #80D1FF`,
  padding: '20px',
  margin: '10px',
  backgroundColor: '#F1FAFF',
  '&:visited': {
    border: `1px dotted red`,
  },
});
