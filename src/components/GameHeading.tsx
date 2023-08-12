import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

export const GameHeading = () => {
  const platformName = useGameQueryStore((s) => s.gameQuery.platform?.name);
  const genreName = useGameQueryStore((s) => s.gameQuery.genre?.name);
  const heading = `${platformName || ""} ${genreName || ""} Games`;
  return (
    <Heading as="h1" mb={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};
