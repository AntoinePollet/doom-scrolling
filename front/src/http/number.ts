import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

const headers: Partial<AxiosRequestHeaders> = {
  'Content-Type': 'application/json',
};

const gbif: AxiosInstance = axios.create({
  baseURL: 'http://numbersapi.com/',
  timeout: 1000,
  headers: headers
});

export default gbif;