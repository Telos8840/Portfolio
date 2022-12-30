import { createStyles } from '@mantine/core';
import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  width: 350px;
`;

const useStyles = createStyles((theme) => ({
  footer: {
    overflow: 'hidden',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: theme.colors.dark[9],
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
