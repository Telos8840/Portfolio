import { Stack } from '@mantine/core';
import styled from '@emotion/styled';

export const ExperienceContainer = styled('section')`
  margin: 100px auto;

  button[data-active='true'] {
    background-color: rgba(24, 100, 171, 0.25);
  }
`;

export const Panel = styled(Stack)`
  margin-left: 16px;
  gap: 0;
`;
