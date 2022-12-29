import { maxRule, minRule, numberRule, requiredRule } from '@mongez/validator';
import BaseInput, { BaseInputProps } from './BaseInput';

export default function NumberInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

NumberInput.defaultProps = {
  type: 'number',
  rule: 'number',
  rules: [requiredRule, numberRule, minRule, maxRule],
};
