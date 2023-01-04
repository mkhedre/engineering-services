import { NumberInput, Select, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';

export default function EntityInfo() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40}>
        {trans('entityInfo')}
      </Text>
      <TextInput name="" label={trans('entityName')} my={20} size="md" />
      <Select data={['man', 'woman']} label={trans('entityType')} size="md" />
      <NumberInput
        name="CommercialNumber"
        label={trans('CommercialNumber')}
        hideControls
        my={20}
        size="md"
      />
      <DatePicker
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
        label={trans('CommercialEndDate')}
        size="md"
      />
      <TextInput name="" label={trans('CommercialRole')} my={20} size="md" />
    </>
  );
}
