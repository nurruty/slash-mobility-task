import axios from 'axios';

function getSongs({ artist }) {
  return axios
    .get(`https://itunes.apple.com/search?term=${artist}&entity=song`)
    .then((res) => {
      const { data = {} } = res;
      return data.results;
    })
    .catch((err) => {
      return err;
    });
}

export { getSongs };
