import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import GameCard from "./GameCard.jsx";
import UseGames from "../hooks/UseGames.jsx";
import Skeleton from "./Skeleton.jsx";

const Gamegrid = () => {
  const { game, Error, loading } = UseGames();
  const skel = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={"10px"}
      spacing={"10px"}
      justifyContent={"space-evenly"}
    >
      {loading &&
        skel.map((a, index) => {
          return <Skeleton key={index} />;
        })}
      {Error && <Text>{Error}</Text>}
      {game.map((e) => (
        <GameCard key={e.id} game={e} />
      ))}
    </SimpleGrid>
  );
};

export default Gamegrid;
