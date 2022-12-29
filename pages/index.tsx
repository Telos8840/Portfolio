import { Container } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import Navigation from '@components/Navigation';
import Hero from '@components/Hero';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';
import Work from '@components/Work';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export const HomePage = () => {
  const { targetRef: aboutRef, scrollIntoView: scrollToAbout } = useScrollIntoView({ offset: 60 });
  const { targetRef: experienceRef, scrollIntoView: scrollToExperience } = useScrollIntoView({
    offset: 60,
  });
  const { targetRef: workRef, scrollIntoView: scrollToWork } = useScrollIntoView({
    offset: 60,
  });
  const { targetRef: contactRef, scrollIntoView: scrollContact } = useScrollIntoView({
    offset: 60,
  });

  const links = [
    { link: '#about-me', label: 'About Me', scrollFunction: scrollToAbout },
    { link: '#experience', label: 'Experience', scrollFunction: scrollToExperience },
    { link: '#Work', label: 'Work', scrollFunction: scrollToWork },
    { link: '#contact', label: 'Contact', scrollFunction: scrollContact },
  ];

  return (
    <main>
      <Navigation links={links} />
      <Hero />
      <Container>
        <AboutMe aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Work workRef={workRef} />
        <Contact contactRef={contactRef} />
      </Container>
      <Footer />
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
