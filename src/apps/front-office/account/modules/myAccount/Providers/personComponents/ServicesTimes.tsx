import { Select, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';

export default function ServicesTimes() {
  return (
    <>
      <Text weight="bold" size="lg" mt={40} mb={20}>
        {trans('services_times')}
      </Text>
      <Select
        data={[]}
        size="md"
        label={trans('category')}
        placeholder={trans('addCategory')}
      />
      <DatePicker
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
        label={trans('workDays')}
        size="md"
        my={20}
      />
    </>
  );
}
