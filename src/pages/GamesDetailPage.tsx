import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameInfoGrid from "../components/GameInfoGrid";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import { ScreenshotsGrid } from "../components/ScreenshotsGrid";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameInfoGrid data={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameID={game.id} />
          <ScreenshotsGrid gameID={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
