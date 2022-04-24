import axios from 'axios';
import CONSTS from '@utils/consts';

const {
  API: {
    ENDPOINTS: { MASTER },
    QUERIES: { PROJECTS_QUERY },
  },
} = CONSTS;

const getProjects = async () => {
  const res = await axios({
    url: MASTER,
    method: 'post',
    data: {
      query: PROJECTS_QUERY,
    },
  }).then((result) => result.data);

  return res.data.projects;
};

export default getProjects;
