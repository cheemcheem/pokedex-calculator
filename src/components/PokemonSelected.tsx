import {
  getPokemonNumber,
  PokedexByGeneration,
  SelectedPokemon,
  ToggleSelectedPokemon,
} from "../common";
import PokemonList from "./common/PokemonList";

type PokemonSelectedType = {
  pokedex: PokedexByGeneration;
  selectedPokemon: SelectedPokemon;
  toggleSelectedPokemon: ToggleSelectedPokemon;
};
export default function PokemonSelected({
  pokedex,
  selectedPokemon,
  toggleSelectedPokemon,
}: PokemonSelectedType) {
  return (
    <>
      <PokemonList
        {...{
          pokedex,
          trimmedPokedex: pokedex.filter((p) =>
            selectedPokemon.get(getPokemonNumber(p))
          ),
          selectedPokemon,
          toggleSelectedPokemon,
        }}
      />
    </>
  );
}
