import { createStyles, Stack } from '@mantine/core';
import styled from '@emotion/styled';

export const ExperienceContainer = styled('section')`
  margin-top: 100px;
  padding-bottom: 100px;

  button[data-active='true'] {
    background-color: rgba(24, 100, 171, 0.25);
  }
`;

export const Panel = styled(Stack)`
  margin-left: 16px;
  gap: 0;
`;

const useStyles = createStyles((theme) => ({
  tabList: {
    [theme.fn.smallerThan('xs')]: {
      flexWrap: 'nowrap',
      overflowX: 'auto',
      marginBottom: 24,
    },
  },
}));

export default useStyles;
