import {
  getPokemonNumber,
  PokedexByGeneration,
  SelectedPokemon,
  ToggleSelectedPokemon,
  PokedexEntryByGeneration,
  LookupPokedex,
} from "../../common";
import "./PokemonList.css";
import { useToggle } from "react-use";
import PokemonInfo from "./PokemonInfo";

type PokemonListType = {
  pokedex: PokedexByGeneration;
  trimmedPokedex?: PokedexByGeneration;
  selectedPokemon: SelectedPokemon;
  toggleSelectedPokemon: ToggleSelectedPokemon;
};

export default function PokemonList({
  pokedex,
  trimmedPokedex,
  selectedPokemon,
  toggleSelectedPokemon,
}: PokemonListType) {
  return (
    <>
      <ol className="pokemonList">
        {(trimmedPokedex ?? pokedex).map((pokedexEntry) => {
          const pokemonNumber = getPokemonNumber(pokedexEntry);
          return (
            <PokemonListItem
              {...{
                key: pokemonNumber,
                pokedexEntry,
                checkbox: () => toggleSelectedPokemon(pokemonNumber),
                checked: selectedPokemon.get(pokemonNumber) ?? false,
                lookupPokedex: (n) =>
                  pokedex.find((e) => getPokemonNumber(e) === n),
              }}
            />
          );
        })}
      </ol>
    </>
  );
}

function PokemonListItem({
  pokedexEntry,
  checkbox,
  checked,
  lookupPokedex,
}: {
  pokedexEntry: PokedexEntryByGeneration;
  checkbox: () => void;
  checked: boolean;
  lookupPokedex: LookupPokedex;
}) {
  const pokemonNumber = getPokemonNumber(pokedexEntry);
  const [pokemonVisible, toggle] = useToggle(false);

  return (
    <li className="pokemonListItem" key={pokemonNumber}>
      {pokemonVisible && (
        <PokemonInfo {...{ pokedexEntry, close: toggle, lookupPokedex }} />
      )}
      <button onClick={toggle}>
        #{pokemonNumber} - {pokedexEntry.pokemon_name}
      </button>
      <div className="checkbox-container">
        <label
          className="checkbox-label"
          htmlFor={`addToPokeDex-${pokemonNumber}`}
        >
          {checked ? "Remove." : "Add."}
        </label>
        <input
          className="addToPokeDex visually-hidden"
          type="checkbox"
          id={`addToPokeDex-${pokemonNumber}`}
          onClick={checkbox}
          checked={checked}
        />
        <div className="checkbox-visual-representation" />
      </div>
    </li>
  );
}
