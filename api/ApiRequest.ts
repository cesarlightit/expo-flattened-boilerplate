import axios, { AxiosInstance } from "axios";

export class ApiRequest {
  private _axios: AxiosInstance;

  constructor(baseURL: string) {
    this._axios = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string): Promise<T> {
    const response = await this._axios.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await this._axios.post<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this._axios.delete<T>(url);
    return response.data;
  }
}
