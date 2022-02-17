import React from 'react';
import Link from 'next/link';
import CONSTS from '../../utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { Paragraph3 } from 'baseui/typography';

const SearchResultItem = ({ post, onResultClick }) => {
  const { ROUTES } = CONSTS;
  const { postTitle, id } = post;

  // Style
  const [css, theme] = useStyletron();
  const searchItem = css({
    boxSizing: 'border-box',
    color: theme.colors.contentPrimary,
    borderBottom: `2px solid ${theme.colors.border}`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
    ':last-of-type': {
      border: 'none',
    },
  });
  const searchItemLink = css({
    color: theme.colors.contentPrimary,
    textDecoration: 'none',
    [':hover']: {
      textDecoration: 'none',
    },
  });

  return (
    <div className={searchItem}>
      <Link href={`/post/[id]`} as={`${ROUTES.POST}${id}`}>
        <a className={searchItemLink} onClick={onResultClick}>
          <Paragraph3
            $style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {postTitle}
          </Paragraph3>
        </a>
      </Link>
    </div>
  );
};

export default SearchResultItem;
