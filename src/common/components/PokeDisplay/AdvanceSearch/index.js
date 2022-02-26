import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import { useState, useEffect, useMemo } from "react";

const AdvanceSearch = ({ types, updatePokes, pokes }) => {
  const [typeChoices, setTypeChoices] = useState([]);

  useEffect(() => {
    const matchType = (poke) => {
      const pokeTypes =
        poke.types.length > 1
          ? poke.types.map((s) => s.type.name)
          : [poke.types[0].type.name];

      const result = typeChoices.every((r) => pokeTypes.indexOf(r) >= 0);
      return result;
    };

    const filteredPokes = pokes.filter((poke) => matchType(poke));
    updatePokes(filteredPokes);
  }, [typeChoices, pokes, updatePokes]);

  const handleChooseType = (type) => {
    setTypeChoices((prevChoices) => {
      // cancel choice
      if (prevChoices.includes(type))
        return prevChoices.filter((c) => c !== type);

      // [current choice]
      if (prevChoices.length === 0) return [type];

      // [latest choice, current choice]
      return [prevChoices.pop(), type];
    });
  };

  const typeChoicesItems = useMemo(
    () => (
      <>
        {types.map((type) => (
          <Grid item xs={3} key={`criteria-type-${type}`}>
            <ButtonBase
              sx={{ width: "100%", p: 1 }}
              onClick={() => handleChooseType(type, this)}
              className={`typeChoice ${
                typeChoices.includes(type) ? "choiceSelected" : ""
              }${
                !typeChoices.includes(type) && typeChoices.length === 2
                  ? " disabled"
                  : ""
              }`}
              disabled={!typeChoices.includes(type) && typeChoices.length === 2}
            >
              <Typography gutterBottom variant="body2">
                {type}
              </Typography>
            </ButtonBase>
          </Grid>
        ))}
      </>
    ),
    [typeChoices, types]
  );

  return (
    <Box sx={{ mt: 2, mb: 2 }} className="advanceSearch">
      Advance Search:
      <Box
        sx={{
          "@media screen and (min-width: 900px)": {
            width: "50%",
          },
        }}
      >
        <Grid container spacing={1}>
          {typeChoicesItems}
        </Grid>
      </Box>
      Ability Area
    </Box>
  );
};

export default AdvanceSearch;
