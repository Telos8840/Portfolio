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

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
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

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 450,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  link: {
    margin: '0 6px',
    fontSize: 18,
  },

  button: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
