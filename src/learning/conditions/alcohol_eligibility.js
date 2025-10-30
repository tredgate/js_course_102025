// src/learning/conditions
// alcohol_eligibility.js
const actualAge = "dvacet";
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // ? $ ve Windows: pravý ALT + ů
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu/jí ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.log("CHYBA: zadaný nesprávný věk");
}

console.log(12 !== "12");
