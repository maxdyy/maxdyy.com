import { GetStaticProps } from 'next';

// Consts
import CONSTS from '@utils/consts';

// Interface
import IBlogPage from '@interface/blogPage';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
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
        <SeoHead
          title={TITLE.HOME}
          description={DESCRIPTION.HOME}
          author={AUTHOR}
          keywords={DESCRIPTION.HOME}
          imageUrl="https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc"
        />
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
