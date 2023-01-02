import {
  Box,
  Group,
  Image,
  Indicator,
  Paper,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { trans } from '@mongez/localization';
import { current } from '@mongez/react';
import Button from 'design-system/components/Button';
import theme from 'design-system/theme';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import { Items } from './style';
interface CardProps {
  img?: string;
  name: string;
  price?: string;
  rating?: string;
  subtitle?: string;
  withConditions?: boolean;
}
export default function OfferCard({
  img,
  name,
  price,
  rating,
  subtitle,
  withConditions,
}: CardProps) {
  return (
    <Paper
      withBorder
      p={10}
      my={20}
      sx={{ backgroundColor: '#fff', borderColler: '#F6F7F7' }}
    >
      <Group position="apart">
        <Group position="apart">
          <Indicator
            label={rating}
            size={30}
            color={theme.colors.SECONDARY.main}
            withBorder
            position={
              current('localeCode') === 'ar' ? 'middle-start' : 'middle-end'
            }
          >
            <ThemeIcon size={70} variant="outline" color="light">
              <Image src={Layer} height={25} width="fit-content" />
            </ThemeIcon>
          </Indicator>
          <Box>
            <Text>{name}</Text>
            <Text size="sm">{subtitle}</Text>
          </Box>
        </Group>
        <Group>
          <Button
            text={`${trans(`offerIs`)} ${price} ${trans('sr')}`}
            variant="white"
          />
          <Button text={trans('acceptOffer')} variant="secondary" />
        </Group>
      </Group>
      {withConditions && (
        <>
          <Paper
            mt={10}
            sx={{
              borderTop: `1px solid ${theme.colors.bordercolor}`,
            }}
          >
            <Group spacing={2} mt={15}>
              <img src={Icons.Flag} alt="flag" width={30} />
              <Button
                variant="link"
                text={trans('OfficeRequirements')}
                textColor={theme.colors.SECONDARY.main}
              />
            </Group>
            <Items>
              - دفع المبلغ مقدم - توثيق الاتفاقات قانونياً - تقديم ما يلزم من
              الاوراق
            </Items>
          </Paper>
        </>
      )}
    </Paper>
  );
}
