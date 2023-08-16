import ApiClient, { FetchResponse } from "../services/api-client"
import { Trailer } from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameID: number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameID}/movies`);

    return useQuery<FetchResponse<Trailer>, Error>({
        queryKey: ["trailer", gameID],
        queryFn: apiClient.getAll

    })
}

export default useTrailers