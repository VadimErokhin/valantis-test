import { useState } from "react";
import { apiServiceInstance } from "../services/api";
import { Actions, BaseRequestParams, BaseResultResponse } from "../services/api/types";

export function useBaseDataLoad<TParams, TResponse>(filter?: (p: TResponse[]) => TResponse[]) {
  const [isLoading, setIsLoading] = useState(false);

  async function getData(action: Actions, params: TParams) {
    setIsLoading(true);
    try {
      const response =  await apiServiceInstance.post<BaseRequestParams<TParams>, BaseResultResponse<TResponse>>({
        action,
        params,
      })
      const result = filter ? filter(response.result) : response.result;
      return result
    }
    catch(err) {
      console.error('error from useBaseDataLoad >', err)
      throw err
    }
    finally {
       setIsLoading(false)
    }
  }

  return { isLoading, getData }
}