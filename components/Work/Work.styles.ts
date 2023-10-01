import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';

export const WorkContainer = styled.article`
  overflow: hidden;
  margin: 100px auto;
`;

const useStyles = createStyles((theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    marginTop: theme.spacing.xl,

    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },

  control: {
    '&[data-inactive]': {
      opacity: 0,
      cursor: 'default',
    },
  },

  card: {
    backgroundColor: theme.colors.dark[6],
    height: 510,

    [theme.fn.largerThan('sm')]: {
      height: 540,
    },

    [theme.fn.largerThan('lg')]: {
      height: 550,
    },
  },

  image: {
    img: {
      minHeight: 232,

      [theme.fn.largerThan('sm')]: {
        minHeight: 287,
      },
    },
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  carousel: {
    marginTop: theme.spacing.xl,
  },

  link: {
    color: theme.colors.indigo[2],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export default useStyles;
