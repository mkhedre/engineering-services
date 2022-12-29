import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { JustifyContentProperty } from 'shared/types/cssTypes';

type FlexRowType = {
  justifyContent?: JustifyContentProperty;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignItems?: string;
  flexGrow?: string;
  gap?: string;
  flexBasis?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  maxWidth?: string;
  xs?: CSSProperties;
  sm?: CSSProperties;
  md?: CSSProperties;
  lg?: CSSProperties;
  xl?: CSSProperties;
  xxl?: CSSProperties;
  hd?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | any) => void;
};
export const FlexBetween = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FlexBetweenFullWidth = styled('div')`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const FlexRow = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Flex = styled('div')<FlexRowType>(
  {
    display: 'flex',
  },
  ({
    justifyContent,
    flexDirection,
    flexGrow,
    alignItems,

    gap,
    fullWidth,
    flexWrap,
    maxWidth,
    width,
    height,
    color,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    hd,
  }) => ({
    flexDirection: flexDirection || 'row',
    justifyContent: justifyContent || 'initial',
    alignItems: alignItems || 'initial',
    gap: gap || '15px',
    flexGrow: fullWidth ? '1' : flexGrow || 'initial',

    // width: fullWidth || maxWidth ? '100%' : 'initial',
    flexWrap: flexWrap || 'wrap',
    maxWidth: maxWidth || 'initial',
    color: color || undefined,
    width: width ? width : 'fit-content',
    height: height && height,
    '@media screen and (max-width: 280px)': { ...xs } || {},
    '@media screen and (max-width: 576px)': { ...sm } || {},
    '@media screen and (max-width: 768px)': { ...md } || {},
    '@media screen and (max-width: 992px)': { ...lg } || {},
    '@media screen and (max-width: 1200px)': { ...xl } || {},
    '@media screen and (min-width: 1360px)': { ...xxl } || {},
    '@media screen and (min-width: 1900px)': { ...hd } || {},
  })
);
