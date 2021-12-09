import { useState, useMemo } from "react";
import { PokedexByGeneration } from "../common";

export default function useSearchBar(pokedex: PokedexByGeneration) {
  const [searchQuery, setSearchQuery] = useState("");

  const onType = useMemo(
    () =>
      ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(value);
      },
    [setSearchQuery]
  );

  const pokedexSearchResults = useMemo(
    () =>
      searchQuery.length === 0
        ? pokedex
        : pokedex.filter((pokedexEntry) =>
            pokedexEntry.pokemon_name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ),
    [pokedex, searchQuery]
  );

  const [displaySearchResults, shouldDisplaySearchResults] = useState(false);

  const SearchBar = (
    <>
      <div id="pokemonSearch">
        <input
          onFocus={() => shouldDisplaySearchResults(true)}
          onChange={onType}
          placeholder="Search"
        />
        <button onClick={() => shouldDisplaySearchResults(false)}>❌</button>
      </div>
    </>
  );

  return { SearchBar, displaySearchResults, pokedexSearchResults };
}
