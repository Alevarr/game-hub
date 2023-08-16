import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client"
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameID: number) => {
    const apiClient = new ApiClient<Screenshot>(`/games/${gameID}/screenshots`);
    return useQuery<FetchResponse<Screenshot>, Error>({
        queryKey: ["screenshots", gameID],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots;