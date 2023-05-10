import React from "react";
import useGenres from "../hooks/Useganara.jsx";
import {
  Button,
  HStack,
  Heading,
  Img,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getsmallUrl from "../Service/imageurl.jsx";

const GenreList = ({ onSelectGenre, selectedG }) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} mb={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem py={"5px"} key={genre.id}>
            <HStack>
              <Img
                objectFit={"cover"}
                borderRadius={8}
                boxSize={"32px"}
                src={getsmallUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
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
    </>
  );
};

export default GenreList;
