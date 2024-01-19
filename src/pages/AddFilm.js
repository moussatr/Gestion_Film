import React, { useState, useEffect } from "react";
import AddFilm from "../components/AddFilm";

const AddFilmPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Charger le contenu actuel du fichier JSON lors de l'initialisation
    fetch("/films.json")
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, []);

  const addFilm = (newFilm) => {
    const updatedFilms = [...films, { id: Date.now(), ...newFilm }];
    setFilms(updatedFilms);
  };

  const updateJsonFile = (newFilm) => {
    // Mettre à jour le fichier JSON
    const updatedFilms = [...films, { id: Date.now(), ...newFilm }];
    fetch("/films.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFilms),
    })
      .then((response) => response.json())
      .then((data) => console.log("Fichier JSON mis à jour :", data))
      .catch((error) =>
        console.error("Erreur lors de la mise à jour du fichier JSON :", error)
      );
  };

  return (
    <div>
      <AddFilm onAdd={addFilm} onUpdateJsonFile={updateJsonFile} />
    </div>
  );
};

export default AddFilmPage;
