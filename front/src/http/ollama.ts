import axios, { AxiosRequestHeaders } from "axios";

const headers: Partial<AxiosRequestHeaders> = {
  'Content-Type': 'application/json'
};

export const ollamaAPI = axios.create({
  headers: headers,
  baseURL: 'http://localhost:11434/api',
});