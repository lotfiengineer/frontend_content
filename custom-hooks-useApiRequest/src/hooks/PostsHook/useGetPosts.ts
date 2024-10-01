import { useEffect } from "react";
import useApiRequest from "../useApiRequest";

const useGetPosts = () => {
  const { data, error, loading, request } = useApiRequest({
    url: "/posts",
  });

  useEffect(() => {
    request();
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useGetPosts;
