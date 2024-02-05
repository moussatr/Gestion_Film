#Documentation de l'Application React de Gestion de Films

Cette documentation fournit un aperçu de l'application React de gestion de films. L'application comprend plusieurs fonctionnalités de base pour afficher, ajouter, supprimer, noter, et filtrer des films, ainsi que pour afficher des détails de film.

Composants Principaux
App (src/App.js):

Composant racine de l'application.
Gère l'état global des films.
Utilise React Router pour la navigation entre les pages.
Menu (src/components/Menu.js):

Barre de navigation simple avec des liens vers les pages Accueil et Liste de films.
Utilise React Router pour la navigation.
AddFilm (src/components/AddFilm.js):

Composant permettant d'ajouter de nouveaux films.
Propriétés :
onAdd: Fonction appelée lorsqu'un nouveau film est ajouté.
onUpdateJsonFile: Fonction appelée pour mettre à jour le fichier JSON.
FilmList (src/components/FilmList.js):

Affiche une liste de films avec des fonctionnalités telles que suppression, favori, notation.
Propriétés :
films: Liste des films à afficher.
onDelete: Fonction appelée lorsqu'un film est supprimé.
onFavorite: Fonction appelée lorsqu'un film est marqué comme favori.
onRate: Fonction appelée lorsqu'un film est noté.
onSelectFilm: Fonction appelée lorsqu'un film est sélectionné pour afficher les détails.
FilmDetail (src/components/FilmDetail.js):

Affiche les détails d'un film sélectionné.
Propriétés :
film: Objet représentant le film dont les détails sont affichés.
Pages
AddFilmPage (src/pages/AddFilmPage.js):

Page pour l'ajout de nouveaux films.
Utilise le composant AddFilm.
ListFilmPage (src/pages/ListFilmPage.js):

Page principale affichant la liste des films.
Permet la suppression, le marquage comme favori, la notation et la sélection aléatoire.
Utilise le composant FilmList et FilmDetail.
Intègre un système de recherche et de filtrage.
DetailFilmPage (src/pages/DetailFilmPage.js):

Page pour afficher les détails d'un film sélectionné.
Utilise le composant FilmDetail.
Fonctionnalités Principales
Affichage de la Liste des Films:

Utilisation du composant FilmList pour afficher la liste des films.
Ajout de Nouveaux Films:

Utilisation du composant AddFilm sur la page AddFilmPage.
Suppression de Film:

Implémentation de la fonctionnalité de suppression dans le composant FilmList.
Fiche Détaillée:

Utilisation du composant FilmDetail pour afficher les détails d'un film sélectionné.
Affichage d'un Film Aléatoire:

Implémentation d'une fonction pour récupérer et afficher un film aléatoire.
Mise en Favori:

Ajout d'une propriété "favori" à chaque film avec la possibilité de la basculer.
Système de Notation des Films:

Ajout d'une propriété "note" à chaque film avec la possibilité de la mettre à jour.
Système de Recherche et de Filtrage:

Ajout d'un champ de recherche par titre et d'une option de filtrage par favori.
Navigation
Utilisation de React Router pour la navigation entre les pages.
Utilisation du Fichier JSON
Chargement initial des données depuis un fichier JSON.
Mise à jour du fichier JSON lors de l'ajout de nouveaux films.
Stylisation
Utilisation de fichiers CSS pour styliser les composants et les pages.
Exemple de Fichier JSON (films.json)
json
Copy code
[
{
"id": 1,
"title": "Inception",
"director": "Christopher Nolan",
"releaseYear": 2010,
"favorite": true,
"rating": 4.5
},
// ... (autres films)
]
Conclusion
Cette application React offre une gestion simple de films avec des fonctionnalités de base et une interface conviviale. Vous pouvez l'étendre et la personnaliser selon vos besoins.
