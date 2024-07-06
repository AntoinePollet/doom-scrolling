import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

const headers: Partial<AxiosRequestHeaders> = {
  'Content-Type': 'application/json',
};

const gbif: AxiosInstance = axios.create({
  baseURL: 'https://api.gbif.org/v1/',
  timeout: 1000,
  headers: headers
});

export default gbif;