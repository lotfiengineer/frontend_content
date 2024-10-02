/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosRequestConfig, AxiosResponse, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../services/httpClient";
import ApiMethods from "../types";

interface Props {
  url: string;
  method?: ApiMethods;
  requestConfig?: AxiosRequestConfig;
  onSuccess?: () => void;
  onError?: () => void;
}

const useApiRequest = <T>({ url, method = "get", requestConfig, onSuccess, onError }: Props) => {
  const navigate = useNavigate();
  const controller = new AbortController();

  const [data, setData] = useState<AxiosResponse<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    message: string;
    statusCode: number;
  } | null>(null);

  const request = async (reqConfig?: AxiosRequestConfig) => {
    setLoading(true);

    httpClient<T>({
      method: method,
      url: url,
      signal: controller.signal,
      ...requestConfig,
      ...reqConfig,
    })
      .then((response) => {
        setData(response);
        setError(null);
        if (onSuccess) onSuccess();
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        if (err.response.status === 401) {
          navigate("/");
        }

        setData(null);
        setError({
          message: err.message,
          statusCode: err.status,
        });
        if (onError) onError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useApiRequest;
