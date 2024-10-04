import React, { createContext, useContext } from "react";

const FavoriteContext = createContext();

export const useFavoritePokemons = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children, value }) => {
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
