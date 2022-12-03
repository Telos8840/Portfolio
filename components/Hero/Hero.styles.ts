import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(./images/colors_bg.jpeg)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,

    [theme.fn.smallerThan('sm')]: {
      backgroundImage: 'url(./images/colors_bg_mobile.jpeg)',
    },
  },

  container: {
    position: 'relative',
    height: '100%',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('sm')]: {
      marginRight: 15,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  name: {
    display: 'block',
  },

  typewriter: {
    fontSize: 40,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 22,
    },
  },
}));

export default useStyles;
