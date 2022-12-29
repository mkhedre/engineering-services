import styled from '@emotion/styled';
import { Group, Image } from '@mantine/core';

export const CustomCard = styled('div')((theme) => ({
  border: `1px solid gray`,
}));

export const CustomGroup = styled(Group)({
  backgroundColor: '#F49342',
  width: 'fit-content',
  borderRadius: '5px',
  color: '#fff',
  fontWeight: 'bold',
  gap: '5px',
  padding: '5px 7px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CustomImage = styled(Image)({
  width: 20,
  ':hover': {
    fill: 'red',
  },
});
