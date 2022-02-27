import Box from "@mui/material/Box";

import PokesContainer from "common/components/PokeDisplay/ItemsContainer";
import LoadMoreBtn from "common/components/PokeDisplay/LoadMoreBtn";
import PokeItem from "common/components/PokeDisplay/Item";

import { memo,useMemo } from "react";

const DisplayPanel = ({
  pokesDisplay,
  hasMore,
  setPage,
}) => {
  const pokesItems = useMemo(() => {
    return (
      <>
        {pokesDisplay.map((poke) => (
          <PokeItem
            key={`pokeListItem-${poke.id}`}
            pokeId={`${poke.id}`}
            name={poke.name}
            img={poke.image}
          />
        ))}
      </>
    );
  }, [pokesDisplay]);
  
  return (
    <Box sx={{ minHeight: 850 }}>
      <PokesContainer>{pokesDisplay && pokesItems}</PokesContainer>

      {hasMore? (
        "NO More"
      ) : (
        <LoadMoreBtn setPage={setPage} />
      )}
    </Box>
  );
};

export default memo(DisplayPanel);
