// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddFilmPage from "./pages/AddFilm";
import ListFilmPage from "./pages/ListFilm";
import DetailFilmPage from "./pages/DetailFilm";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<ListFilmPage />} />
          <Route path="/ajouter" element={<AddFilmPage />} />

          <Route path="/detail/:id" element={<DetailFilmPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
