import React from 'react';

// Types
import PostsProps from '../../types/posts';

// Hooks
import { useStyletron } from 'baseui';

// Componentszw
import PostItem from './PostItem';

// Style
import { wrapper } from '../../styles/styles';

const Posts = ({ posts }: PostsProps) => {
  // Style
  const [css] = useStyletron();
  const postsWrapperStyle = css({
    ...wrapper,
    margin: '60px auto',
  });

  const postItems = [...posts].map((post) => (
    <PostItem key={post.id} post={post} />
  ));

  return <div className={postsWrapperStyle}> {postItems} </div>;
};

export default Posts;
