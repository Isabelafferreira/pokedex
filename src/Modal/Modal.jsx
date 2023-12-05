import React from "react";
import "./modal.scss";

const Modal = ({ pokemonData, closeModal }) => {
  return (
    <div data-fs-modal-overlay onClick={closeModal}>
      <div data-fs-modal onClick={(e) => e.stopPropagation()}>
        <button data-fs-close-btn onClick={closeModal}>
          X
        </button>
        {pokemonData && (
          <div data-fs-modal-items>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <h2>{pokemonData.name}</h2>
            <div data-fs-types>
              {pokemonData.types.map((type, index) => (
                <p key={index}>{type.type.name}</p>
              ))}
            </div>
            <div data-fs-measures>
              <div data-fs-weight>
                <p>
                  <b>{pokemonData.weight} KG</b>
                </p>
                <span>Weight</span>
              </div>
              <div data-fs-height>
                <p>
                  <b>{pokemonData.height} M</b>
                </p>
                <span>Height</span>
              </div>
            </div>
            <div data-fs-stats>
              {pokemonData.stats.map((stat, index) => (
                <p key={index}>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
