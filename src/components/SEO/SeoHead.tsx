import Head from 'next/head';

// Interface
import ISEOHead from '@interface/seoHead';

const SeoHead: React.FC<ISEOHead> = ({
  title,
  description,
  author,
  keywords,
  imageUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@maxdyy" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};

export default SeoHead;
