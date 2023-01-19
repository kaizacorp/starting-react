import React, {useContext} from 'react';
import PokemonRow from './PokemonRow';
import PokemonContext from '../PokemonContext';

const PokemonTable = () =>{
    const { 
      state: {filter, pokemon},
      dispatch,
    } = useContext(PokemonContext);
    return  (
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
                    onClick={(pokemon) => 
                      dispatch({
                        type: "SET_SELECTED_POKEMON",
                        payload: pokemon,
                      })}
                  />
                ))}
            </tbody>
          </table>

);
                };

export default PokemonTable;