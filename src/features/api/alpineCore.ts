import { HttpClient } from "./httpClient";

export class AlpineCoreApi {
    private readonly baseUrl: string;
    private readonly http: HttpClient;
  
    constructor(baseUrl: string, idToken?: string) {
      this.baseUrl = baseUrl;
      this.http = new HttpClient({
        baseURL: this.baseUrl,
        withCredentials: false,
        headers: {
          ...(idToken ? { 'Authorization' : `Bearer ${idToken}` } : {}),
      },
      validateStatus: (_) => true,
      });
  }
}