import { createStyles, Input } from '@mantine/core';
import { trans } from '@mongez/localization';
import { FormInputProps, useFormInput } from '@mongez/react-form';
import React from 'react';
import mediaQueries from 'shared/constants/mediaQueries';
import theme from '../../theme';

export type BaseInputProps = FormInputProps & {
  rounded?: boolean;
  icon?: React.ReactNode;
  iconEnd?: boolean;
  helper?: React.ReactNode;
  inputAppend?: React.ReactNode;
  noAutoComplete?: boolean;
};
const { laptop, largmobile } = mediaQueries;

export default function BaseInput({
  inputAppend,
  helper,
  icon,
  iconEnd,
  rounded,
  noAutoComplete,
  component: Component,
  excludeFromOtherProps = {},
  ...props
}: BaseInputProps) {
  const {
    name,
    id,
    value,
    label,
    placeholder,
    required,
    disabled,
    onChange,
    onBlur,
    error,
    type,
    visibleElementRef,
    className,
    otherProps,
  } = useFormInput(props, {
    excludeFromOtherProps,
  });

  const useStyles = createStyles(() => ({
    root: {
      // direction: current('localeCode') === 'ar' ? 'rtl' : 'ltr',
      borderColor: theme.colors.PRIMARY.main,
      backgroundColor: `${theme.colors.inputBackground}`,
      border: 'none',
      borderRadius: '7px',
      padding: '1.5rem',
      outline: 'none',
      '&:focus': {
        border: `1px solid ${
          error ? theme.colors.red.main : theme.colors.PRIMARY.main
        }`,
      },
      [laptop]: {
        fontSize: '1rem',
        padding: ' 1.5rem',
        '&::placholder': {
          fontSize: '1rem',
        },
      },
      [largmobile]: {
        fontSize: '.9rem',
        padding: '.6rem 1.4375rem',
        '&::placholder': {
          fontSize: '.9rem',
        },
      },
    },
    label: {
      fontFamily: 'Neo Sans W23',
      fontWeight: 'normal',
      fontSize: '16',
    },
  }));
  const { classes } = useStyles();
  return (
    <>
      <div ref={visibleElementRef as any}>
        <Input.Wrapper
          classNames={{
            label: classes.label,
          }}
          required={required}
          label={trans(label as any)}
        >
          <Component
            classNames={{
              input: classes.root,
            }}
            id={id}
            disabled={disabled}
            name={name}
            autoComplete={
              noAutoComplete
                ? type === 'password'
                  ? 'new-password'
                  : 'off'
                : undefined
            }
            placeholder={placeholder as string}
            onChange={onChange}
            onBlur={onBlur as any}
            value={value}
            type={type}
            className={className}
            {...otherProps}
          />
          {icon}
          {inputAppend}

          {helper && <div className="form-text">{helper}</div>}
          {/* {error && <InputError error={error} />} */}
        </Input.Wrapper>
      </div>
    </>
  );
}

BaseInput.defaultProps = {
  component: Input,
};
