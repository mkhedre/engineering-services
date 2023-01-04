import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';

const { tablet, largmobile } = mediaQueries;
export const CustomButton = styled('button')({
  padding: '30px',
  width: '80%',
  maxwidth: '400px',
  margin: '10px',
  border: `1px dashed #D3D3DC`,
  backgroundColor: '#FBFCFD',
  cursor: 'pointer',
  '&:focus': {
    border: `1px dashed #80D1FF`,
    backgroundColor: '#F1FAFF',
  },
  [largmobile]: {
    padding: '15px',
    margin: '0',
    width: '100%',
  },
});
