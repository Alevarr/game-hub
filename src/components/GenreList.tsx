import useGenres from "../hooks/useGeneres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {data.map((genre) => {
        return <li>{genre.name}</li>;
      })}
    </>
  );
};

export default GenreList;
