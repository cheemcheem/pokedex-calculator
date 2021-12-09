import { PokemonDetails } from "./types";

export const getPokemonNumber = (pokemon: PokemonDetails) =>
  pokemon.pokemon_details[0].pokemon_pokedex_number;
