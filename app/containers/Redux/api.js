import axios from 'axios';

export const callPlayerAPI = () => {
  console.log('Hallo');
  return axios.get(
    'https://my-json-server.typicode.com/TobiWeiss/demo/players',
  );
};
