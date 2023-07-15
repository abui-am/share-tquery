import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
export const getAllPokemon = ({ limit = 20, offset = 0 }) =>
  axiosInstance.get('/pokemon', {
    params: {
      limit,
      offset,
    },
  });
