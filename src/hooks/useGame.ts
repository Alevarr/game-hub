import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import ApiClient from "../services/api-client";



const useGame = (slug: string) => {
   const apiClient = new ApiClient<Game>(`/games/${slug}`)
    return useQuery<Game, Error>({
        queryKey: ["game", slug],
        queryFn: () => apiClient.getSingle()
})}

export default useGame;