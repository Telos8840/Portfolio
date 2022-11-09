import { Container } from '@mantine/core';
import Hero from '@components/Hero';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';

export const HomePage = () => (
  <main>
    <Hero />
    <Container>
      <AboutMe />
      <Experience />
    </Container>
  </main>
);

export default HomePage;
