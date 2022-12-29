import { Group, Input, Textarea } from '@mantine/core';
import { Flex } from 'design-system/components/Flex';
import EmailInput from 'design-system/components/input/EmailInput';
import NumberInput from 'design-system/components/input/NumberInput';
import PasswordInput from 'design-system/components/input/PasswordInput';
import TextareaInput from 'design-system/components/input/TextareaInput';
import TextInput from 'design-system/components/input/TextInput';
import NewSection from 'design-system/components/Sections/NewSection';
import mediaQueries from 'shared/constants/mediaQueries';
import URLS from '../../utils/urls';

const { tablet } = mediaQueries;
export const ContactUsPage = () => (
  <NewSection
    title="contactUs"
    helmetTitle="contactUs"
    links={[
      { label: 'home', value: URLS.home },
      { label: 'contactUs', value: URLS.contactUs },
    ]}
    titleOrder={5}
  >
    <Flex justifyContent="space-between">
      <Group
        sx={{
          flexBasis: '50%',
          [tablet]: {
            flexBasis: '100%',
          },
        }}
      >
        <TextInput label="firstName" component={Input} />
        <TextInput label="lastName" />
        <EmailInput label="email" helper={<div>invalid</div>} />
        <TextInput label="messageLabel" />
        <TextareaInput label="label" componente={Textarea} />
        <NumberInput label="number" />
        <PasswordInput label="password" />
      </Group>

      <Flex>
        {/* <ContactUsSettings
          settings={{
            address: 'bnm',
            email: 'm@gmail.com',
            phoneNumber: '345678',
          }}
        /> */}
      </Flex>
    </Flex>
  </NewSection>
);
