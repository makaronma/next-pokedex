const addTwoZero = (num) => {
  return num.toString().padStart(3, 0);
};

const removeZero = (num) => {
  return num.match(/[^0]\d*/);
};

export const getAllPokes = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${process.env.POKEAMOUNT}`
  );
  const { results } = await res.json();
  const urls = results.map((r) => r.url);

  const pokes = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      return res.json();
    })
  );
  const pokesModified = pokes.map(({ id, name, sprites, types }) => ({
    id: addTwoZero(id),
    name,
    image: sprites.front_default,
    types,
  }));

  return pokesModified;
};

export const getSinglePoke = async (pokeId) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${removeZero(pokeId)}`
  );
  const {
    id,
    name,
    abilities,
    height,
    weight,
    species,
    sprites,
    stats,
    types,
  } = await res.json();

  const pokeData = {
    id: addTwoZero(id),
    name,
    abilities,
    height,
    weight,
    species,
    image: sprites.front_default,
    baseStats: {
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      specialAttack: stats[3].base_stat,
      specialDefense: stats[4].base_stat,
      speed: stats[5].base_stat,
    },
    types,
  };

  return pokeData;
};

export const getAllPokesPath = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${process.env.POKEAMOUNT}`
  );
  const { results } = await res.json();

  const regex = /(?<=\/)\d+/;

  const paths = results.map(({ url }) => {
    const id = addTwoZero(url.match(regex));
    return {
      params: { id },
    };
  });

  return paths;
};

export const getAllTypesName = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/type/`);
  const { results } = await res.json();

  const types = results.map((type) => type.name);
  return types;
};
