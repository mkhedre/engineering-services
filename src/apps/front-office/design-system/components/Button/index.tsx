import styled from '@emotion/styled';
import { trans } from '@mongez/localization';
import CSS from 'csstype';
import mediaQueries from 'shared/constants/mediaQueries';
import textFontResolver from 'shared/functions/textFontResolver';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import theme from '../../theme';
import { SMIcon } from '../ColoredIcon/SMIcon';

interface IconPropsType {
  size?: number | null;
  color?: string | null;
  direction?: string | null;
  [key: string]: any;
}
interface ButtonPropsType {
  text?: string | any;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'succes'
    | 'info'
    | 'link'
    | 'borderdGray'
    | 'transparent'
    | 'white'
    | 'burble';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textDecoration?: string;
  iconButton?: boolean;
  Icon?: any;
  textColor?: string;
  fontSize?: CSS.Property.FontSize;
  isLoading?: boolean;
  disabled?: boolean;
  background?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  style?: { [key: string]: any };
  type?: 'submit' | 'button' | 'reset';
  borderRadius?: string;
  width?: string;
  borderColor?: string;
  iconDirection?: string;
  direction?: 'rtl' | 'ltr';
  padding?: CSS.Property.Padding;
  alignItems?: string;
  children?: any;
}
export default function Button({
  text,
  weight,
  textDecoration,
  textColor,
  fontSize,
  variant = 'primary',
  iconButton,
  isLoading,
  disabled,
  Icon,
  background,
  fullWidth,
  type,
  style,
  onClick,
  borderRadius,
  width,
  borderColor,
  iconDirection,
  direction,
  padding,
  alignItems,
  children,
}: ButtonPropsType) {
  const { laptop, tablet, largmobile } = mediaQueries;
  const { laptopScreen } = useBreakpoints();

  let buttonVariant = {};
  let buttonDisabled = {};
  if (disabled) {
    buttonDisabled = {
      ...buttonDisabled,
      background: '#cecece',
      color: '#A5A5A5',
      cursor: 'unset',
      '&:hover': {
        background: background || theme.colors.gray[100],
      }, //lightenDarkenColor
    };
  }
  switch (variant) {
    case 'primary':
      buttonVariant = {
        ...buttonVariant,
        fontWeight: weight ? weight : 700,
        background: background ? background : theme.colors.blue.main,
        color: textColor ? textColor : theme.colors.white,
        borderRadius: borderRadius ? borderRadius : '50px',
        '&:hover': {
          background: background ? background : theme.colors.blue[200],
        },
      };
      break;
    case 'link':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.Derivative,
        background: 'none',
      };
      break;
    case 'info':
      buttonVariant = {
        ...buttonVariant,
        color: theme.colors.lightBlue[400],
        borderRadius: borderRadius ? borderRadius : '50px',
        background: background ? background : theme.colors.lightBlue[200],
        '&:hover': {
          background: background ? background : theme.colors.blue.light,
        },
      };
      break;
    case 'secondary':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.black,
        borderRadius: borderRadius ? borderRadius : '50px',
        background: background ? background : theme.colors.gray[100],
        '&:hover': {
          background: background ? background : theme.colors.blue.main,
          color: '#fff',
        },
      };
      break;
    case 'borderdGray':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.gray.DARK_GRAY,
        borderRadius: borderRadius ? borderRadius : '50px',
        background: background ? background : theme.colors.gray[100],
        border: `2px solid ${theme.colors.gray.DARK_GRAY}`,
        '&:hover': {
          background: background ? background : theme.colors.gray.text,
        },
        '&:focus': {
          borderColor: theme.colors.PRIMARY.main,
          color: theme.colors.PRIMARY.main,
        },
      };
      break;
    case 'transparent':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.lightBlue[400],
        borderRadius: borderRadius ? borderRadius : '50px',
        background: 'transparent',
        border: `2px solid ${theme.colors.lightBlue.border}`,
        '&:hover': {
          background: background ? background : theme.colors.lightBlue[200],
          border: `2px solid ${theme.colors.lightBlue[200]}`,
        },
      };
      break;
    case 'burble':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.white,
        borderRadius: borderRadius ? borderRadius : '50px',
        background: theme.colors.SECONDARY.main,
        fontSize: fontSize ? fontSize : '50px',
        // border: `2px solid ${theme.colors.lightBlue.border}`,
        '&:hover': {
          // background: background ? background : theme.colors.SECONDARY[100],
          // border: `2px solid ${theme.colors.lightBlue[200]}`,
        },
      };
      break;
    case 'white':
      buttonVariant = {
        ...buttonVariant,
        color: textColor ? textColor : theme.colors.PRIMARY.main,
        borderRadius: borderRadius ? borderRadius : '50px',
        background: 'transparent',
        fontSize: fontSize ? fontSize : '50px',
        border: `2px solid ${theme.colors.bordercolor}`,
        '&:hover': {
          // background: background ? background : theme.colors.SECONDARY[100],
          // border: `2px solid ${theme.colors.lightBlue[200]}`,
        },
      };
      break;
    default:
      break;
  }
  const Text = styled('p')({
    ...textFontResolver(
      weight
        ? weight
        : variant === 'link'
        ? 400
        : type === 'button'
        ? 700
        : 700,
      fontSize ? fontSize : variant === 'link' ? '1rem' : '.8rem'
    ),
    textDecoration: textDecoration
      ? textDecoration
      : variant === 'link'
      ? 'underline'
      : 'none',
    [largmobile]: {
      fontSize: fontSize ? `calc(${fontSize}*0.9)` : '.9rem',
      fontWeight: 500,
    },
  });
  const StyledButton = styled('button')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    direction: direction ? direction : 'ltr',
    padding: padding ? padding : variant === 'link' ? '5px 5px' : '.8rem 2rem',
    border: 'none',
    borderRadius: '50px',
    textAlign: 'center',
    ...buttonVariant,
    ...buttonDisabled,
    width: fullWidth ? '100%' : width ? width : 'fit-content',
    cursor: 'pointer',
    [laptop]: {
      padding: padding ? padding : variant === 'link' ? '0' : '1rem 2rem',
    },
    [tablet]: {
      padding: padding ? padding : variant === 'link' ? '0' : '.5rem 1rem',
    },
    [largmobile]: {
      padding: variant === 'link' ? '0' : '.5rem 1rem',
    },
  });
  return (
    <StyledButton
      type={type || 'submit'}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={style}
    >
      {children}
      {!isLoading && <Text>{trans(text)}</Text>}
      {!isLoading && Icon && <SMIcon src={Icon} />}
    </StyledButton>
  );
}

// interface ButtonProps {
// //   blue?: boolean;
// //   gray?: boolean;
// //   red?: boolean;
// //   outline?: boolean;
// // }
// const useStyles = createStyles((props) => ({
//   default: {
//     color: theme.colors.blue.main,
//   },
//   sliceGray: {
//     color: theme.colors.gray[100],
//   },
// }));

// export const MainButton = (props: any) => {
//   return (
//     <Button
//       onClick={props.onClick}
//       sx={{
//         fontWeight: 'bold',
//         backgroundColor: theme.colors.blue.main,
//         borderRadius: '20px',
//         '&:hover': {
//           backgroundColor: theme.colors.blue[200],
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export const GrayButton = (props: any) => {
//   return (
//     <Button
//       onClick={props.onClick}
//       sx={{
//         fontWeight: 'bold',
//         backgroundColor: theme.colors.gray[100],
//         color: '#000',
//         borderRadius: '20px',

//         '&:hover': {
//           backgroundColor: theme.colors.gray.dark,
//           color: '#fff',
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export const OutlineButton = (props: any) => {
//   return (
//     <Button
//       onClick={props.onClick}
//       variant="outline"
//       {...props}
//       sx={{
//         fontWeight: 'lighter',
//         borderColor: theme.colors.blue.light,
//         color: props.color ? props.color : theme.colors.blue.dark,
//         borderRadius: '20px',
//         '&:hover': {
//           backgroundColor: theme.colors.blue[100],
//         },
//       }}
//     />
//   );
// };

// export const LinkButton = (props: any) => {
//   return (
//     <UnstyledButton
//       onClick={props.onClick}
//       variant="outline"
//       {...props}
//       sx={{
//         color: props.color,
//         '&:hover': {
//           textDecoration: 'underLine',
//         },
//       }}
//     />
//   );
// };
