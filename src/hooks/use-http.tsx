import { useState, useCallback } from "react";

interface IObj {
  [key: string]: any
}

interface IRequestConfig {
  url: string,
  method?: string,
  body?: IObj,
  headers?: IObj
}

const useHttp = () => {
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: IRequestConfig) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers
          ? { ...requestConfig.headers, "Content-Type": "application/json" }
          : {
              "Content-Type": "application/json",
            },
      });

      const data = await response.json();

      return data;
    } catch (e: any) {
      setError(e);
    }
  }, []);
  return {
    error,
    sendRequest,
  };
};

export default useHttp;
