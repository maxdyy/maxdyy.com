import React from 'react';
import Link from 'next/link';
import GraphImg from 'graphcms-image';
import CONSTS from '../../utils/consts';

// Types
import {PostProps} from '../../types/post';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {Paragraph3} from 'baseui/typography';

// Style
import {flexBetween} from '../../styles/styles';

const PostItem = ({post}: PostProps) => {
  const {
    ROUTES,
    CONTENT: {POSTS},
  } = CONSTS;
  const {id, postThumbnail, postTitle, readtime} = post;

  // Style
  const [css, theme] = useStyletron();
  const postItemStyle = css({
    margin: '32px 0',
    padding: '0 16px 0 24px',
  });
  const postItemBorderWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    border: `2px solid ${theme.colors.border}`,
  });
  const postItemInnerWrapperStyle = css({
    ...flexBetween,
  });
  const postItemInfoWrapperStyle = css({
    margin: '0 16px',
  });
  const postImageStyle = css({
    width: '100px',
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

  return (
    <div className={postItemStyle}>
      <div className={postItemBorderWrapperStyle}>
        <div className={postImageStyle}>
          <GraphImg image={postThumbnail} maxWidth={150} />
        </div>
        <div className={postItemInnerWrapperStyle}>
          <div className={postItemInfoWrapperStyle}>
            <Link href={`${ROUTES.POST}${id}`} passHref replace>
              <a className={postItemTitleStyle}>
                <h1 className={postItemTitleStyle}>{postTitle}</h1>
              </a>
            </Link>
            <Paragraph3>
              {readtime} {POSTS.READ}
            </Paragraph3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
