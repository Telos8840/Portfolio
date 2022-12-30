import { MutableRefObject, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Divider, Progress, Text, Title } from '@mantine/core';
import data from '@content/work.json';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import useStyles, { WorkContainer } from './Work.styles';

interface WorkProps {
  workRef: MutableRefObject<HTMLElement>;
}

export const Work = ({ workRef }: WorkProps) => {
  const { work } = data;
  const { classes } = useStyles();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const slides = work.map((item, index) => (
    <Carousel.Slide key={item.title}>
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: index < 2 ? 1.2 : 0.7,
          delay: index < 2 ? index * 0.5 : 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <WorkCard {...item} />
      </motion.div>
    </Carousel.Slide>
  ));

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <WorkContainer id="work" ref={workRef}>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
          delay: 0.3,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title order={2}>
          <Text
            variant="gradient"
            gradient={{ from: 'indigo.9', to: 'violet.2', deg: 75 }}
            inherit
            component="span"
          >
            Work
          </Text>
        </Title>
        <Divider my="sm" size="sm" />
        <Carousel
          className={classes.carousel}
          slideSize="50%"
          align="start"
          slideGap="xl"
          controlsOffset="xs"
          withControls={false}
          getEmblaApi={setEmbla}
          dragFree
          breakpoints={[
            { maxWidth: 'md', slideSize: '60%' },
            { maxWidth: 'sm', slideSize: '100%' },
          ]}
        >
          {slides}
        </Carousel>
        <Progress
          color="indigo.4"
          value={scrollProgress}
          styles={{ bar: { transitionDuration: '0ms' }, root: { maxWidth: 320 } }}
          size="sm"
          mt="xl"
          mx="auto"
        />
      </motion.div>
    </WorkContainer>
  );
};
