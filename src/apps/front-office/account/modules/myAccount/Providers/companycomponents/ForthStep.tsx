import { NumberInput, Select, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';
import FileInput from 'design-system/components/input/FileInput';

export default function ForthStep() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40} my={20}>
        {trans('ForthStepInfo')}
      </Text>
      <FileInput label={trans('forthfiles')} />
      <NumberInput
        name="builderNumber"
        label={trans('builderNumber')}
        hideControls
        my={20}
        size="md"
      />
      <DatePicker
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
        label={trans('builderEndDate')}
        size="md"
        my={20}
      />
      <Select
        my={20}
        data={[]}
        size="md"
        label={trans('addedValueCertificate')}
      />
    </>
  );
}
