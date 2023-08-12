import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenre = useGameQueryStore((state) => state.gameQuery.genre);
  const setGenre = useGameQueryStore((state) => state.setGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => {
          return (
            <ListItem key={skeleton} paddingY={2}>
              <Skeleton height={8} key={skeleton} />
            </ListItem>
          );
        })}
      </List>
    );
  }
  return (
    <>
      <Heading mb={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize={8}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontSize="lg"
                  variant="link"
                  onClick={() => setGenre(genre)}
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
