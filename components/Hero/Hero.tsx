import { Container, Title, Text, Stack, Code } from '@mantine/core';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useStyles from './Hero.styles';

// TODO: Animate colors rendering down
// TODO: transition nav header

export const Hero = () => {
  const { classes } = useStyles();

  const [text] = useTypewriter({
    words: [
      'Senior Software Engineer',
      'Full Stack Developer',
      'React Expert',
      'Mentor',
      'Metalhead',
      'Guitar Shredder',
      'Homebrewer',
      'Vinyl Collector',
      'Gamer',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className={classes.root}>
      <Container size="lg" className={classes.container}>
        <div className={classes.inner}>
          <Stack className={classes.content} align="flex-start" justify="flex-start" spacing="md">
            <Title className={classes.title} order={1}>
              Hi there! My name is
              <Text
                className={classes.name}
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'green', deg: 45 }}
              >
                Saul Guardado
              </Text>
            </Title>

            <Code className={classes.typewriter} color="blue.9">
              {text}
              <Cursor />
            </Code>
          </Stack>
        </div>
      </Container>
    </section>
  );
};
