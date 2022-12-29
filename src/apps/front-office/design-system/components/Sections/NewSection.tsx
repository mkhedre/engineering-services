import { Container, createStyles, Text, Title } from '@mantine/core';
import { trans } from '@mongez/localization';
import Helmet, { HelmetProps } from '@mongez/react-helmet';
import React from 'react';
import mediaQueries from 'shared/constants/mediaQueries';
import { CustomBreadcumbs } from '../Breadcrumbs';

const { tablet } = mediaQueries;

type linkType = {
  label: string;
  value: string;
};

type NewSectionProps = {
  links?: linkType[];
  titleOrder?: number | any;
  title?: string;
  helmetTitle?: string;
  helmetProps?: HelmetProps;
  children?: React.ReactNode | React.ReactNode[];
  subtitle?: string;
};

const useStyles = createStyles((theme) => ({
  inner: {
    position: 'relative',
    background: '#fff',
    width: '100%',
    maxHeight: 'calc(100vh -250px)',
    padding: '10px 40px',
    [tablet]: {
      padding: '20px ',
    },
  },
  title: {
    color: theme.colors.gray,
    fontWeight: 'normal',
    marginBottom: '15px',
  },
}));
const NewSection = ({
  links,
  titleOrder,
  title,
  children,
  helmetProps,
  helmetTitle,
  subtitle,
}: NewSectionProps) => {
  const { classes } = useStyles();

  //   if (error || loading) {
  //     return <ErrorHAndler />;
  //   }
  return (
    <Container size="xl" className={classes.inner}>
      {/* guadians */}

      {/* Helmet */}
      {(helmetTitle || helmetProps) && (
        <Helmet
          {...{
            helmetProps,
            title: trans(helmetTitle || helmetProps?.title || ''),
          }}
          appendAppName={false}
        />
      )}
      {/* BreadCrams */}
      <CustomBreadcumbs data={links} />

      <Container size="lg">
        {title && (
          <Title order={titleOrder} className={classes.title} mb={10}>
            {trans(title)}
          </Title>
        )}
        {subtitle && <Text color="dimmed">{trans(subtitle)}</Text>}
      </Container>
      {children}
    </Container>
  );
};

export default NewSection;
