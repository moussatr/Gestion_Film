// src/pages/DetailFilm.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";

const DetailFilmPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // Chargez les données du fichier JSON ou utilisez votre méthode pour obtenir le film correspondant à l'ID
    fetch("/films.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedFilm = data.find((film) => film.id === parseInt(id, 10));
        setFilm(selectedFilm);
      })
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, [id]);

  return (
    <div>
      <h2>Détails du film</h2>
      <FilmDetail film={film} />
    </div>
  );
};

export default DetailFilmPage;
