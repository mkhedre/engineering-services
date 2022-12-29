import { Carousel } from '@mantine/carousel';
import { Group, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import { useState } from 'react';
import shadowimg2 from 'shared/assets/images/services/Shadow.png';
import shadowimg from 'shared/assets/images/Shadow.png';
import Icons from 'shared/assets/svgs';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { OfficeWrapper } from '../styles';
import OfficeServiceCard from './OfficeServiceCard';
const data = [
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
  {
    img: shadowimg2,
    text: 'تصميم ثنائي وثلاثي الأبعاد على برامج التصميم الهندسية',
    price: '1,725.00 س.ر',
  },
];
const OfficeService = () => {
  const [opened, setOpened] = useState(false);
  const { ipadScreen, largeMobileScreen, miniLaptopScreen } = useBreakpoints();
  // const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <OfficeWrapper>
      <Group spacing={0} mb={40}>
        <SMIcon src={Icons.FlashIcon} />
        <Text size="xl">{trans('engineeringServices')}</Text>
      </Group>
      <Carousel
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
        nextControlIcon={<IconArrowLeft size={16} />}
        previousControlIcon={<IconArrowRight size={16} />}
      >
        {data.map(({ img, text, price }, index) => (
          <Carousel.Slide
            size={
              largeMobileScreen
                ? '100%'
                : ipadScreen
                ? '50%'
                : miniLaptopScreen
                ? '33.3333%'
                : '25%'
            }
          >
            <OfficeServiceCard
              key={index}
              img={img}
              text={text}
              price={price}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </OfficeWrapper>
  );
};

export default OfficeService;

// <Grid>
// {data.map(({ img, text, price }, index) => (
//   <Col lg={3} md={4} xs={6}>
//     <Carousel.Slide>
//       <OfficeServiceCard
//         key={index}
//         img={img}
//         text={text}
//         price={price}
//       />
//     </Carousel.Slide>
//   </Col>
// ))}
// </Grid>
