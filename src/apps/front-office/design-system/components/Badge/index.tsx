import { Badge, BadgeProps } from '@mantine/core';

export function MainBadge(props: BadgeProps) {
  return (
    <Badge
      color={props.color}
      size="lg"
      variant="filled"
      sx={{
        fontWeight: 'lighter',
        fontSize: '20px',
      }}
      {...props}
    />
  );
}
