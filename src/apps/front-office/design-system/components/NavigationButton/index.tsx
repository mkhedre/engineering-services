import { trans } from '@mongez/localization';
import { current } from '@mongez/react';
import React from 'react';
import ArrowIcon from 'shared/assets/svgs/ArrowIcon';
import { Flex } from '../Flex';
import { NavButton, Text } from './style';
interface Iprop {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  rounded?: boolean;
  iconColor?: string;
  iconSize?: number;
  background?: string;
  border?: string;
  size?: string;
  text?: string | any;
  onClick?: () => void;
  disabled?: boolean;
}
const NavigationButton = React.forwardRef(
  (
    {
      direction,
      rounded,
      background,
      iconColor,
      iconSize,
      size,
      border,
      onClick,
      disabled,
      text,
    }: Iprop,
    ref
  ) => {
    return (
      <Flex gap="0" width={''} height={''}>
        <Text>{trans(text)}</Text>
        <NavButton
          rounded={rounded}
          background={background}
          size={size}
          onClick={onClick}
          border={border}
          disabled={disabled}
          type="button"
        >
          <ArrowIcon
            direction={current('localeCode') === 'ar' ? 'left' : 'left'}
            color={iconColor}
            size={iconSize}
          />
        </NavButton>
      </Flex>
    );
  }
);

export default NavigationButton;
