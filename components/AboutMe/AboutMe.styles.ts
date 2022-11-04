import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    margin: '100px auto',
  },

  portfolioPic: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    margin: '0 6px',
  },
}));

export default useStyles;
