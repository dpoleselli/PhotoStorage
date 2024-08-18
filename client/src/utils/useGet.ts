import urlJoin from "url-join";
import { BASE_URL } from "./constants";
import { useQuery } from "@tanstack/react-query";

export const useGet = <T = any>(url: string) => {
  const query = useQuery<T>({
    queryKey: [url],
    queryFn: () => fetch(urlJoin(BASE_URL, url)).then((res) => res.json()),
  });

  return {
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    data: query.data,
  };
};
