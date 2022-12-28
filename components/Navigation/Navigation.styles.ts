import { createStyles, Group, Container, Burger, Header } from '@mantine/core';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const NavHeader = styled(Header)(
  ({ theme }) => css`
    z-index: 2;
    background-color: transparent;
    border: none;
    transition: background-color 0.5s ease;

    &.scrolled {
      background-color: ${theme.colors.dark[9]};
    }
  `
);

export const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  overflow: hidden;
`;

export const Hamburger = styled(Burger)(
  ({ theme }) => css`
    margin-right: ${theme.spacing.md};

    ${theme.fn.largerThan('md')} {
      display: none;
    }
  `
);

export const LinkContainer = styled(Group)(
  ({ theme }) => css`
    ${theme.fn.smallerThan('md')} {
      display: none;
    }
  `
);

export const MobileLinkContainer = styled(Group)(
  ({ theme }) => css`
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;

    ${theme.fn.largerThan('md')} {
      display: none;
    }
  `
);

export const SocialContainer = styled(Group)(
  ({ theme }) => css`
    width: 260px;

    ${theme.fn.smallerThan('md')} {
      width: auto;
      margin-left: auto;
    }
  `
);

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

export default useStyles;
