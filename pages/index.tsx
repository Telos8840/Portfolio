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
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

interface SectionContainerProps extends ContainerProps {
  component: string;
}

const SectionContainer = createPolymorphicComponent<'section', SectionContainerProps>(Container);

const ContentContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.dark[7]};
  padding: 100px 0;
`;

export const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
    <PostHogProvider client={posthog}>
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
    </PostHogProvider>
  );
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
