import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoritesContext1";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://th.bing.com/th/id/OIP.H6ho9kmZRZbc7Fw8TdRcgQHaC2?rs=1&pid=ImgDetMain";

  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
