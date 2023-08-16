import { SimpleGrid, Text } from "@chakra-ui/react";
import InfoCell from "./InfoCell";
import MetaScore from "./MetaScore";
import { Game } from "../entities/Game";

interface Props {
  data: Game;
}

const GameInfoGrid = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={6}>
      <InfoCell heading="Platforms">
        {
          <>
            {data.parent_platforms.map(({ platform }) => (
              <Text>{platform.name}</Text>
            ))}
          </>
        }
      </InfoCell>
      <InfoCell heading="Metascore">
        <MetaScore score={data.metacritic}></MetaScore>
      </InfoCell>
      <InfoCell heading="Genres">
        <>
          {data.genres.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </>
      </InfoCell>
      <InfoCell heading="Publishers">
        <>
          {data.publishers.map((publisher) => (
            <Text>{publisher.name}</Text>
          ))}
        </>
      </InfoCell>
    </SimpleGrid>
  );
};

export default GameInfoGrid;
