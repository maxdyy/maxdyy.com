import axios from 'axios';
import CONSTS from '@utils/consts';

const {
  API: {
    ENDPOINTS: { MASTER },
    QUERIES: { POST_SLUGS_QUERY },
  },
} = CONSTS;

const getPostSlugs = async () => {
  const res = await axios({
    url: MASTER,
    method: 'post',
    data: {
      query: POST_SLUGS_QUERY,
    },
  }).then((result) => result.data);

  return res.data.blogPosts;
};

export default getPostSlugs;
