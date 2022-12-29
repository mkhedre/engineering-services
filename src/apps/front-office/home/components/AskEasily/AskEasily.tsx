import { Stack } from '@mantine/core';
import { trans } from '@mongez/localization';
import Text from 'design-system/components/Text';
import theme from 'design-system/theme';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { LandingContent, LayoutWrapper } from './Styles';

const AskEasily = () => {
  const { tabletScreen } = useBreakpoints();

  return (
    <LayoutWrapper>
      <LandingContent>
        <Stack spacing={10}>
          <Text
            element="subHeading"
            text={trans('doProjectsRemotely')}
            color={theme.colors.SECONDARY.main}
            fontSize={tabletScreen ? '15px' : '25px'}
          />
          <Text
            element="heading"
            text={trans('askEasly')}
            color={theme.colors.PRIMARY.main}
            fontSize={tabletScreen ? '21px' : '42px'}
            weight={800}
          />
          <Text
            text={trans('askAny')}
            color={theme.colors.gray.dark}
            fontSize={tabletScreen ? '12px' : '22px'}
          />
        </Stack>
      </LandingContent>
    </LayoutWrapper>
  );
};

export default AskEasily;
