import React from "react";
import useGenres from "../hooks/Useganara.jsx";
import { Button, HStack, Img, List, ListItem, Spinner } from "@chakra-ui/react";
import getsmallUrl from "../Service/imageurl.jsx";

const GenreList = ({ onSelectGenre, selectedG }) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem py={"5px"} key={genre.id}>
          <HStack>
            <Img
              borderRadius={8}
              boxSize={"32px"}
              src={getsmallUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedG?.id ? "bold" : "normal"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
