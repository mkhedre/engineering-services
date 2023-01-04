import { Anchor, Box, createStyles, Flex, Stepper, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import theme from 'design-system/theme';

const useStyles = createStyles(() => ({
  stepLabel: {
    color: theme.colors.SUCCESS,
  },
  verticalSeparator: {
    border: `1px dashed #C9CFD9`,
  },
  stepLoader: {
    color: theme.colors.PRIMARY.main,
    backgroundColor: theme.colors.PRIMARY.main,
    zIndex: 2,
  },
  stepIcon: {
    backgroundColor: theme.colors.PRIMARY.main,
    color: '#fff',
    '&[data-progress]': {
      backgroundColor: theme.colors.blue.main,
    },
  },
}));
export default function CompanyLine({ active }: any) {
  const { classes } = useStyles();
  return (
    <>
      <Flex align="center" mt={50}>
        <Stepper
          radius="md"
          active={active}
          orientation="vertical"
          classNames={classes}
        >
          <Stepper.Step
            label={trans('accountType')}
            description={trans('selectAccountType')}
            pb={50}
          />
          <Stepper.Step
            label={trans('cayanInfo')}
            description={trans('numOfcayan')}
            pb={50}
          />
          <Stepper.Step
            label={trans('thirData')}
            description={trans('datacomplete')}
            pb={50}
          />
          <Stepper.Step
            label={trans('forthData')}
            description={trans('classify')}
            pb={50}
          />
          <Stepper.Step
            label={trans('fifthData')}
            description={trans('etemadData')}
            pb={50}
          />
        </Stepper>
      </Flex>
      <Box pl={20}>
        <Text weight="bold" color="dimmed">
          {trans('knowall')}
        </Text>
        <Anchor href="https://mantine.dev/" target="_blank" weight="bold">
          {trans('clickHere')}
        </Anchor>
      </Box>
    </>
  );
}
