import React from "react";
import App from "./App";
import Navigation from "./conponents/Navigation1";
import PokemonsFav from "./conponents/Pokemonsfav";
import Contact from "./conponents/Contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoriteProvider } from "./contexts/FavoritesContext1";

const Bla = () => {
  return (
    <div>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<PokemonsFav />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Bla;
