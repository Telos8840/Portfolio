import { useState } from 'react';
import { Card, Image, Text, Group, Badge, ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';
import useStyles from './Work.styles';

interface WorkCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
  badges: string[];
}

const WorkCard = ({ image, title, link, description, badges }: WorkCardProps) => {
  const { classes, theme } = useStyles();
  const [cursorDown, setCursorDown] = useState<boolean>(false);

  const features = badges.map((badge) => (
    <Badge key={badge} variant="gradient" gradient={{ from: 'indigo.9', to: 'violet.4', deg: 135 }}>
      {badge}
    </Badge>
  ));

  return (
    <Card
      style={{ cursor: cursorDown ? 'grabbing' : 'grab' }}
      withBorder
      radius="md"
      p="md"
      className={classes.card}
      onPointerDown={() => setCursorDown(true)}
      onPointerUp={() => setCursorDown(false)}
    >
      <Card.Section className={title.includes('GAAD') ? classes.gaad : ''}>
        <Image src={image} alt={title} fit="fill" />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text
            size="lg"
            weight={500}
            variant="gradient"
            gradient={{ from: 'indigo.0', to: 'indigo.3', deg: 25 }}
          >
            {title}
          </Text>
          <ActionIcon color="indigo.0" size={36} component="a" href={link}>
            <IconExternalLink size={18} className={classes.link} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} mt={theme.spacing.md}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
};

export default WorkCard;
