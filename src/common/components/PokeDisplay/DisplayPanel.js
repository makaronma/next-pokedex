import Box from "@mui/material/Box";

import PokesContainer from "common/components/PokeDisplay/ItemsContainer";
import LoadMoreBtn from "common/components/PokeDisplay/LoadMoreBtn";

import { memo } from "react";

const DisplayPanel = ({
  pokesDisplay,
  pokesItems,
  hasMore,
  setPage,
}) => {
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
