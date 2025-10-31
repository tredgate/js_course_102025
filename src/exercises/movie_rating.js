// src/exercises
// movie_rating.js

const movies = [
  "Forest Gump",
  "Titanic",
  "Něco na té Mary je",
  "Avengers",
  "Kameňák",
  "Blbý a blbější",
];
const movieRatings = [10, 8, 7, 5, 1, 3];
const greatMovieRating = 8;
const greatMovies = [];
const greatMovieRatings = [];

for (let i = 0; i < movies.length; i++) {
  if (movieRatings[i] >= greatMovieRating) {
    greatMovies.push(movies[i]);
    greatMovieRatings.push(movieRatings[i]);
  }
}

console.log("-----------------------");
console.log("⭐️ 🎥 SKVĚLÉ FILMY");
console.log("-----------------------");
for (let i = 0; i < greatMovies.length; i++) {
  console.log(
    `- Název filmu: ${greatMovies[i]}, hodnocení: ${greatMovieRatings[i]}`
  );
}

console.log("------------------------------------");
console.log("⭐️ 🎥 SKVĚLÉ FILMY - pomocí foreach");
console.log("------------------------------------");
greatMovies.forEach((greatMovie, index) => {
  console.log(
    `- Název filmu: ${greatMovie}, hodnocení: ${greatMovieRatings[index]}`
  );
});
