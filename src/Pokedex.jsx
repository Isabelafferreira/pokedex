import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Pokedex.css'

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchPokemon = async () => {
    const input = searchTerm.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
      const response = await axios.get(url);
      console.log(response)

      if (response.data) {
        setPokemonData(response.data);
        setErrorMessage('');
      }

    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Pokémon não encontrado!');
        setPokemonData(null);
      } else {
        setErrorMessage('Ocorreu um erro ao buscar o Pokémon.');
        setPokemonData(null);
        console.error(error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />
      <button onClick={searchPokemon}>Buscar</button>

      {pokemonData && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h2>{pokemonData.name}</h2>
          <div>
            <p>Type 1</p>
            <p>Type 2</p>
          </div>
          <p>Peso: {pokemonData.weight}</p>
          <p>Altura: {pokemonData.height}</p>
        </div>
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Pokedex
