import { MutableRefObject } from 'react';
import { useMantineTheme, Divider, Text, Title, Tabs, List } from '@mantine/core';
import { IconChevronsRight } from '@tabler/icons';
import { motion } from 'framer-motion';
import data from '@content/experience.json';
import { useMediaQuery } from '@mantine/hooks';
import useStyles, { ExperienceContainer, Panel } from './Experience.styles';

interface ExperienceProps {
  experienceRef: MutableRefObject<HTMLElement>;
}

export const Experience = ({ experienceRef }: ExperienceProps) => {
  const { experience } = data;
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  const formatString = (str: string) => str.toLowerCase().replace(/\s/g, '');

  return (
    <ExperienceContainer id="experience" ref={experienceRef}>
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
            gradient={{ from: 'blue.9', to: 'cyan.4', deg: 75 }}
            inherit
            component="span"
          >
            Professional Experience
          </Text>
        </Title>
        <Divider my="sm" size="sm" />
        <Tabs
          defaultValue={formatString(experience[0].company)}
          orientation={isMobile ? 'horizontal' : 'vertical'}
          mt="xl"
        >
          <Tabs.List className={classes.tabList}>
            {experience.map((job) => (
              <Tabs.Tab key={job.company} value={formatString(job.company)}>
                {job.company}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {experience.map((job) => (
            <Tabs.Panel key={job.company} value={formatString(job.company)}>
              <Panel>
                <Title order={3} color="blue.5">
                  {job.title}
                </Title>
                {job.isDWS && (
                  <Text color="dimmed" component="p" m={0}>
                    Contracted through Diamond Web Services
                  </Text>
                )}
                <Text fz="lg" component="p" m={0}>
                  {job.startDate} - {job.endDate}
                </Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  mt="md"
                  icon={<IconChevronsRight stroke={1.5} size={16} />}
                >
                  {job.highlights.map((highlight) => (
                    <List.Item key={highlight}>{highlight}</List.Item>
                  ))}
                </List>
              </Panel>
            </Tabs.Panel>
          ))}
        </Tabs>
      </motion.div>
    </ExperienceContainer>
  );
};
