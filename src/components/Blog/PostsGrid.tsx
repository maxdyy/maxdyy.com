// Interface
import IPostsGrid from '@interface/postsGrid';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Card from '@components/UI/Card';

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
    } = post;

    const image = {
      src: url,
      height,
      width,
    };

    return (
      <Card
        key={id}
        image={image}
        imageAlt={postTitle}
        title={postTitle}
        firstParagraph={postDescription}
        marginLeft={'0px'}
        marginRight={'0px'}
        marginBottom={'0px'}
      />
    );
  });

  return <div className={gridWrapperStyle}>{postItems}</div>;
};

export default PostsGrind;
