import {
  FileInput,
  NumberInput,
  Paper,
  Select,
  Space,
  Text,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { trans } from '@mongez/localization';
import Button from 'design-system/components/Button';

export default function BankInfo() {
  return (
    <Paper w={'70%'} mt={30}>
      <Text>{trans('Selectthebank')}</Text>
      <Select data={['bank']} my="md" />
      <TextInput placeholder={trans('AccountHolderName')} />
      <NumberInput
        name="accountNum"
        placeholder={trans('AccountNumber')}
        hideControls
        my="md"
      />
      <NumberInput name="" placeholder={trans('IBANNumber')} hideControls />
      <Space h={40} />
      <Text size="lg" mb={20}>
        {trans('Enteryourdetails')}
      </Text>
      <TextInput label={trans('userName')} my="md" />
      <NumberInput
        name=""
        placeholder={trans('Accountnumbertransferredfrom')}
        label={trans('Accountnumbertransferredfrom')}
        hideControls
      />
      <DatePicker
        placeholder={trans('ExpiryDate')}
        label={trans('ExpiryDate')}
        required
        my="md"
      />
      <TextInput label={trans('Bankfrom')} />
      <NumberInput
        name="Payment"
        placeholder={trans('Payment')}
        label={trans('Payment')}
        hideControls
        my="md"
      />
      <DatePicker
        placeholder={trans('ConversionDate')}
        label={trans('ConversionDate')}
        withAsterisk
      />
      <TextInput
        label={trans('Observations')}
        placeholder={trans('Observations')}
        my="md"
      />
      <FileInput label={trans('Attachimage')} mb="md" />
      <Button text={trans('PaymentConfirmation')} />
    </Paper>
  );
}
