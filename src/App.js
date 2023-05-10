import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componant/Navbar";
import Gamegrid from "./componant/Gamegrid";
import GenreList from "./componant/ganaraList";
import PlatformSelector from "./componant/PlatformSelector";

const App = () => {
  const [selectedG, setSelectedG] = useState(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem px={5} area="aside">
          <GenreList
            selectedG={selectedG}
            onSelectGenre={(genre) => setSelectedG(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <Gamegrid selectedG={selectedG} />
      </GridItem>
    </Grid>
  );
};

export default App;
