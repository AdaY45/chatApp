import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
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
    } catch (e) {
      setError(e);
    }
  }, []);
  return {
    error,
    sendRequest,
  };
};

export default useHttp;
