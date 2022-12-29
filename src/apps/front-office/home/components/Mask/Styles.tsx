import styled from '@emotion/styled';
import { Image } from '@mantine/core';
import MaskImage from 'shared/assets/images/Mask Group 1.png';

export const CustomImage = styled(Image)({
  position: 'relative',
  backgroundImage: `url(${MaskImage})`,
});
