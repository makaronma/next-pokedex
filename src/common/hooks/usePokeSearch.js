import { useState, useEffect } from "react";

const matchName = (poke, regex) => {
  return poke.name.match(regex);
};

const matchID = (poke, regex) => {
  return String(poke.id).match(regex);
};

const matchType = (poke, typeChoices) => {
  const pokeTypes =
    poke.types.length > 1
      ? poke.types.map((s) => s.type.name)
      : [poke.types[0].type.name];

  const result = typeChoices.every((r) => pokeTypes.indexOf(r) >= 0);
  return result;
};

const checkMatchCriteria = (poke, conditions) => {
  const regex = new RegExp(`${conditions.keyword}`);
  return (
    (matchName(poke, regex) || matchID(poke, regex)) &&
    matchType(poke, conditions.types)
  );
};

const usePokeSearch = (pokes, conditions) => {
  const [filteredPokes, setFilteredPokes] = useState([]);

  useEffect(() => {
    setFilteredPokes(
      pokes.filter((poke) => checkMatchCriteria(poke, conditions))
    );
  }, [conditions, pokes]);

  return filteredPokes;
};

export default usePokeSearch;
