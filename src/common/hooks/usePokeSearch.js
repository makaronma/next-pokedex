import { useState, useEffect } from "react";

const matchName = (poke, regex) => {
  return poke.name.match(regex);
};

const matchID = (poke, regex) => {
  return String(poke.id).match(regex);
};

const checkMatchCriteria = (poke, conditions) => {
  const regex = new RegExp(`${conditions.keyword}`);
  return matchName(poke, regex) || matchID(poke, regex);
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
