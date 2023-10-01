import { Container, ContainerProps, createPolymorphicComponent } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import styled from '@emotion/styled';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

interface SectionContainerProps extends ContainerProps {
  component: string;
}

const SectionContainer = createPolymorphicComponent<'section', SectionContainerProps>(Container);

const ContentContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.dark[7]};
  padding: 100px 0;
`;

export const HomePage = () => {
  const { targetRef: aboutRef, scrollIntoView: scrollToAbout } = useScrollIntoView({ offset: 65 });
  const { targetRef: experienceRef, scrollIntoView: scrollToExperience } = useScrollIntoView({
    offset: 65,
  });
  const { targetRef: workRef, scrollIntoView: scrollToWork } = useScrollIntoView({
    offset: 65,
  });
  const { targetRef: contactRef, scrollIntoView: scrollContact } = useScrollIntoView({
    offset: 65,
  });

  const links = [
    { link: '#about-me', label: 'About Me', scrollFunction: scrollToAbout },
    { link: '#experience', label: 'Experience', scrollFunction: scrollToExperience },
    { link: '#work', label: 'Work', scrollFunction: scrollToWork },
    { link: '#contact', label: 'Contact', scrollFunction: scrollContact },
  ];

  return (
    <>
      <Navigation links={links} />
      <main>
        <Hero />
        <ContentContainer>
          <SectionContainer component="section">
            <AboutMe aboutRef={aboutRef} />
            <Experience experienceRef={experienceRef} />
            <Work workRef={workRef} />
            <Contact contactRef={contactRef} />
          </SectionContainer>
        </ContentContainer>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
