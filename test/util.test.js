const { add } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguements", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
});