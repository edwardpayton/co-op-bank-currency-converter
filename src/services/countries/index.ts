import axios from 'axios';

export function getCountries() {
  return axios
    .get('https://openexchangerates.org/api/currencies.json')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
