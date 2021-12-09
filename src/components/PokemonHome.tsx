import PokemonSearch from "./PokemonSearch";
import PokemonSelected from "./PokemonSelected";
import { useAllPokemon, useSelectedPokemon, useSearchBar } from "../hooks";
import "./PokemonHome.css";

export default function PokemonHome() {
  const { generation_id, dex_name_like } = {
    generation_id: 4,
    dex_name_like: "original%",
  };
  // fetch pokemon list with current fetch status
  const { pokedex, loading, error } = useAllPokemon({
    generation_id,
    dex_name_like,
  });

  // create selection map of each pokemon for adding/removing from pokedex
  const { selectedPokemon, toggleSelectedPokemon } = useSelectedPokemon(
    pokedex,
    generation_id,
    dex_name_like
  );

  // create search component, selected status, and search results
  const { SearchBar, displaySearchResults, pokedexSearchResults } =
    useSearchBar(pokedex);

  if (error || loading) {
    return (
      <>
        {SearchBar}
        <div className="pokemonListMessage">
          <span>{error && "Something went wrong :("}</span>
          <span>{loading && "Loading..."}</span>
        </div>
      </>
    );
  }

  if (displaySearchResults) {
    const props = {
      pokedex,
      pokedexSearchResults,
      selectedPokemon,
      toggleSelectedPokemon,
    };
    return (
      <>
        {SearchBar}
        <PokemonSearch {...props} />
      </>
    );
  }

  const props = { pokedex, selectedPokemon, toggleSelectedPokemon };
  return (
    <>
      {SearchBar}
      <PokemonSelected {...props} />
    </>
  );
}
