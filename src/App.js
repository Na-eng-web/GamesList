import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componant/Navbar";
import Gamegrid from "./componant/Gamegrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid />
      </GridItem>
    </Grid>
  );
};

export default App;
