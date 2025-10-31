// hooks_tests.spec.js
// tests/
import { expect } from "chai";
import { OopCalculator } from "../src/calculator/oop_calculator.js";

describe("Test hooků", () => {
  let calc;

  beforeEach(() => {
    console.log("Před každým testem");
    calc = new OopCalculator();
  });

  it("1 + 1 rovná se 2", () => {
    expect(calc.add(1, 1)).to.equal(2);
  });

  it("1 - 1 rovná se 0", () => {
    expect(calc.subtract(1, 1)).to.equal(0);
  });

  it("5 * 8 rovná se 40", () => {
    expect(calc.multiply(5, 8)).to.equal(40);
  });

  it("10 / 2 rovná se 5", () => {
    expect(calc.divide(10, 2)).to.equal(5);
  });
});
