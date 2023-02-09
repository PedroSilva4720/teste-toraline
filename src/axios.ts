import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mockend.com/juunegreiros/BE-test-api',
});
