import axios from 'axios';

const IP_KEY = '029f84f7f4c84b340931a1b3681c4b27';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function query(path, params) {
  let url = new URL(path, BASE_URL);
  url.searchParams.append('api_key', IP_KEY);
  params.forEach(el => url.searchParams.append(el[0], el[1]));
  return axios(url.href);
}
