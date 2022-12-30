import { createStyles, Container, Title, Text, Button, Group, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },

  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    opacity: 0.75,
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: 150,
    },
  },

  content: {
    paddingTop: 300,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 300,
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 450,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 450,
    },
  },
}));

export const NothingFoundBackground = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Image src="./images/404.svg" alt="404 Error" className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>You have found a secret place</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Unfortunately, this is only a 404 page. You may have mistyped the address, or the page
            does not exist.
          </Text>
          <Group position="center">
            <Button variant="subtle" size="md" component="a" href="/">
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NothingFoundBackground;
