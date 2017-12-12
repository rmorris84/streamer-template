import axios from 'axios';

let config = '';

export const get = function () {
  return config;
};

export const init = async function () {
  const response = await axios.get('./config.json');
  config = response.data;
};
