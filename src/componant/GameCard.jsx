import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./platformIcon";
import getsmallUrl from "../Service/imageurl";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={getsmallUrl(game.background_image)} />
      <CardBody>
        <HStack mb={2} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Badge
            colorScheme={
              game.metacritic > 75
                ? "green"
                : game.metacritic > 60
                ? "yello"
                : ""
            }
            fontSize={"14px"}
            paddingX={2}
            borderRadius={"5px"}
          >
            {game.metacritic}
          </Badge>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
