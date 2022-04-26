import { useState } from 'react';

// Constants
import CONTENT from '@utils/data';

// Interface
import IPostsGrid from '@interface/postsGrid';

// Hooks
import { useStyletron } from 'baseui';

// Components
import NewBlogCard from '@components/Blog/NewBlogCard';
import BlogCard from '@components/Blog/BlogCard';
import BlogFilters from '@components/Blog/BlogFilters';
import { H4 } from 'baseui/typography';

const {
  BLOG: { NO_POSTS_LABEL, NO_POSTS_LABEL_2 },
} = CONTENT;

const PostsGrind: React.FC<IPostsGrid> = ({ posts }) => {
  // Style
  const [css, theme] = useStyletron();

  const gridWrapperStyle = css({
    marginTop: '80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridColumnGap: '20px',
    gridRowGap: '20px',

    [theme.mediaQuery.medium]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridColumnGap: '35px',
    },
    [theme.mediaQuery.large]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  });

  const noPostsLabelStyle = css({
    marginTop: '80px',
    textAlign: 'center',
  });

  const latestBlogPost = posts[0];
  const mainBlogPosts = posts.slice(1);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredPosts = selectedFilters.length
    ? mainBlogPosts.filter((post) => {
        return selectedFilters.some((filter) => {
          return post.blogPostType.includes(filter);
        });
      })
    : mainBlogPosts;

  const postItems = filteredPosts.map((post) => {
    const {
      id,
      postSlug,
      createdAt,
      postThumbnailBig,
      postTitle,
      postDescription,
      readtime,
      blogPostType,
    } = post;

    return (
      <BlogCard
        key={id}
        id={id}
        createdAt={createdAt}
        readtime={readtime}
        blogPostType={blogPostType}
        postSlug={postSlug}
        image={postThumbnailBig}
        imageAlt={postTitle}
        title={postTitle}
        paragraph={postDescription}
      />
    );
  });

  return (
    <>
      <NewBlogCard
        id={latestBlogPost.id}
        createdAt={latestBlogPost.createdAt}
        readtime={latestBlogPost.readtime}
        blogPostType={latestBlogPost.blogPostType}
        postSlug={latestBlogPost.postSlug}
        image={latestBlogPost.postThumbnailBig}
        imageAlt={latestBlogPost.postTitle}
        title={latestBlogPost.postTitle}
        paragraph={latestBlogPost.postDescription}
      />
      <BlogFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      {postItems.length ? (
        <div className={gridWrapperStyle}>{postItems}</div>
      ) : (
        <div className={noPostsLabelStyle}>
          <H4>
            {NO_POSTS_LABEL} <br /> {NO_POSTS_LABEL_2}
          </H4>
        </div>
      )}
    </>
  );
};

export default PostsGrind;
