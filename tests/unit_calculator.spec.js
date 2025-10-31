// tests/
// unit_calculator.spec.js

import { expect } from "chai";
import { OopCalculator } from "../src/calculator/oop_calculator.js";

describe("Unit testy OOP kalkulačky", () => {
  it("Expect OopCalculator.add(1, 1) to equal 2", () => {
    const calculator = new OopCalculator();
    const addResult = calculator.add(1, 1);
    expect(addResult).to.equal(2);
  });

  it("Expect OopCalculator.subtract(1, 1) to equal 0", () => {
    const calculator = new OopCalculator();
    const subtractResult = calculator.subtract(1, 1);
    expect(subtractResult).to.equal(0);
  });

  it("Expect OopCalculator.multiple(2, 3) to equal 6", () => {
    const calculator = new OopCalculator();
    const multiplyResult = calculator.multiply(2, 3);
    expect(multiplyResult).to.equal(6);
  });

  it("Expect OopCalculator.divide(6, 3) to equal 6", () => {
    const calculator = new OopCalculator();
    const divideResult = calculator.divide(6, 3);
    expect(divideResult).to.equal(2);
  });
});
