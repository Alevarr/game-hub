import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconsList from "./PlatformIconsList";
import MetaScore from "./MetaScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/games/${game.slug}`)}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
