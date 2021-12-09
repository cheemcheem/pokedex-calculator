import { useMemo } from "react";
import { useLocalStorage } from "../hooks";
import { PokedexByGeneration } from "../common";

export default function useSelectedPokemon(
  pokedex: PokedexByGeneration,
  generation_id: number,
  dex_name_like: string
) {
  // todo make more efficient by manually triggering updates and not copying to new list
  const [selectedPokemon, setSelectedPokemon] = useLocalStorage<
    Map<number, boolean>
  >(
    `${generation_id}-${dex_name_like}`,
    new Map(
      pokedex.map((p) => [p.pokemon_details[0].pokemon_pokedex_number, false])
    ),
    {
      raw: false,
      serializer: (m) => JSON.stringify(Array.from(m)),
      deserializer: (m) => new Map(JSON.parse(m)),
    }
  );

  const toggleSelectedPokemon = useMemo(
    () => (pokemon_number: number) => {
      setSelectedPokemon((oldMap) => {
        console.log({ oldMap, pokemon_number });
        const oldVal = oldMap!.get(pokemon_number);
        const newVal = !oldVal;
        const newMap = new Map(oldMap!);
        newMap.set(pokemon_number, newVal);
        return newMap;
      });
    },
    [setSelectedPokemon]
  );

  return {
    selectedPokemon: selectedPokemon ?? new Map(),
    toggleSelectedPokemon,
  };
}
