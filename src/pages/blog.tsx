import { GetStaticProps } from 'next';
import Head from 'next/head';

// Consts
import CONSTS from '@utils/consts';

// Interface
import IBlogPage from '@interface/blogPage';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/UI/Layout';
import BodyWrapper from '@components/UI/BodyWrapper';
import { H1, Paragraph1 } from 'baseui/typography';
import PostsGrind from '@components/Blog/PostsGrid';

const {
  REVALIDATE_INTERVAL,
  CONTENT: {
    HEAD: { TITLE, DESCRIPTION, AUTHOR },
  },
} = CONSTS;

const Blog = ({ posts }: IBlogPage) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>{TITLE.HOME}</title>
          <meta name="description" content={DESCRIPTION.HOME} />
          <meta name="author" content={AUTHOR} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@maxdyy" />
          <meta name="twitter:title" content={TITLE.HOME} />
          <meta name="twitter:description" content={DESCRIPTION.HOME} />
          <meta name="twitter:image" content={`/apple-icon-120x120.png`} />
          <meta
            name="twitter:image"
            content={`https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc`}
          />
        </Head>
        <BodyWrapper>
          <section>
            <H1>MAXDYY Blog</H1>
            <Paragraph1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium earum nobis placeat? Recusandae, tempore quidem
              dolorum, fuga ex, iusto atque voluptatum corrupti voluptates sequi
              non? Dolor ea atque laudantium labore!
            </Paragraph1>
            <PostsGrind posts={posts} />
          </section>
        </BodyWrapper>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getPosts();

  return { props: { posts: postsData }, revalidate: REVALIDATE_INTERVAL };
};

export default Blog;
