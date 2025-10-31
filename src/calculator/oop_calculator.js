// src/calculator
// oop_calculator.js
export class OopCalculator {
  // ? V této třídě nepotřebujeme žádný constructor, protože nebudeme držet stavy ani vlastnosti (property)
  add(a, b) {
    const result = a + b;
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    return result;
  }

  divide(a, b) {
    const result = a / b;
    return result;
  }
}
