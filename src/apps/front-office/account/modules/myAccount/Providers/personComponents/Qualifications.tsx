import { NumberInput, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';
import FileInput from 'design-system/components/input/FileInput';

export default function Qualifications() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40}>
        {trans('Qualifications')}
      </Text>
      <NumberInput
        name=""
        label={trans('MembershipNumberoftheSaudi')}
        hideControls
        my={20}
        size="md"
      />
      <DatePicker
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
        label={trans('ExpiryDateofMembershipoftheSaudi')}
        size="md"
        my={20}
      />
      <FileInput label={trans('Degree_Proofof_practical')} required />
      <NumberInput
        hideControls
        label={trans('CertifiedBankAccountNumber')}
        size="md"
        my={20}
      />
    </>
  );
}
