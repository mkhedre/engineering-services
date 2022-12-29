import styled from '@emotion/styled';
import { Stack } from '@mantine/core';
import mediaQueries from 'shared/constants/mediaQueries';

const { tablet } = mediaQueries;
export const Customstack = styled(Stack)({
  maxWidth: '80%',
  [tablet]: {
    Width: '100%',
  },
});
