import {
  lengthRule,
  maxLengthRule,
  maxRule,
  minLengthRule,
  minRule,
  patternRule,
  requiredRule,
} from '@mongez/validator';
import BaseInput, { BaseInputProps } from './BaseInput';

export default function TextInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

TextInput.defaultProps = {
  type: 'text',
  rules: [
    requiredRule,
    minLengthRule,
    maxLengthRule,
    lengthRule,
    minRule,
    maxRule,
    patternRule,
  ],
};
