// src/components/Menu.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Menu.css"; // Importez le fichier CSS

function Menu({ isLoggedIn }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/" activeClassName="activeLink">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/ajouter" activeClassName="activeLink">
            Ajouter
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
