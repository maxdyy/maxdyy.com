import axios from 'axios';
import CONSTS from '@utils/consts';

const {
  API: {
    ENDPOINTS: { MASTER },
    QUERIES: { POSTS_QUERY },
  },
} = CONSTS;

const getPosts = async () => {
  const res = await axios({
    url: MASTER,
    method: 'post',
    data: {
      query: POSTS_QUERY,
    },
  }).then((result) => result.data);

  return res.data.blogPosts;
};

export default getPosts;
