import { css } from '@emotion/react';
import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';
import { styledFlexCenter } from 'shared/constants/styleMixins';
import theme from '../../theme';

interface NavButtonProps {
  rounded?: boolean;
  background?: string;
  border?: string;
  disabled?: boolean;
  size?: string;
}
const { laptop } = mediaQueries;

export const NavButton = styled('button')<NavButtonProps>`
  ${styledFlexCenter}
  border-style: none;
  background: transparent;
  transform: rotate(180deg);
  paddingLeft:0,
  paddingRight:0,
  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background: #eee;
      }
    `}
  ${({ rounded }) =>
    rounded
      ? css`
          border-radius: 50%;
          background: #fff;
        `
      : css`
          border-radius: 5px;
        `}
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
 
  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}
  cursor: pointer;
`;
export const Text = styled('h3')`
  color: ${theme.colors.gray.text};
  font-size: 1.5rem;
  font-weight: 500;
`;
