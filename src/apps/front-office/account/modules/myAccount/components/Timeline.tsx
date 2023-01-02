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
}));
export default function Line({ active }: any) {
  const { classes } = useStyles();
  return (
    <>
      <Flex align="center" h="80%">
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
            label={trans('personalInfo')}
            description={trans('img_cv')}
            pb={50}
          />
          <Stepper.Step
            label={trans('Qualifications')}
            description={trans('youDegree')}
            pb={50}
          />
          <Stepper.Step
            label={trans('services_times')}
            description={trans('workDays')}
            pb={50}
          />
          {/* <Stepper.Step
          label={trans('accountType')}
          lineVariant="dotted"
          bulletSize={40}
          bullet={<div>5</div>}
          pb={20} 
          pl={40}
        >
          <Text color="dimmed" size="sm">
            {trans('selectAccountType')}
          </Text>
        </Stepper.Step> */}
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
