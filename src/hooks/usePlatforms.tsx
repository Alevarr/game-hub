import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
