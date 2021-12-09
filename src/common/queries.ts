import { gql } from "@apollo/client";

export const POKEDEX_BY_GENERATION = gql`
  query getOriginalDexPokemonByGeneration(
    $generation_id: Int!
    $dex_name_like: String!
    $offset: Int
    $limit: Int
  ) {
    pokemon: pokemon_v2_pokemonspecies(
      where: {
        pokemon_v2_pokemondexnumbers: {
          pokemon_v2_pokedex: {
            pokemon_v2_region: { id: { _eq: $generation_id } }
            name: { _like: $dex_name_like }
          }
        }
      }
      order_by: { id: asc }
      offset: $offset
      limit: $limit
    ) {
      ...pokedex
      ...evolution_requirements
      ...evolution_chain
    }
  }

  fragment pokedex on pokemon_v2_pokemonspecies {
    pokemon_name: name
    pokemon_details: pokemon_v2_pokemondexnumbers(
      where: {
        pokemon_v2_pokedex: {
          pokemon_v2_region: { id: { _eq: $generation_id } }
          name: { _like: $dex_name_like }
        }
      }
    ) {
      pokemon_pokedex_number: pokedex_number
      pokedex_information: pokemon_v2_pokedex {
        pokedex_name: name
      }
    }
  }

  fragment evolution_requirements on pokemon_v2_pokemonspecies {
    evolution_requirements: pokemon_v2_pokemonevolutions {
      min_evolution_level: min_level
      min_affection
      min_beauty
      min_happiness
      required_gender: pokemon_v2_gender {
        name
      }
      required_known_move: pokemon_v2_move {
        name
      }
      required_held_item: pokemonV2ItemByHeldItemId {
        name
      }
      required_location: pokemon_v2_location {
        name
      }
      evolution_item: pokemon_v2_item {
        evolution_item_name: name
      }
      evolution_trigger: pokemon_v2_evolutiontrigger {
        evolution_trigger_details: name
      }
      requires_overworld_rain: needs_overworld_rain
      required_party_pokemon: pokemonV2PokemonspecyByPartySpeciesId {
        required_party_pokemon_name: name
      }
      required_party_type: pokemonV2TypeByPartyTypeId {
        required_party_type_details: name
      }
    }
  }

  fragment evolution_chain on pokemon_v2_pokemonspecies {
    evolutions: pokemon_v2_evolutionchain {
      pokemon: pokemon_v2_pokemonspecies(
        where: {
          pokemon_v2_pokemondexnumbers: {
            pokemon_v2_pokedex: {
              pokemon_v2_region: { id: { _eq: $generation_id } }
              name: { _like: $dex_name_like }
            }
          }
        }
      ) {
        ...pokedex
      }
    }
  }
`;
