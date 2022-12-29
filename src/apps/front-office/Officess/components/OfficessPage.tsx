import { ActionIcon, Col, Grid, Paper } from '@mantine/core';
import MainPagination from 'design-system/components/Pagination';
import NewSection from 'design-system/components/Sections/NewSection';
import Layer from 'shared/assets/images/Layer.png';
import Icons from 'shared/assets/svgs';
import OfficeCard from '../../home/components/BestOffices/OfficeCard';
import URLS from '../../utils/urls';

const data = [
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
  {
    image: Layer,
    text: 'مكتب الهندسة المعمارية قسم العمارة',
    rate: '4.6',
    address: 'address',
  },
];
const Star = () => (
  <ActionIcon size={8} radius="sm" variant="transparent">
    <img src={Icons.Star} />
  </ActionIcon>
);

const OfficessPage = () => {
  return (
    <NewSection
      helmetTitle="engineeringOfficess"
      links={[
        { label: 'home', value: URLS.home },
        { label: 'engineeringOfficess', value: URLS.engineeringOfficess.root },
      ]}
      title="StudioPlatformSections"
      titleOrder={2}
      subtitle="browseSections"
    >
      <Grid mt={20}>
        {data.map(({ image, address, rate, text }, index) => (
          <Col lg={3} md={4} xs={6}>
            <OfficeCard
              id={index}
              key={index}
              img={image}
              address={address}
              rate={rate}
              text={text}
              icon={<Star />}
            />
          </Col>
        ))}
      </Grid>
      <Paper py={30}>
        <MainPagination />
      </Paper>
    </NewSection>
  );
};

export default OfficessPage;
