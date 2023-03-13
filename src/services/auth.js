import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signup = data => {
  return authInstance.post('/user/signup', data);
};
