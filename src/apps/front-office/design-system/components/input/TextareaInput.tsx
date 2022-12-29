import { requiredRule } from '@mongez/validator';
import BaseInput, { BaseInputProps } from './BaseInput';

export default function TextareaInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

TextareaInput.defaultProps = {
  rows: 5,
  type: 'textarea',
  rules: [requiredRule],
};
