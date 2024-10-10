import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, ActionIcon, Drawer } from '@mantine/core';
import { useDebouncedState, useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub, IconFileDownload } from '@tabler/icons';
import useStyles, {
  NavHeader,
  InnerContainer,
  Hamburger,
  LinkContainer,
  SocialContainer,
  MobileLinkContainer,
} from './Navigation.styles';

interface LinkProps {
  link: string;
  label: string;
  scrollFunction: () => void;
}

interface NavigationProps {
  links: LinkProps[];
}

const Navigation = ({ links }: NavigationProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const [active, setActive] = useState<string>('');
  const [navScrolled, setNavScrolled] = useDebouncedState(false, 50);
  const { classes, cx } = useStyles();

  useEffect(() => {
    if (scroll.y > 100 && !navScrolled) {
      setNavScrolled(true);
    } else if (scroll.y < 100 && navScrolled) {
      setNavScrolled(false);
    }
  }, [scroll]);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setActive(link.link);
        link.scrollFunction();

        if (opened) {
          toggle();
        }
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <NavHeader className={navScrolled ? 'scrolled' : ''} height={56} fixed>
      <InnerContainer size="lg">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 1.5,
          }}
        >
          <Hamburger opened={opened} onClick={toggle} size="sm" />
          <Drawer
            opened={opened}
            onClose={() => toggle()}
            overlayOpacity={0.55}
            overlayBlur={3}
            padding="sm"
            size="sm"
          >
            <MobileLinkContainer spacing={5}>{items}</MobileLinkContainer>
          </Drawer>

          <LinkContainer spacing={5}>{items}</LinkContainer>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 1.5,
          }}
        >
          <SocialContainer spacing={5} position="right" noWrap>
            <ActionIcon
              component="a"
              href="https://drive.google.com/file/d/1CUkh0ykjTf2kIe-9CJ37ZttH_wJva5iZ/view?usp=sharing"
              target="_blank"
              rel="noopener"
              size="lg"
            >
              <IconFileDownload size={28} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/seguardado/"
              target="_blank"
              rel="noopener"
              size="lg"
            >
              <IconBrandLinkedin size={28} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://github.com/telos8840"
              target="_blank"
              rel="noopener"
              size="lg"
            >
              <IconBrandGithub size={28} stroke={1.5} />
            </ActionIcon>
          </SocialContainer>
        </motion.div>
      </InnerContainer>
    </NavHeader>
  );
};

export default Navigation;
