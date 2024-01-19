// src/components/FilmList.js
import React from "react";
import "../css/FilmList.css"; // Importez le fichier CSS

const FilmList = ({ films, onDelete, onFavorite, onRate, onSelectFilm }) => {
  return (
    <div className="film-list-container">
      <h2 className="film-list-title">Liste des films</h2>
      <ul>
        {films.map((film) => (
          <li key={film.id} className="film-list-item">
            <span className="film-title" onClick={() => onSelectFilm(film)}>
              {film.title}
            </span>
            <button
              className="film-list-button"
              onClick={() => onDelete(film.id)}
            >
              Supprimer
            </button>
            <button
              className="film-list-button"
              onClick={() => onFavorite(film.id)}
            >
              Favori
            </button>
            <button
              className="film-list-button"
              onClick={() => onRate(film.id)}
            >
              Noter
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
