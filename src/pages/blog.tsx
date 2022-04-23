import { GetStaticProps } from 'next';

// Consts
import CONSTS from '@utils/consts';
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

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

const { REVALIDATE_INTERVAL } = CONSTS;
const {
  HEAD: { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, LOGO },
  BLOG,
} = CONTENT;

const Blog = ({ posts }: IBlogPage) => {
  return (
    <Layout>
      <div>
        <SeoHead
          title={TITLE.BLOG}
          description={DESCRIPTION.BLOG}
          author={AUTHOR}
          keywords={KEYWORDS.BLOG}
          imageUrl={LOGO}
        />
        <BodyWrapper>
          <section>
            <H1>{BLOG.TITLE}</H1>
            <Paragraph1>
              <span
                dangerouslySetInnerHTML={createMarkup(BLOG.DESCRIPTION)}
              ></span>
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
