import { appConfig } from "@/config";
import axios from "axios";

export class HttpClient {
  private _httpClient;

  constructor() {
    this._httpClient = axios.create({
      baseURL: appConfig.baseUrl,
      timeout: appConfig.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._httpClient.interceptors.request.use(function (config) {
      return config;
    });

    this._httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // all error codes use cases
        if (!error || (error.response && error.response.status === 401)) {
        }
        return Promise.reject(error);
      }
    );
  }

  get client() {
    return this._httpClient;
  }
}

export const httpClient = new HttpClient();
