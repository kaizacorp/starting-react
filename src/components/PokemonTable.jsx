import React from 'react';
import PokemonRow from './PokemonRow';

const PokemonTable = ({pokemon, filter, selectedPokemonSet}) => (
<table width="100%">
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onClick={(pokemon) => selectedPokemonSet(pokemon)}
                  />
                ))}
            </tbody>
          </table>

);

export default PokemonTable;