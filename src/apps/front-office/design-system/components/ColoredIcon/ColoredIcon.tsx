import { ActionIcon } from '@mantine/core';
import { SMIcon } from './SMIcon';

interface ColoredIconProps {
  color: string;
  icon: React.ReactNode;
}

export function ColoredIcon({ color, icon }: any) {
  return (
    <ActionIcon color={color} size={65} radius={100} variant="light">
      <SMIcon src={icon} />
    </ActionIcon>
  );
}

export const NotifIcon = ({ color, icon }: any) => (
  <ActionIcon color={color} size={45} radius={15} variant="light">
    <SMIcon src={icon} marginLeft={0} />
  </ActionIcon>
);
