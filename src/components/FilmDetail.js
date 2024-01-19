// src/components/FilmDetail.js
import React from "react";
import "../css/FilmDetail.css"; // Importez le fichier CSS

const FilmDetail = ({ film }) => {
  return (
    <div className="film-detail-container">
      {film && (
        <>
          <h3 className="film-title">Titre : {film.title}</h3>
          <p className="film-detail-item">Directeur : {film.director}</p>
          <p className="film-detail-item">
            Date de sortie : {film.releaseYear}
          </p>
          <p className="film-detail-item">
            Favori:{" "}
            <span className={film.favorite ? "favorite-yes" : "favorite-no"}>
              {film.favorite ? "Oui" : "Non"}
            </span>
          </p>
          <p className="film-detail-item">
            Note:{" "}
            <span className={film.rating ? "" : "not-rated"}>
              {film.rating || "Non noté"}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default FilmDetail;
