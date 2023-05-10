import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard.jsx";
import UseGames from "../hooks/UseGames.jsx";
import Skeleton from "./Skeleton.jsx";

const Gamegrid = ({ gameQuery }) => {
  const { data, Error, isLoading } = UseGames(gameQuery);
  const skel = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={"10px"}
      justifyContent={"space-evenly"}
    >
      {isLoading &&
        skel.map((a, index) => {
          return <Skeleton key={index} />;
        })}
      {Error && <Text>{Error}</Text>}
      {data.map((e) => (
        <GameCard key={e.id} game={e} />
      ))}
    </SimpleGrid>
  );
};

export default Gamegrid;
