import { Avatar, createStyles, Group, Paper, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 10,
    paddingTop: theme.spacing.sm,
  },
}));

interface CommentSimpleProps {
  postedAt?: string;
  body?: string;
  author: {
    name?: string;
    image?: string;
  };
}

export default function Comment({
  postedAt,
  body,
  author,
}: CommentSimpleProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" p={40} mb={20}>
      <Group>
        <Group>
          <Avatar src={author.image} alt={author.name} radius="xl" />
          {/* <Rating defaultValue={2} /> */}
        </Group>
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {body}
      </Text>
    </Paper>
  );
}
