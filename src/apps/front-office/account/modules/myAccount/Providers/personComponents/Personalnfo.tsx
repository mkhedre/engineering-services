import { Group, NumberInput, Select, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';
import FileInput from 'design-system/components/input/FileInput';
import mediaQueries from 'shared/constants/mediaQueries';

const { smallmobile } = mediaQueries;
export default function Personalnfo() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40}>
        {trans('personalInfo')}
      </Text>
      <TextInput name="fullName" label={trans('fullName')} my={20} size="md" />
      <NumberInput
        name="phone"
        label={trans('phone')}
        hideControls
        my={20}
        size="md"
      />
      <FileInput label={trans('img_cv')} required />
      <Group
        my={20}
        sx={{ flexWrap: 'nowrap', [smallmobile]: { flexWrap: 'wrap' } }}
      >
        <NumberInput hideControls label={trans('nationalNum')} size="md" />
        <Select
          data={['man', 'woman']}
          label={trans('nationalType')}
          size="md"
        />
        <DatePicker
          inputFormat="MM/DD/YYYY"
          labelFormat="MM/YYYY"
          defaultValue={new Date()}
          label={trans('nationalDate')}
          size="md"
        />
      </Group>
    </>
  );
}
