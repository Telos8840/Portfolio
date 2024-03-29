import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Seo from '@/components/Seo';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Seo />
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          globalStyles: () => ({
            body: {
              backgroundColor: '#020202',
            },
          }),
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
