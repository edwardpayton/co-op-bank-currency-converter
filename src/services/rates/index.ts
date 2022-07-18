import axios from 'axios';

export function getRates(base: string) {
  return axios
    .get(`https://api.exchangerate-api.com/v4/latest/${base}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
