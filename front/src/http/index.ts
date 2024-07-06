import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

const headers: Partial<AxiosRequestHeaders> = {
  Authorization: `Bearer value`,
  'Content-Type': 'application/json',
};

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: headers
});

export default instance;