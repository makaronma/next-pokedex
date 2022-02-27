import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import { useEffect, useMemo, useState, useCallback } from "react";

const AdvanceSearch = ({ types, setConditions }) => {
  const [choices, setChoices] = useState([]);

  const handleChooseType = useCallback((type) => {
    setChoices((prev) => {
      // cancel choice
      if (prev.includes(type)) return prev.filter((c) => c !== type);

      // [current choice]
      if (prev.length === 0) return [type];

      // [latest choice, current choice]
      return [prev.pop(), type];
    });
  }, []);

  useEffect(() => {
    setConditions((prev) => ({
      ...prev,
      types: choices,
    }));
  }, [choices, setConditions]);

  const typeChoicesItems = useMemo(() => {
    return (
      <>
        {types.map((type) => (
          <Grid item xs={3} key={`criteria-type-${type}`}>
            <ButtonBase
              sx={{ width: "100%", p: 1 }}
              onClick={() => handleChooseType(type, this)}
              className={`typeChoice ${
                choices.includes(type) ? "choiceSelected" : ""
              }${
                !choices.includes(type) && choices.length === 2
                  ? " disabled"
                  : ""
              }`}
              disabled={!choices.includes(type) && choices.length === 2}
            >
              <Typography gutterBottom variant="body2">
                {type}
              </Typography>
            </ButtonBase>
          </Grid>
        ))}
      </>
    );
  }, [types, handleChooseType, choices]);

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
