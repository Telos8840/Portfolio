import styled from '@emotion/styled';
import { createStyles } from '@mantine/core';

export const ContactContainer = styled.article`
  overflow: hidden;
  margin: 100px auto 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 720px;
`;

const useStyles = createStyles((theme) => ({
  text: {
    padding: 0,

    [theme.fn.largerThan('sm')]: {
      padding: '0 20px',
    },
  },
}));

export default useStyles;
