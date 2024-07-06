import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

const headers: Partial<AxiosRequestHeaders> = {
  'Content-Type': 'application/json',
};

const planet: AxiosInstance = axios.create({
  baseURL: 'http://asterank.com/api/mpc/',
  timeout: 1000,
  headers: headers
});

export default planet;