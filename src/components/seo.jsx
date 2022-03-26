import Head from "next/head";

const SEO = ({
  description = "Kwarleys Demo",
  author = "Delasi Mensah",
  meta,
  title = "Kwarleyz Demo",
}) => {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="../assets/fonts/GothamMedium.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="../assets/fonts/GothamBook.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
    </Head>
  );
};

export default SEO;
