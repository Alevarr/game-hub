import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, isLoading, error } = useTrailers(gameID);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
