import { Text } from '@mantine/core';
import { Link } from '@mongez/react-router';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import { Flex } from 'design-system/components/Flex';
import Icons from 'shared/assets/svgs';

interface Iprops {
  settings?: any;
  // address: string;
  // email: string;
  // phoneNumber: string;
  // icon: string;
}

export default function ContactUsSettings({ settings }: Iprops) {
  console.log(settings);
  const settingsList = [
    {
      url: `https://www.google.com.eg/maps/?q=${settings.address}`,
      text: settings?.address,
      icon: Icons.AddressIcon,
      target: '_blank',
    },
    {
      url: `mailto:${settings.email}`,
      text: settings?.email,
      icon: Icons.SettingsEmailIcon,
      target: '_blank',
    },
    {
      url: `tel:${settings.phoneNumber}`,
      text: settings?.phoneNumber,
      icon: Icons.PhoneNumberIcon,
      target: null,
    },
  ];

  return (
    <>
      <Flex flexDirection="column" alignItems="flex-start">
        {settingsList.map((setting, index) => (
          <Link
            href={setting.url}
            underline="none"
            key={index}
            target={setting.target}
          >
            <Flex justifyContent="flex-start">
              <Text>{setting.text}</Text>
              <SMIcon src={setting.icon} />
            </Flex>
          </Link>
        ))}
      </Flex>
    </>
  );
}
