import Head from "next/head";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import PokeItem from "common/components/PokeDisplay/Item";
import ItemsContainer from "common/components/PokeDisplay/ItemsContainer";
import AdvanceSearch from "common/components/PokeDisplay/AdvanceSearch";
import { useState, useEffect, useRef, useCallback } from "react";
import { getAllPokes, getAllTypesName } from "common/utils/pokeApi";

export default function Home({ pokes, types, loadMoreAmount }) {
  const [pokesBeforeDisplay, setPokesBeforeDisplay] = useState([]);
  const [pokesDisplay, setPokesDisplay] = useState([]);
  const [page, setPage] = useState(0);
  const filterKeyword = useRef();

  // Init pokes array
  useEffect(() => {
    console.log("init");
    setPokesBeforeDisplay(pokes);
  }, [pokes]);

  // Init and Loadmore (change pokes array)
  useEffect(() => {
    const start = page * loadMoreAmount;
    const end = start + loadMoreAmount;
    console.log(`Load More from ${start} to ${end}`);
    setPokesDisplay((prev) => [
      ...prev,
      ...pokesBeforeDisplay.slice(start, end),
    ]);
  }, [pokesBeforeDisplay, page, loadMoreAmount]);

  // Loadmore (add page)
  const handleLoadMore = () => {
    console.log("loadmore btn pressed");
    setPage((prev) => prev + 1);
  };

  // filter
  const checkMatchCriteria = (poke) => {
    const regex = new RegExp(`${filterKeyword.current.value}`);
    return poke.name.match(regex);
  };

  // filter and reset poke array
  const handleFilterPoke = useCallback(() => {
    const filteredPokes = pokes.filter((poke) => checkMatchCriteria(poke));
    setPokesDisplay([]);
    setPokesBeforeDisplay(filteredPokes);
    setPage(0);
  }, [pokes]);

  return (
    <div>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", alignItems: "end" }}>
        <TextField
          id="standard-basic"
          label="Keyword"
          variant="standard"
          inputRef={filterKeyword}
        />
        <IconButton aria-label="search" onClick={handleFilterPoke}>
          <SearchIcon />
        </IconButton>
      </div>
      <AdvanceSearch types={types} />

      <h2>Poke List: </h2>
      <ItemsContainer>
        {pokesDisplay &&
          pokesDisplay.map((poke) => (
            <PokeItem
              key={`pokeListItem-${poke.id}`}
              id={poke.id}
              name={poke.name}
              img={poke.image}
            />
          ))}
      </ItemsContainer>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {pokesBeforeDisplay.length <= page * loadMoreAmount + loadMoreAmount ? (
          "NO More"
        ) : (
          <Button variant="outlined" onClick={handleLoadMore}>
            More
          </Button>
        )}
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  const pokes = await getAllPokes();
  const types = await getAllTypesName();
  const loadMoreAmount = parseInt(process.env.LOADMOREAMOUNT);

  return {
    props: {
      pokes,
      types,

      loadMoreAmount,
    },
  };
}
