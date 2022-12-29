import { Card, Center, Image, Text } from '@mantine/core';

interface CardProps {
  id?: any;
  img?: string;
  text?: string;
}
const CategoryCard = ({ id, img, text }: CardProps) => {
  return (
    <Card component="a" href={`/category/${id}`}>
      <Card.Section>
        <Image src={img} alt={text} />
      </Card.Section>
      <Card.Section sx={{ backgroundColor: '#F2F3F5' }}>
        <Center py={15}>
          <Text>{text}</Text>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default CategoryCard;
