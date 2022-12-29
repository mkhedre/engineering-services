import { Box, Container, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import Grid from 'design-system/components/Grid';
import Heading from 'design-system/components/Heading';
import Icons from 'shared/assets/svgs';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { WhyUsWrapper } from './Styles';

const data = [
  {
    icon: Icons.StudioIcon3,
    text: 'choseUs3',
  },
  {
    icon: Icons.StudioIcon2,
    text: 'choseUs2',
  },
  {
    icon: Icons.StudioIcon1,
    text: 'choseUs1',
  },
];
const WhyUs = () => {
  const { tabletScreen } = useBreakpoints();

  return (
    <>
      <WhyUsWrapper>
        <Container size="lg" my="md" py={50}>
          <Heading title={trans('whyStudio')} />
          <Grid align="center" gap={tabletScreen ? 2 : 6}>
            {data.map((item, index) => (
              <Box key={index}>
                <SMIcon src={item.icon} />
                <Text size={tabletScreen ? 15 : 20}>{trans(item.text)}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </WhyUsWrapper>
    </>
  );
};

export default WhyUs;
