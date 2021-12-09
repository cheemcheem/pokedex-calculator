export type PokedexEntryByGeneration = PokemonDetails &
  EvolutionRequirements &
  EvolutionChain;

export type PokedexByGeneration = PokedexEntryByGeneration[];

export type PokemonDetails = {
  pokemon_name: string;
  pokemon_details: {
    pokemon_pokedex_number: number;
    pokedex_information: {
      pokedex_name: string;
    };
  }[];
};
type EvolutionRequirements = {
  evolution_requirements?: {
    min_evolution_level?: number;
    min_affection?: number;
    min_beauty?: number;
    min_happiness?: number;
    required_gender?: {
      name: string;
    };
    required_known_move?: {
      name: string;
    };
    required_held_item?: {
      name: string;
    };
    required_location?: {
      name: string;
    };
    evolution_item?: {
      evolution_item_name: string;
    };
    evolution_trigger?: {
      evolution_trigger_details: string;
    };
    requires_overworld_rain?: string;
    required_party_pokemon: {
      required_party_pokemon_name: string;
    };
    required_party_type?: {
      required_party_type_details: string;
    };
  }[];
};
type EvolutionChain = {
  evolutions: {
    pokemon: PokemonDetails[];
  };
};

export type SelectedPokemon = Map<number, boolean>;
export type ToggleSelectedPokemon = (_: number) => void;
export type LookupPokedex = (_: number) => PokedexEntryByGeneration | undefined;
