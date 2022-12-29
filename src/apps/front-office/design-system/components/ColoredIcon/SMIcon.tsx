import styled from '@emotion/styled';

interface SMIconProps {
  width?: string | number;
  height?: string | number;
  marginLeft?: string | number;
}
export const SMIcon = styled('img')((Props: SMIconProps) => ({
  width: Props.width ? Props.width : '25.53px',
  height: Props.height ? Props.height : '25.53px',
  borderRadius: '10px',
  marginLeft: Props.marginLeft ? Props.marginLeft : '10px',
}));
