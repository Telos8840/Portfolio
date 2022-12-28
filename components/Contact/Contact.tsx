import { MutableRefObject } from 'react';
import { Divider, Text, Title, Stack, Button } from '@mantine/core';
import { IconBrandGmail } from '@tabler/icons';
import { motion } from 'framer-motion';
import useStyles, { ContactContainer } from './Contact.styles';

interface ContactProps {
  contactRef: MutableRefObject<HTMLElement>;
}

export const Contact = ({ contactRef }: ContactProps) => {
  const { classes } = useStyles();

  return (
    <ContactContainer id="contact" ref={contactRef}>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title order={2}>
          <Text
            variant="gradient"
            gradient={{ from: 'orange.9', to: 'yellow.4', deg: 35 }}
            inherit
            component="span"
          >
            Contact
          </Text>
        </Title>
        <Divider my="sm" size="sm" />
        <motion.div
          initial={{
            y: -25,
            opacity: 0,
          }}
          transition={{
            duration: 1.0,
            delay: 0.7,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Stack align="center" spacing="xl">
            <Text fz="xl" ta="center" className={classes.text}>
              Although I&apos;m not actively looking for any new opportunities at the moment,
              I&apos;m always open to discussing new project ideas, potential freelancing, or
              trading music recommendations. If you have any questions or just want to say hi, feel
              free to email me.
            </Text>
            <Button
              component="a"
              href="mailto:seguardado88@gmail.com"
              size="xl"
              variant="gradient"
              gradient={{ from: 'orange.9', to: 'yellow.9', deg: 35 }}
              leftIcon={<IconBrandGmail />}
            >
              Email Me
            </Button>
          </Stack>
        </motion.div>
      </motion.div>
    </ContactContainer>
  );
};
