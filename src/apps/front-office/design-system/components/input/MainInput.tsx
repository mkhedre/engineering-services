import { Input } from '@mantine/core';
import theme from '../../theme';

export default function MainInput(props: any, children: any) {
  return (
    <Input
      variant="filled"
      styles={() => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.PRIMARY.main,
          },
        },
      })}
      {...props}
    />
  );
}
