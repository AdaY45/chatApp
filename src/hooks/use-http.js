import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        const data = await response.json();

        setIsLoading(false);

        return data;
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    },
    []
  );
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
