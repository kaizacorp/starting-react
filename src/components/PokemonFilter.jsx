import React from 'react';
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
`;

const PokemonFilter = ({filter, filterSet}) => (
    <Input
            type="text"
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
)

export default PokemonFilter;