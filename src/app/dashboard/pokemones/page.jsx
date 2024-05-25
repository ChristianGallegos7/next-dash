import PokemonsGrid from "@/app/pokemons/PokemonsGrid";

const getPokemons = async (limit = 7, offset = 0) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data = await res.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2),
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(100);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 mx-auto">
        Listado de Pokémons estatico
      </span>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
