import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

const clientInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4a736bb94c2c464b85e41ef026e6bd10"
    }
})

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config?: AxiosRequestConfig) => clientInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    getSingle = (config?: AxiosRequestConfig) => clientInstance.get<T>(this.endpoint, config).then(res => res.data);
}

export default ApiClient;