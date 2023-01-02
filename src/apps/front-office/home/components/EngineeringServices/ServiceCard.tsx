import { Card, Image, Text } from '@mantine/core';
import { Link } from '@mongez/react-router';
import Button from 'design-system/components/Button';

interface CardProps {
  id?: any;
  img?: string;
  text?: string;
  head?: string;
}
const ServiceCard = ({ id, img, head, text }: CardProps) => {
  return (
    <Card component={Link} to={`/engineering-officess/${id}`} shadow="sm">
      <Card.Section p={15}>
        <Image src={img} alt={text} />
      </Card.Section>
      <Card.Section px={45} py={10} pb={20}>
        <Text size="xl" pb={10}>
          {head}
        </Text>
        <Text size="sm" pb={20} sx={{ maxHeight: '50px', overflow: 'hidden' }}>
          {text}
        </Text>
        <Button
          variant="transparent"
          text="exploreCompanies"
          style={{ marginTop: '20px' }}
        />
      </Card.Section>
    </Card>
  );
};

export default ServiceCard;
