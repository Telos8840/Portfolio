import Head from 'next/head';

export const Seo = () => {
  const title = 'Saul Guardado - Lead Software Engineer | Portfolio';
  const description =
    'Saul Guardado is a Lead Software Engineer with a passion for creating beautiful and functional websites and applications.';
  const canonical = 'https://saulguardado.dev/';
  const ogImage = 'https://saulguardado.dev/images/profile_pic.png';
  const ogType = 'website';

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={title} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_site_name" property="og:site_name" content={title} />
      <meta key="og_image" property="og:image" content={ogImage} />
      <meta key="og_image:alt" property="og:image:alt" content={title} />
      <meta key="og_image:width" property="og:image:width" content="598" />
      <meta key="og_image:height" property="og:image:height" content="561" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};
