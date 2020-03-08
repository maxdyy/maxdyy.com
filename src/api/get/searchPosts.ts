import axios from 'axios';
import CONSTS from '../../utils/consts';

const getSearchPosts = () => {
  const {
    API: {
      ENDPOINTS: {MASTER},
      QUERIES: {SEARCH_POSTS},
    },
  } = CONSTS;

  return axios({
    url: MASTER,
    method: 'post',
    data: {
      query: SEARCH_POSTS,
    },
  }).then(result => result.data.blogPosts);
};

export default getSearchPosts;
