import PokemonCard from "./PokemonCard";

export default function PokemonsGrid({ pokemons }) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <div>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}
