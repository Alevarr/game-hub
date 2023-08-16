import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameID: number;
}

export const ScreenshotsGrid = ({ gameID }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameID);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
};
