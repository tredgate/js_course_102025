// src/learning/functions
// constant_function.js

const logTextParams = (timestamp, text) => {
  console.log(`${timestamp} - ${text}`);
};

logTextParams("2025-10-31 09:55", "Už jsme schopní programovat skoro všechno!");
logTextParams("2025-10-31 09:54", "Používáme constant funkci");

/*
Cvičení - kalkulačka - funkce( ⌛15:00):
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: src/exercises, název souboru: calculator_functions_exercise.js
Vytvoř 4 funkce: add, subtract, multiply, divide
Každá funkce bude přijímat 2 parametry (a, b).
Funkce vypočítá početní operaci.
Funkce také zapíše výsledek do konzole ve formátu “a + b = vysledek”
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6

*/
