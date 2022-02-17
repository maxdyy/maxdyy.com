import React from 'react';
import Head from 'next/head';

// Constants
import CONSTS from '@utils/consts';

const SeoHead = ({
  postTitle,
  postThumbnail,
  postDescription,
  postKeywords,
}) => {
  const {
    CONTENT: {
      HEAD: { TITLE },
    },
  } = CONSTS;

  return (
    <Head>
      <title>{`${TITLE.POST} ${postTitle}`}</title>
      <meta name="description" content={postDescription} />
      <meta name="keywords" content={postKeywords} />
      <meta name="author" content="Maksym Dmukhovskyy" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@maxdyy" />
      <meta name="twitter:title" content={`${TITLE.POST} ${postTitle}`} />
      <meta name="twitter:description" content={postDescription} />
      <meta
        name="twitter:image"
        content={`https://media.graphcms.com/resize=width:450/${postThumbnail.handle}`}
      />
      <meta property="og:title" content={`${TITLE.POST} ${postTitle}`} />
      <meta
        property="og:image"
        content={`https://media.graphcms.com/resize=width:450/${postThumbnail.handle}`}
      />
    </Head>
  );
};

export default SeoHead;
