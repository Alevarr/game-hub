import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text ml={4}>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={
        data?.pages.reduce(
          (accumulator, page) => accumulator + page.results.length,
          0
        ) || 0
      }
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonGameCard />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
