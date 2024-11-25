import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GameQuery } from "../App";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery
}

const GenreList = ({ onSelectGenre, gameQuery }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={
                  genre.id === gameQuery.genre?.id ? "bold" : "normal"
                }
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
