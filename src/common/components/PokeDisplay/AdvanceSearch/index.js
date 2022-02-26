import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

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

  return (
    <Box sx={{ mt: 2, mb: 2 }} className="advanceSearch">
      Advance Search:
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
          gap: 2,
          width: "50%",
        }}
      >
        {types.map((type) => (
          <ButtonBase
            key={`criteria-type-${type}`}
            onClick={() => handleChooseType(type, this)}
            className={typeChoices.includes(type) ? "choiceSelected" : ""}
          >
            <Card sx={{ textAlign: "center", width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {type}
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        ))}
      </Box>
      Ability Area
    </Box>
  );
};

export default AdvanceSearch;
