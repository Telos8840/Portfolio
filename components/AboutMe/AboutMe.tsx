import { Container } from '@mantine/core';
import useStyles from './AboutMe.styles';

export const AboutMe = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg" className={classes.container} />
    </div>
  );
};
