import { format } from 'date-fns';

// Consts
import CONSTS from '@utils/consts';
import { getBlogPostTagKind } from '@utils/index';

// Interface
import IBlogCard from '@interface/blogCard';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, VARIANT } from 'baseui/tag';

const {
  ROUTES: { POST },
} = CONSTS;

const BlogCard: React.FC<IBlogCard> = ({
  id,
  postSlug,
  createdAt,
  readtime,
  blogPostType,
  image,
  imageAlt,
  title,
  paragraph,
}) => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    marginBottom: '60px',
    width: '100%',
  });

  const titleStyle = css({
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
  });

  const titleLinkStyle = css({
    textDecoration: 'none',
  });

  const blogPostInfoWrapperStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0',
  });

  const blogPostDateInfoStyle = css({
    color: theme.colors.primary300,
    fontSize: '12px',
  });

  const blogTypeTags = blogPostType.map((blogType) => {
    const tagKind = getBlogPostTagKind(blogType);
    return (
      <Tag
        kind={tagKind}
        closeable={false}
        variant={VARIANT.solid}
        key={`${id}-${blogType}`}
      >
        {blogType}
      </Tag>
    );
  });
  const blogPostLink = `${POST}${postSlug}`;

  return (
    <div className={wrapperStyle}>
      <Link href={blogPostLink} passHref>
        <a href={blogPostLink}>
          <Image src={image} alt={imageAlt} />
        </a>
      </Link>
      <div>
        <div className={blogPostInfoWrapperStyle}>
          <div className={blogPostDateInfoStyle}>
            <div>Read time: {readtime}</div>
            <div>Created: {format(new Date(createdAt), 'MM/dd/yyyy')}</div>
          </div>
          <div>{blogTypeTags}</div>
        </div>
        <Link href={blogPostLink} passHref>
          <a href={blogPostLink} className={titleLinkStyle}>
            <HeadingMedium className={titleStyle}>{title}</HeadingMedium>
          </a>
        </Link>
        <ParagraphMedium>{paragraph}</ParagraphMedium>
      </div>
    </div>
  );
};

export default BlogCard;
