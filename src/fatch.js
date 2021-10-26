import axios from 'axios';

const IP_KEY = '029f84f7f4c84b340931a1b3681c4b27';
const BASE_URL = 'https://api.themoviedb.org/3/';
// const example1 = "https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>"
export function query(path, params) {
  let url = new URL(path, BASE_URL);
  url.searchParams.append('api_key', IP_KEY);
  params.forEach(el => url.searchParams.append(el.name, el.value));
  return axios(url.href);
}
