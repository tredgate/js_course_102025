// src/learning/conditions
// switch_calculator.js
const a = 15;
const b = 12;
const operation = "sčítání"; // ? V reálné aplikaci by tuto operaci volil uživatel například v GUI. Možnosti: add, subtract, multiply, divide
let result;

switch (operation) {
  case "add":
    // ? Kroky v případě, že operation == "add"
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    throw new Error(
      "Chyba: nevalidní operace. Je možné zvolit pouze: add, subtract, multiply, delete"
    );
}

console.log(`Výsledek operace: ${operation} s čísly: ${a}, ${b} je: ${result}`);

// * alternativa if..else if
if (operation == "add") {
  result = a + b;
} else if (operation == "subtract") {
  result = a - b;
} else if (operation == "multiply") {
  result = a * b;
} else if (operation == "divide") {
  result = a / b;
} else {
  throw new Error("Nevalidní operace");
}
