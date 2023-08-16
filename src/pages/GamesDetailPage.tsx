import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameInfoGrid from "../components/GameInfoGrid";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameInfoGrid data={data} />
    </>
  );
};

export default GameDetailPage;
