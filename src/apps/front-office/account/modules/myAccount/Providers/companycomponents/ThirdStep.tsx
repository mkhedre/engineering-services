import { NumberInput, Text, TextInput } from '@mantine/core';
import { trans } from '@mongez/localization';

export default function ThirdStep() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40}>
        {trans('ThirdStepInfo')}
      </Text>
      <TextInput name="email" label={trans('email')} my={20} size="md" />
      <NumberInput
        name="phone"
        label={trans('phone')}
        hideControls
        my={20}
        size="md"
      />
      <TextInput
        name="homeAddress"
        label={trans('homeAddress')}
        my={20}
        size="md"
      />
      <NumberInput
        hideControls
        label={trans('CertifiedBankAccountNumber')}
        my={20}
        size="md"
      />
      <NumberInput
        hideControls
        label={trans('commericalRoomNumber')}
        my={20}
        size="md"
      />
    </>
  );
}
