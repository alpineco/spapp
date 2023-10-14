import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
    private readonly http: AxiosInstance;
    constructor(config?: AxiosRequestConfig) {
        this.http = axios.create({
            withCredentials: true,
            ...config,
        });
    }

    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.http.request(config);
    }

    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get<T, R>(url, config);
    }

    post<T = any, R = any>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<R>> {
        return this.http.post<T, AxiosResponse<R>>(url, data, config);
    }

    put<T = any, R = any>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<R>> {
        return this.http.put<T, AxiosResponse<R>>(url, data, config);
    }

    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.delete<T, R>(url, config);
    }
}