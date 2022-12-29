import { trans } from '@mongez/localization';
import {
  FormInputProps,
  InputError as InputErrorType,
} from '@mongez/react-form';

export type InputErrorProps = {
  error: InputErrorType;
  props?: FormInputProps;
};

export default function InputError({ error, props }: InputErrorProps) {
  if (error === null) return null;

  return <div>{trans(error?.errorMessage)}</div>;
}

InputError.defaultProps = {};
