import { getPokemonNumber, PokedexEntryByGeneration } from "../../common";
import "./PokemonInfo.css";

const getEvolutionText = (pokedexEntry: PokedexEntryByGeneration) => {
  const evolution_requirements = pokedexEntry.evolution_requirements;

  if (!evolution_requirements || evolution_requirements.length === 0) {
    return "No evolution requirements.";
  }

  const {
    evolution_item,
    evolution_trigger,
    min_affection,
    min_beauty,
    min_evolution_level,
    min_happiness,
    required_gender,
    required_held_item,
    required_known_move,
    required_location,
    required_party_pokemon,
    required_party_type,
    requires_overworld_rain,
  } = evolution_requirements![0];

  let returnString = "Evolution requirements: ";

  if (evolution_item) {
    returnString += ` Use a ${evolution_item.evolution_item_name}.`;
  }
  if (evolution_trigger) {
    returnString += ` Requires a '${evolution_trigger.evolution_trigger_details}'.`;
  }
  if (min_affection) {
    returnString += ` Requires a minimum affection of '${min_affection}'.`;
  }
  if (min_beauty) {
    returnString += ` Requires a minimum beauty of '${min_beauty}'.`;
  }
  if (min_evolution_level) {
    returnString += ` Requires a minimum level of '${min_evolution_level}'.`;
  }
  if (min_happiness) {
    returnString += ` Requires a minimum happiness of '${min_happiness}'.`;
  }
  if (required_gender) {
    returnString += ` Needs to be '${required_gender.name}'.`;
  }
  if (required_held_item) {
    returnString += ` Needs to hold '${required_held_item.name}'.`;
  }
  if (required_known_move) {
    returnString += ` Needs to know '${required_known_move.name}'.`;
  }
  if (required_location) {
    returnString += ` Needs to be at '${required_location.name}'.`;
  }
  if (required_party_pokemon) {
    returnString += ` Needs to have '${required_party_pokemon.required_party_pokemon_name}' in your party.`;
  }
  if (required_party_type) {
    returnString += ` Needs to have a party of type '${required_party_type.required_party_type_details}'.`;
  }
  if (required_party_type) {
    returnString += ` Needs to have a party with '${required_party_type.required_party_type_details}'.`;
  }
  if (requires_overworld_rain) {
    returnString += ` Requires overworld rain.`;
  }

  return returnString;
};

export default function PokemonInfo({
  pokedexEntry,
  close,
  lookupPokedex,
}: {
  pokedexEntry: PokedexEntryByGeneration;
  close: () => void;
  lookupPokedex: (_: number) => PokedexEntryByGeneration | undefined;
}) {
  const pokemonName = pokedexEntry.pokemon_name;
  const { pokedex_information, pokemon_pokedex_number } =
    pokedexEntry.pokemon_details[0];
  console.log({ pokedexEntry });
  return (
    <>
      <div className="pop-up-card">
        <button className="close" onClick={close}>
          ❌
        </button>

        <h1 id="pokemonName">{pokemonName}</h1>
        <h2 id="pokemonNumber">
          #{pokemon_pokedex_number} in the {pokedex_information.pokedex_name}
        </h2>

        <div className="evolutions">
          {pokedexEntry.evolutions.pokemon
            .map((p) => {
              console.log({
                p,
                l: lookupPokedex(p.pokemon_details[0].pokemon_pokedex_number),
              });
              return p;
            })
            .map(getPokemonNumber)
            .map((p) => {
              console.log({ p, l: lookupPokedex(p) });
              return lookupPokedex(p);
            })
            .sort((p1, p2) => getPokemonNumber(p1!) - getPokemonNumber(p2!))
            .map((p, index, array) => (
              <>
                <p>
                  <span>
                    #{getPokemonNumber(p!)} - {p!.pokemon_name}
                  </span>
                  {index < array.length - 1 && (
                    <p>
                      <span>{getEvolutionText(array[index + 1]!)}</span>
                    </p>
                  )}
                </p>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
