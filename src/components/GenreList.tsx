import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
}

export default GenreList;
