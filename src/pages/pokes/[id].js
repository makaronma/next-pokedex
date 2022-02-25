import Image from "next/image";
const PokeScreen = ({ pokeData }) => {
  const {
    id,
    name,
    height,
    weight,
    abilities,
    species,
    image,
    baseStats,
    types,
  } = pokeData;
  const { hp, attack, defense, specialAttack, specialDefense, speed } =
    baseStats;
  console.log(pokeData);

  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <Image
        loader={() => image}
        src={`${name}-front-default.png`}
        alt={name}
        width={300}
        height={300}
      />
      <div>
        <h3>Stats</h3>
        <p>hp: {hp}</p>
        <p>attack: {attack}</p>
        <p>defense: {defense}</p>
        <p>specialAttack: {specialAttack}</p>
        <p>specialDefense: {specialDefense}</p>
        <p>speed: {speed}</p>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
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
  const image = sprites.front_default;
  const baseStats = {
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    specialAttack: stats[3].base_stat,
    specialDefense: stats[4].base_stat,
    speed: stats[5].base_stat,
  };

  return {
    props: {
      pokeData: {
        id,
        name,
        abilities,
        height,
        weight,
        species,
        image,
        baseStats,
        types,
      },
    },
  };
}

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=8`
    );
    const { results } = await res.json();

    return {
      paths: results.map(({ url }) => {
        const id = url.split(/[/ ]+/).slice(-2).join("");
        return {
          params: { id },
        };
      }),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export default PokeScreen;
