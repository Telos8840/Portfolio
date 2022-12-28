import { MutableRefObject } from 'react';
import { Divider, Grid, Group, Image, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconChevronsRight } from '@tabler/icons';
import useStyles, { AboutMeContainer, Link, TechGrid } from './AboutMe.styles';

interface AboutMeProps {
  aboutRef: MutableRefObject<HTMLElement>;
}
export const AboutMe = ({ aboutRef }: AboutMeProps) => {
  const { classes, theme } = useStyles();

  const getNumOfYears = () => {
    const date1 = new Date('July 1, 2012');
    const date2 = new Date();
    return date2.getFullYear() - date1.getFullYear();
  };

  const aboutMeText = `I've been a curiosity-driven person since childhood and always wanted to learn how
            things work. To this day, I still enjoy learning about new topics and keeping up to date
            with all the latest tech. This inquisitiveness has fueled my passion for Software over
            the past ${getNumOfYears()} years.`;

  const frameworks = ['NextJS', 'React', 'TypeScript', 'Styled Components', 'GraphQL', 'Mantine'];

  return (
    <AboutMeContainer id="about-me" ref={aboutRef}>
      <Grid gutter="lg" align="center">
        <Grid.Col xs={12} sm={4} md={5}>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={classes.portfolioPic}
          >
            <Image radius="lg" src="./images/profile_pic.png" alt="Saul Guardado Profile Picture" />
          </motion.div>
        </Grid.Col>
        <Grid.Col xs={12} sm={8} md={7}>
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Title order={2}>
              <Text
                variant="gradient"
                gradient={{ from: 'cyan', to: 'lime', deg: 75 }}
                inherit
                component="span"
              >
                About Me
              </Text>
            </Title>
            <Divider my="sm" size="sm" />
            <Text size="lg">{aboutMeText}</Text>
            <Text size="lg" mt="sm">
              I&apos;ve worked on many projects ranging from small start-ups, to volunteering for
              non-profits, all the way through large consumer facing applications for major sports,
              news, and entertainment companies.
            </Text>
            <Text size="lg" mt="sm">
              At the moment, I&apos;m leading the re-architectured redesign of the
              <Link href="https://www.fxnetworks.com" target="_blank" rel="noopener">
                FX Networks
              </Link>
              website.
            </Text>
            <Text size="lg" mt="sm">
              These a few things I&apos;ve been enjoying working with lately:
            </Text>
            <TechGrid cols={2} spacing="xs">
              {frameworks.map((framework) => (
                <Group key={framework} noWrap spacing={5}>
                  <IconChevronsRight stroke={1.5} size={16} color={theme.colors.lime[6]} />
                  <Text size="sm">{framework}</Text>
                </Group>
              ))}
            </TechGrid>
          </motion.div>
        </Grid.Col>
      </Grid>
    </AboutMeContainer>
  );
};
