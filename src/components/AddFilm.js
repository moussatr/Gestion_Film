import React, { useState } from "react";
import "../css/AddFilm.css"; // Importez le fichier CSS

const AddFilm = ({ onAdd, onUpdateJsonFile }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilm = {
      title,
      director,
      releaseYear: parseInt(releaseYear),
      favorite,
      rating: parseFloat(rating),
    };

    // Ajouter le nouveau film
    onAdd(newFilm);

    // Mettre à jour le fichier JSON
    onUpdateJsonFile(newFilm);

    // Réinitialiser les champs de saisie
    setTitle("");
    setDirector("");
    setReleaseYear("");
    setFavorite(false);
    setRating("");
  };

  return (
    <div className="add-film-container">
      <h2 className="add-film-title">Ajouter un nouveau film</h2>
      <form onSubmit={handleSubmit}>
        <label className="add-film-label">
          Titre du film:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="add-film-input"
          />
        </label>
        <label className="add-film-label">
          Directeur:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="add-film-input"
          />
        </label>
        <label className="add-film-label">
          Année de sortie:
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className="add-film-input"
          />
        </label>
        <label className="add-film-label">
          Favori:
          <input
            type="checkbox"
            checked={favorite}
            onChange={() => setFavorite(!favorite)}
            className="add-film-checkbox"
          />
        </label>
        <label className="add-film-label">
          Note:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="add-film-input"
          />
        </label>
        <button type="submit" className="add-film-button">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddFilm;
