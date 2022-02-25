import { getAllPokesPath, getSinglePoke } from "common/utils/pokeapi";
import Image from "next/image";
const PokeScreen = ({ pokeData }) => {
  const {
    id,
    name,
    height,
    weight,
    // abilities,
    // species,
    image,
    baseStats,
    // types,
  } = pokeData;
  const { hp, attack, defense, specialAttack, specialDefense, speed } =
    baseStats;

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
  const pokeData = await getSinglePoke(params.id);
  return {
    props: {
      pokeData,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = await getAllPokesPath();
  return {
    paths,
    fallback: false,
  };
};

export default PokeScreen;
