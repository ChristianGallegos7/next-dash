import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="relative flex w-full max-w-[24rem] flex-col bg-gray-800 shadow-md overflow-hidden">
      <div className="relative mx-4 mt-4 overflow-hidden bg-gray-700">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="Image"
          width={150}
          height={150}
          className="mx-auto py-4"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="p-6 pt-4 flex flex-col items-center gap-4">
        <button
          className="block w-full select-none bg-gray-600 py-2 px-6 text-center font-sans text-lg font-semibold text-white shadow-sm transition-all hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 capitalize"
          type="button"
        >
          {pokemon.name}
        </button>
        <Link href="/dashboard/pokemons" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all">
          <IoHeartOutline size={24} className="text-red-600"/>
          <span className="text-lg font-medium">No es favorito</span>
        </Link>
      </div>
    </div>
  );
}
