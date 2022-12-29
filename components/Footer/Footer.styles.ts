import { createStyles } from '@mantine/core';
import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  width: 350px;
`;

export const AboutMeContainer = styled.section`
  overflow: hidden;
  margin: 100px auto;
`;

const useStyles = createStyles((theme) => ({
  footer: {
    overflow: 'hidden',
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.dark[9],
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
