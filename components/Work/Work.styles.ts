import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';

export const WorkContainer = styled.section`
  overflow: hidden;
  margin: 100px auto;
`;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[6],
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
