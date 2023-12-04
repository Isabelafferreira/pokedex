import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';

import './Pokedex.scss'

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const searchPokemon = async () => {
    const input = searchTerm.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
      const response = await axios.get(url);
      console.log(response)

      if (response.data) {
        setPokemonData(response.data);
        setShowModal(true)
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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchPokemon();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div data-fs-home-container>
      <h1>Pokédex</h1>
      <div data-fs-search-container>
        <input
          data-fs-input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome do Pokémon"
          onKeyDown={handleKeyPress}
        />
        <button data-fs-button onClick={searchPokemon} id='search'>Buscar</button>
      </div>

      {showModal && (
        <Modal pokemonData={pokemonData} closeModal={closeModal} />
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Pokedex
