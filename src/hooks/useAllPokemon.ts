import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import {
  getPokemonNumber,
  PokedexByGeneration,
  POKEDEX_BY_GENERATION,
} from "../common";

export default function useAllPokemon({
  generation_id,
  dex_name_like,
}: {
  generation_id: number;
  dex_name_like: string;
}) {
  const { loading, error, data } = useQuery<{ pokemon: PokedexByGeneration }>(
    POKEDEX_BY_GENERATION,
    {
      variables: {
        generation_id,
        dex_name_like,
      },
    }
  );
  const pokedex = useMemo(() => {
    return loading || error
      ? []
      : Array.from(data!.pokemon).sort((p1, p2) => {
          return getPokemonNumber(p1) - getPokemonNumber(p2);
        });
  }, [data, error, loading]);

  return { pokedex, loading, error };
}
