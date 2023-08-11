import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";



export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }


const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam }) => apiClient.getAll({params: 
    {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam
    }
  }),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined
})

export default useGames;