import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";




export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

  const apiClient = new ApiClient<Genre>("/genres");
  
const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
  queryKey: ["genres"],
  queryFn: () => apiClient.getAll(),
  staleTime: ms("24h")
})

export default useGenres;