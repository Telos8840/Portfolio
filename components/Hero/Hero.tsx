import { Container, Title, Text, Button, Anchor } from '@mantine/core';
import { ArrowNarrowDown } from 'tabler-icons-react';
import { useMediaQuery } from '@mantine/hooks';
import useStyles from './Hero.styles';

export const Hero = () => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 768px)');

  const textGradient = mobileScreen
    ? { from: 'red', to: 'yellow', deg: 45 }
    : { from: 'indigo', to: 'green', deg: 45 };

  const buttonGradient = mobileScreen
    ? { from: 'indigo', to: 'green', deg: 45 }
    : { from: 'red', to: 'yellow', deg: 45 };

  return (
    <div className={classes.root}>
      <Container size="lg" className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hey! My name is{' '}
              <Text component="span" inherit variant="gradient" gradient={textGradient}>
                Saul Guardado
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30} size="lg">
              I&apos;m a Senior Software Engineer specializing in building consumer facing products.
              I&apos;m currently working on the redesigned
              <Anchor className={classes.link} href="https://www.fxnetworks.com" target="_blank">
                FX Networks
              </Anchor>
              website.
            </Text>

            <Button
              variant="gradient"
              gradient={buttonGradient}
              size="xl"
              className={classes.button}
              mt={40}
              rightIcon={<ArrowNarrowDown size={30} strokeWidth={2} />}
            >
              More About Me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
