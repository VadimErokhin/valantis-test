import { convertPasswordMd5 } from "../../helpers";
import axios, { AxiosInstance } from "axios";
import siteConfig from "../../config";

const PASSWORD: string = "Valantis";
type RequestFunction = <TParams = unknown, TResponse = unknown>(
  params: TParams
) => Promise<TResponse>;

interface IApiService {
  post: RequestFunction;
}

class ApiService implements IApiService {
  private instance!: AxiosInstance;
  constructor(password: string) {
    this.instance = axios.create({
      baseURL: siteConfig.baseUrl,
      timeout: 100000,
      headers: { "X-Auth": convertPasswordMd5(password) },
    });
  }

  post<TParams, TResponse>(params: TParams) {
    return this.instance.post<TResponse>("/", params).then((r) => r.data);
  }
}

export const apiServiceInstance = new ApiService(PASSWORD);



