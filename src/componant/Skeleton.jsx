import {
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const Skelton = () => {
  const abc = [1, 2, 3, 4, 5, 6];
  return (
    <Card
      borderRadius={"10px"}
      w={"250px"}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={"10px"}
      spacing={"10px"}
    >
      <Skeleton h={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default Skelton;
