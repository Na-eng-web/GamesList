import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../Image/logo.webp";
import SwitchButton from "./SwitchButton,";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <HStack p={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchBar onSearch={onSearch} />
      <SwitchButton />
    </HStack>
  );
};

export default Navbar;
