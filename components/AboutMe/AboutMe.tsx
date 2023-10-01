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

  const aboutMeText = `As a seasoned Software Engineer with ${getNumOfYears()} years of experience, 
  I excel in harnessing cutting-edge technologies to create exceptional web experiences. My expertise in Full-Stack
   development has enabled me to lead teams in crafting high-performant, server-rendered web applications known for 
   their accessibility and visually appealing UIs. I'm passionate about enforcing coding standards, conducting rigorous 
   code reviews, mentorship, and making pivotal architectural decisions to maintain scalable, maintainable, and 
   efficient codebases.`;

  const frameworks = ['NextJS', 'React', 'TypeScript', 'tRPC', 'GraphQL', 'Prisma'];

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
              delay: 0.2,
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
              delay: 0.2,
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
            <Text size="md">{aboutMeText}</Text>
            <Text size="md" mt="sm">
              I&apos;ve worked on many projects ranging from small start-ups, to non-profits, all
              the way through large consumer facing applications for major sports, news, and
              entertainment companies.
            </Text>
            <Text size="md" mt="sm">
              At the moment, I&apos;m leading the re-architectured redesign of the
              <Link href="https://www.fxnetworks.com" target="_blank" rel="noopener">
                FX Networks
              </Link>
              website and providing technical leadership for the revamped
              <Link href="https://gaad.foundation/" target="_blank" rel="noopener">
                GAAD
              </Link>
              websites using bleeding-edge tech.
            </Text>
            <Text size="md" mt="sm">
              These a few things I&apos;ve been enjoying working with lately:
            </Text>
            <TechGrid cols={2} spacing="xs">
              {frameworks.map((framework) => (
                <Group key={framework} noWrap spacing={5}>
                  <IconChevronsRight stroke={1.5} size={16} color={theme.colors.lime[6]} />
                  <Text size="md">{framework}</Text>
                </Group>
              ))}
            </TechGrid>
          </motion.div>
        </Grid.Col>
      </Grid>
    </AboutMeContainer>
  );
};
