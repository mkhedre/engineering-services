import styled from '@emotion/styled';
import { Checkbox, Stack } from '@mantine/core';
import { Link } from '@mongez/react-router';
import theme from 'design-system/theme';
import mediaQueries from 'shared/constants/mediaQueries';

const { tablet, smallmobile } = mediaQueries;

export const CustomWrapper = styled('div')((props: any) => ({
  backgroundImage: `url(${props.image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  paddingBottom: '40px',
}));

export const CustomStack = styled(Stack)({
  width: '40%',
  margin: 'auto',
  [tablet]: {
    width: '90%',
  },
  gap: '20px',
});

export const CustomLink = styled(Link)({
  color: theme.colors.PRIMARY.main,
  '&:hover': {
    opacity: '.8',
  },
});

export const CustomCheckbox = styled(Checkbox)({
  cursor: 'pointer',
  display: 'block',
});
