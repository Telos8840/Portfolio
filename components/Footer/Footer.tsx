import { Container, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import useStyles, { ImageContainer } from './Footer.styles';

export function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container size="xs" className={classes.inner}>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            <Image radius="xl" src="./images/misty.jpg" alt="Misty" caption="In Memory of Misty" />
          </ImageContainer>
        </motion.div>
      </Container>
    </footer>
  );
}
