import {
  lengthRule,
  matchElementRule,
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from '@mongez/validator';
import BaseInput, { BaseInputProps } from './BaseInput';
export default function PasswordInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

PasswordInput.defaultProps = {
  type: 'password',
  rules: [
    requiredRule,
    minLengthRule,
    lengthRule,
    maxLengthRule,
    matchElementRule,
  ],
};
