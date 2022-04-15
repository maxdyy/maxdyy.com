// Interface
import IPostsGrid from '@interface/postsGrid';

// Hooks
import { useStyletron } from 'baseui';

// Components
import BlogCard from '@components/Blog/BlogCard';

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
    },
    [theme.mediaQuery.large]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  });

  const postItems = posts.map((post) => {
    const {
      id,
      postSlug,
      createdAt,
      postThumbnailBig: { url, height, width },
      postTitle,
      postDescription,
      readtime,
      blogPostType,
    } = post;

    const image = {
      src: url,
      height,
      width,
    };

    return (
      <BlogCard
        key={id}
        id={id}
        createdAt={createdAt}
        readtime={readtime}
        blogPostType={blogPostType}
        postSlug={postSlug}
        image={image}
        imageAlt={postTitle}
        title={postTitle}
        paragraph={postDescription}
      />
    );
  });

  return <div className={gridWrapperStyle}>{postItems}</div>;
};

export default PostsGrind;
