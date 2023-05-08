import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Image/logo.webp";
import SwitchButton from "./SwitchButton,";

const Navbar = () => {
  return (
    <HStack p={"10px"} justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <SwitchButton />
    </HStack>
  );
};

export default Navbar;
