import React from 'react';

// Hooks
import {useStyletron} from 'baseui';

// Components
import PostItem from './PostItem';

// Style
import {wrapper} from '../../styles/styles';

type PostsProps = {
  posts: object;
};

const Posts = ({posts}) => {
  // Style
  const [css] = useStyletron();
  const postsWrapperStyle = css({
    ...wrapper,
    margin: '30px auto',
  });

  const postItems = [...posts].map(post => (
    <PostItem key={post.id} post={post} />
  ));

  return <div className={postsWrapperStyle}> {postItems} </div>;
};

export default Posts;
