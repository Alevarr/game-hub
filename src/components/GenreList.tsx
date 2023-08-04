import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => {
          return (
            <ListItem key={skeleton} paddingY="8px">
              <Skeleton height="32px" key={skeleton} />
            </ListItem>
          );
        })}
      </List>
    );
  }
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
