import { Container, Divider, Grid, Image, Text, Title, Anchor } from '@mantine/core';
import useStyles from './AboutMe.styles';

export const AboutMe = () => {
  const { classes } = useStyles();

  const getNumOfYears = () => {
    const date1 = new Date('July 1, 2012');
    const date2 = new Date();
    return date2.getFullYear() - date1.getFullYear();
  };

  const aboutMeText = `I've been a curiosity-driven person since childhood and always wanted to learn how
            things work. To this day, I still enjoy learning about new topics and keeping up to date
            with all the latest tech. This inquisitiveness has fueled my passion for Software over
            the past ${getNumOfYears()} years`;

  return (
    <Container className={classes.container} size="md">
      <Grid gutter="lg">
        <Grid.Col span={5}>
          <Image
            width={350}
            height="100%"
            radius="md"
            fit="contain"
            src="./images/profile_pic.png"
          />
        </Grid.Col>
        <Grid.Col span={7}>
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
            non-profits, all the way through building applications for major sports, news, and
            entertainment companies.
          </Text>
          <Text size="lg" mt="sm">
            These days, I&apos;m leading the redesign of the
            <Anchor className={classes.link} href="https://www.fxnetworks.com" target="_blank">
              FX Networks
            </Anchor>
            rebuild.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
