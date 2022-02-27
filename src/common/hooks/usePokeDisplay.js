import { useState, useEffect, useMemo } from "react";

const usePokeDisplay = (pokes, loadMoreAmount, filteredPokes) => {
  const [pokesDisplay, setPokesDisplay] = useState([]);
  const [pokesBeforeDisplay, setPokesBeforeDisplay] = useState([]);
  const [page, setPage] = useState(0);

  // INIT pokes
  useEffect(() => {
    setPokesBeforeDisplay(pokes);
  }, [pokes]);

  // UPDATE pokes
  useEffect(() => {
    setPokesDisplay([]);
    setPokesBeforeDisplay(filteredPokes);
    setPage(0);
  }, [filteredPokes]);

  // DISPLAY pokes
  useEffect(() => {
    const start = page * loadMoreAmount;
    const end = start + loadMoreAmount;
    setPokesDisplay((prev) => [
      ...prev,
      ...pokesBeforeDisplay.slice(start, end),
    ]);
  }, [pokesBeforeDisplay, page, loadMoreAmount]);

  // CHECK hasmore pokes
  const hasMore = useMemo(
    () => pokesBeforeDisplay.length <= page * loadMoreAmount + loadMoreAmount,
    [loadMoreAmount, page, pokesBeforeDisplay]
  );

  return { setPage, pokesDisplay, hasMore };
};

export default usePokeDisplay;
