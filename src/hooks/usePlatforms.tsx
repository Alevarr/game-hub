import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
