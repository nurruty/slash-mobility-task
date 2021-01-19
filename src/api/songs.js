import axios from 'axios';
import { mockResponse } from '../utils';

function getSongs() {
  return axios
    .get(`https://itunes.apple.com/search?term=nombre+artista&entity=song`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const response = mockResponse();
      const { results } = response;

      return results;
    });
}

export { getSongs };
