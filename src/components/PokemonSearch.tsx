import {
  PokedexByGeneration,
  SelectedPokemon,
  ToggleSelectedPokemon,
} from "../common";
import PokemonList from "./common/PokemonList";

type PokemonSearchType = {
  pokedex: PokedexByGeneration;
  pokedexSearchResults: PokedexByGeneration;
  selectedPokemon: SelectedPokemon;
  toggleSelectedPokemon: ToggleSelectedPokemon;
};

export default function PokemonSearch({
  pokedex,
  pokedexSearchResults,
  selectedPokemon,
  toggleSelectedPokemon,
}: PokemonSearchType) {
  return (
    <>
      <p>
        <span>Add missing Pokémon from your PokéDex here.</span>
      </p>
      <PokemonList
        {...{
          pokedex,
          trimmedPokedex: pokedexSearchResults,
          selectedPokemon,
          toggleSelectedPokemon,
        }}
      />
    </>
  );
}
