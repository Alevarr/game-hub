import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";



export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    slug: string;
    description_raw: string;
  }


const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", {...gameQuery, genre: gameQuery.genre?.id, platform: gameQuery.platform?.id}],
    queryFn: ({ pageParam }) => apiClient.getAll({params: 
      {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("24h")
})}

export default useGames;