// src/pages/ListFilmPage.js
import React, { useState, useEffect } from "react";
import FilmList from "../components/FilmList";
import FilmDetail from "../components/FilmDetail";
import { useNavigate } from "react-router-dom";
import "../css/ListFilmPage.css";

const ListFilmPage = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const navigate = useNavigate(); // Utilisez useNavigate pour naviguer entre les pages

  useEffect(() => {
    // Chargez les données du fichier JSON lors de l'initialisation
    fetch("/films.json")
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, []);

  const deleteFilm = (filmId) => {
    setFilms(films.filter((film) => film.id !== filmId));
  };

  const toggleFavorite = (filmId) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === filmId ? { ...film, favorite: !film.favorite } : film
      )
    );
  };

  const rateFilm = (filmId) => {
    const newRating = prompt("Donnez une note au film (1-5)");
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
      setFilms((prevFilms) =>
        prevFilms.map((film) =>
          film.id === filmId ? { ...film, rating: parseInt(newRating) } : film
        )
      );
    } else {
      alert("Veuillez entrer une note valide (entre 1 et 5).");
    }
  };

  const getRandomFilm = () => {
    const randomIndex = Math.floor(Math.random() * films.length);
    setSelectedFilm(films[randomIndex]);
  };

  const selectFilm = (film) => {
    setSelectedFilm(film);
    // Naviguer vers la page de détails avec l'ID du film
    navigate(`/detail/${film.id}`);
  };

  const filterFilms = (film) => {
    return (
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showFavorites || (showFavorites && film.favorite))
    );
  };

  return (
    <div className="list-film-container">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <label>
          Filtrer par favori:
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={() => setShowFavorites(!showFavorites)}
            className="filter-checkbox"
          />
        </label>
      </div>
      <FilmList
        films={films.filter(filterFilms)}
        onDelete={deleteFilm}
        onFavorite={toggleFavorite}
        onRate={rateFilm}
        onSelectFilm={selectFilm}
      />
      <button onClick={getRandomFilm} className="random-film-button">
        Afficher un film aléatoire
      </button>
      <div className="film-detail-container">
        <FilmDetail film={selectedFilm} />
      </div>
    </div>
  );
};

export default ListFilmPage;
