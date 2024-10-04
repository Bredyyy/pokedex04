import { useState } from "react";

export const useFavoritePokemonsState = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const updateFavoritePokemons = (pokemonName) => {
    setFavoritePokemons((prevFavorites) =>
      prevFavorites.includes(pokemonName)
        ? prevFavorites.filter((name) => name !== pokemonName)
        : [...prevFavorites, pokemonName]
    );
  };

  return { favoritePokemons, updateFavoritePokemons };
};
