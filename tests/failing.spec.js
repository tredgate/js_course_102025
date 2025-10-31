// failing.spec.js
// tests/
import { expect } from "chai";

describe("Padající testy", () => {
  it("1 = 2", () => {
    expect(1).to.equal(2);
  });

  it("Vlastní expect zpráva (název testu)", () => {
    expect(1, "Vlastní expect zpráva").to.equal(2);
  });
});
