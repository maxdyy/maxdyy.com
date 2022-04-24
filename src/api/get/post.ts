import axios from 'axios';
import CONSTS from '@utils/consts';

const {
  API: {
    ENDPOINTS: { MASTER },
    QUERIES: { POST_QUERY },
  },
} = CONSTS;

const getPost = async (slug: string) => {
  const res = await axios({
    url: MASTER,
    method: 'post',
    data: {
      query: POST_QUERY(slug),
    },
  }).then((result) => result.data);

  return res.data.blogPost;
};

export default getPost;
