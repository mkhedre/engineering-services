import { Group, Text, ThemeIcon } from '@mantine/core';
import { trans } from '@mongez/localization';

interface SubheadingProps {
  icon: string;
  text: string;
  color?: string;
}
export default function Subheading({ color, icon, text }: SubheadingProps) {
  return (
    <Group mb={15}>
      <ThemeIcon variant="light" size={50} radius="xl" color={color}>
        <img src={icon} />
      </ThemeIcon>
      <Text size="xl">{trans(text)}</Text>
    </Group>
  );
}
