import { createStyles } from '@mantine/core';
const HEADER_HEIGHT = 60;

export const useStyles = createStyles((theme) => ({
  header: {
    height: HEADER_HEIGHT,
    paddingTop: theme.spacing.lg,
    width: '100%',
    left: '0',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
  },
}));
