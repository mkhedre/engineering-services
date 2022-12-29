import { BackgroundImage, Text } from '@mantine/core';
import MaskImage from 'shared/assets/images/Mask Group 1.png';
import { MainWrapper } from '../HomePage/style';

const Mask = () => {
  return (
    <MainWrapper>
      <BackgroundImage src={MaskImage}>
        <Text>dcfvgbh</Text>
      </BackgroundImage>
    </MainWrapper>
  );
};

export default Mask;
