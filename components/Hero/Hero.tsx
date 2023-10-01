import { useEffect, useState } from 'react';
import { Container, Title, Text, Stack, Code } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import useStyles, { HeroContainer } from './Hero.styles';

export const Hero = () => {
  const { classes } = useStyles();
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const { start, clear } = useTimeout(() => setStartAnimation(true), 100);

  useEffect(() => {
    start();

    return () => {
      clear();
    };
  }, []);

  const [text] = useTypewriter({
    words: [
      'Principal Software Engineer',
      'Lead Software Engineer',
      'Full Stack Developer',
      'NextJS Fanatic',
      'React Expert',
      'TypeScript Enthusiast',
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
    <HeroContainer className={startAnimation ? 'animate' : ''}>
      <Container size="lg" className={classes.container}>
        <motion.div
          className={classes.inner}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 1.2,
          }}
        >
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
        </motion.div>
      </Container>
    </HeroContainer>
  );
};
