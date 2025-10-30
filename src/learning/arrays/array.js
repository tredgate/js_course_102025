// src/learning/arrays
// array.js
const cities = ["Praha", "Brno", "Beroun", "Olomouc"]; // ? Pole stringových prvků
console.log(cities);

console.log("2. město: " + cities[1]);

// ? BONUS: přidání prvku do již vytvořené array
cities.push("Plzeň");
console.log(cities);

for (let i = 0; i < cities.length; i++) {
  console.log("Město: " + cities[i]);
}
