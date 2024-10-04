import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pokedex
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              PokemonFav
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
