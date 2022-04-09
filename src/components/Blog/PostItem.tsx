import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CONSTS from '@utils/consts';

// Types
import { PostProps } from '@types/post';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { Paragraph3 } from 'baseui/typography';

// Style
import { flexBetween } from '@styles/styles';

// Utils
import { getPostTypeStyle, getImageByHandle } from '@utils/index';

const PostItem = ({ post }: PostProps) => {
  const {
    ROUTES,
    CONTENT: { POSTS },
  } = CONSTS;
  const { id, postThumbnail, postTitle, readtime, postType } = post;

  // Style
  const [css, theme] = useStyletron();
  const postItemStyle = css({
    margin: '32px 0',
    padding: '0 16px 0 24px',
  });
  const { borderStyle, backgroundStyle } = getPostTypeStyle(postType);
  const postItemBorderWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    border: `2px solid ${theme.colors.border}`,
    borderBottom: `2px solid ${borderStyle}`,
    transition: theme.animation.timing100,
    animation: theme.animation.easeInCurve,
    ':hover': {
      backgroundColor: backgroundStyle,
    },
  });
  const postItemInnerWrapperStyle = css({
    ...flexBetween,
  });
  const postItemInfoWrapperStyle = css({
    margin: '0 16px',
  });
  const postImageStyle = css({
    width: theme.sizing.scale2400,
    flexShrink: 0,
    border: `2px solid ${theme.colors.border}`,
  });
  const postItemTitleStyle = css({
    margin: 0,
    color: theme.colors.contentPrimary,
    textDecoration: 'none',
    fontWeight: 500,
    [theme.mediaQuery.small]: {
      fontSize: '20px',
    },
    [theme.mediaQuery.medium]: {
      fontSize: '28px',
    },
    [theme.mediaQuery.large]: {
      fontSize: '36px',
    },
  });

  console.log(postThumbnail);

  return (
    <div className={postItemStyle}>
      <Link href={`/post/[id]`} as={`${ROUTES.POST}${id}`}>
        <a className={postItemTitleStyle}>
          <div className={postItemBorderWrapperStyle}>
            <div className={postImageStyle}>
              <Image
                src={getImageByHandle(postThumbnail.handle)}
                width={96}
                height={96}
              />
            </div>
            <div className={postItemInnerWrapperStyle}>
              <div className={postItemInfoWrapperStyle}>
                <h1 className={postItemTitleStyle}>{postTitle}</h1>
                <Paragraph3>
                  {readtime} {POSTS.READ}
                </Paragraph3>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostItem;
