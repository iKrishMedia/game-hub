import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner/>;
  return (
    <div>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'> 
            <HStack>
              <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)}/>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GenreList;
