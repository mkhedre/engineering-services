import { Breadcrumbs, Group } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Icons from 'shared/assets/svgs';
import theme from '../../theme';
import { SMIcon } from '../ColoredIcon/SMIcon';
import NavigationButton from '../NavigationButton';

type LinkType = {
  label: string;
  value: string;
};
type props = {
  data?: LinkType[];
  separator?: string;
};
// const useStyles = createStyles((theme)=>({
//   root:
// }))
export function CustomBreadcumbs({ data = [] }: props) {
  const items = data.map(({ label, value }: LinkType, index: number) => (
    <Link key={index} to={value}>
      {trans(label)}
    </Link>
  ));
  return (
    <Group
      align="center"
      spacing={0}
      sx={{
        padding: '20px 65px 20px 0',
      }}
    >
      <SMIcon
        src={Icons.HomeIcon}
        width={20}
        style={{ marginLeft: '3px', marginBottom: '4px' }}
      />
      <Breadcrumbs
        styles={{
          separator: { marginLeft: '0', marginRight: '0' },
          breadcrumb: {
            color: theme.colors.gray.main,
            textDecoration: 'none',
            '&:hover': { color: theme.colors.gray.dark },
            '&:active': { textDecoration: 'underLine' },
          },
        }}
        className="no-print"
        separator={<NavigationButton />}
      >
        {items}
      </Breadcrumbs>
    </Group>
  );
}
