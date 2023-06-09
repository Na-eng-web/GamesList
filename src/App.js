import React, { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componant/Navbar";
import Gamegrid from "./componant/Gamegrid";
import GenreList from "./componant/ganaraList";
import PlatformSelector from "./componant/PlatformSelector";
import SortSelector from "./componant/SortSelector.jsx";
import Headings from "./componant/Heading";

const App = () => {
  const [gameQuery, setGameQuery] = useState({});

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
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem px={5} area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Headings gameQuery={gameQuery} />
        <Flex paddingLeft={2} marginBottom={5}>
          <Box mr={"5"}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <Gamegrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
