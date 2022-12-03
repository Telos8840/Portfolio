import { Container } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import Navigation from '@components/Navigation';
import Hero from '@components/Hero';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';

export const HomePage = () => {
  const { targetRef: aboutRef, scrollIntoView: scrollToAbout } = useScrollIntoView({ offset: 60 });
  const { targetRef: experienceRef, scrollIntoView: scrollToExperience } = useScrollIntoView({
    offset: 60,
  });

  const links = [
    { link: '#about-me', label: 'About Me', scrollFunction: scrollToAbout },
    { link: '#experience', label: 'Experience', scrollFunction: scrollToExperience },
    { link: '#projects', label: 'Projects', scrollFunction: () => {} },
    { link: '#contact', label: 'Contact', scrollFunction: () => {} },
  ];

  return (
    <main>
      <Navigation links={links} />
      <Hero />
      <Container>
        <AboutMe aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
      </Container>
    </main>
  );
};

export default HomePage;
