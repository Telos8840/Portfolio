import { Anchor, AnchorProps, createStyles, SimpleGrid } from '@mantine/core';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const AboutMeContainer = styled.article`
  overflow: hidden;
  margin: 0 auto 100px auto;
`;

interface LinkProps extends AnchorProps {
  href: string;
  target?: string;
  rel?: string;
}

export const Link = styled(Anchor)<LinkProps>(
  ({ theme }) => css`
    margin: 0 6px;
    color: ${theme.colors.lime[6]};

    &:visited {
      color: ${theme.colors.lime[9]};
    }
  `
);

export const TechGrid = styled(SimpleGrid)(
  ({ theme }) => css`
    margin-top: 10px;
    padding: 0 25px;

    ${theme.fn.largerThan('sm')} {
      padding: 0 50px;
    }
  `
);

const useStyles = createStyles((theme) => ({
  portfolioPic: {
    width: '100%',

    [theme.fn.largerThan('sm')]: {
      width: '100%',
    },

    [theme.fn.largerThan('lg')]: {
      width: 350,
    },
  },
}));

export default useStyles;
