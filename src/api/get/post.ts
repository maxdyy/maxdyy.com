import axios from 'axios';
import CONSTS from '../../utils/consts';

const getPost = async (id: string) => {
  const {
    API: {
      ENDPOINTS: { MASTER },
      QUERIES: { POST_QUERY },
    },
  } = CONSTS;

  const res = await axios({
    url: MASTER,
    method: 'post',
    data: {
      query: POST_QUERY(id),
    },
  }).then((result) => result.data);

  return res.data.blogPost;
};

export default getPost;
