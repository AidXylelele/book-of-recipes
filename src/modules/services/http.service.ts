import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import { getHeaders } from './headers.service';

const API_URL = 'http://localhost:4200/';
export class HttpService {
  public baseUrl: string;

  public fetch: AxiosStatic;

  public apiVersion: string;

  constructor(baseUrl = API_URL, fetch: AxiosStatic = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl!;
    this.fetch = fetch;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}${this.apiVersion}/${url}`;
  }

  async get(route: string) {
    const headers = getHeaders();
    const url = this.getFullApiUrl(route);
    const response = await this.fetch.get(url, headers);
    return response.data;
  }

  async post<Type>(route: string, body: Type, params: AxiosRequestConfig | object = {}) {
    const headers = getHeaders();
    const url = this.getFullApiUrl(route);
    const response = await this.fetch.post(url, body, {
      ...headers,
      ...params
    });
    return response.data;
  }

  async put<Type>(route: string, body: Type) {
    const headers = getHeaders();
    const url = this.getFullApiUrl(route);
    const response = await this.fetch.put(url, body, headers);
    return response.data;
  }

  async delete(route: string) {
    const headers = getHeaders();
    const url = this.getFullApiUrl(route);
    const response = await this.fetch.delete(url, headers);
    return response.data;
  }
}
