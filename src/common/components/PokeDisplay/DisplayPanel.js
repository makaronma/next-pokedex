import Box from "@mui/material/Box";

import PokesContainer from "common/components/PokeDisplay/ItemsContainer";
import LoadMoreBtn from "common/components/PokeDisplay/LoadMoreBtn";

import { memo } from "react";

const DisplayPanel = ({
  pokesDisplay,
  pokesItems,
  pokesBeforeDisplay,
  page,
  loadMoreAmount,
  setPage,
}) => {
  return (
    <Box sx={{ minHeight: 850 }}>
      <PokesContainer>{pokesDisplay && pokesItems}</PokesContainer>

      {pokesBeforeDisplay.length <= page * loadMoreAmount + loadMoreAmount ? (
        "NO More"
      ) : (
        <LoadMoreBtn setPage={setPage} />
      )}
    </Box>
  );
};

export default memo(DisplayPanel);
