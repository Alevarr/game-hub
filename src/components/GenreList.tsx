import useGenres from "../hooks/useGeneres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {genres.map((genre) => {
        return <li>{genre.name}</li>;
      })}
    </>
  );
};

export default GenreList;
