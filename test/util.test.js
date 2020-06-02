const { add, minus, multiply, divide, power } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if the first argument is not a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });

    it("Should throw an error if the second argument is not a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });

    it("Should throw an error if no arguments were received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(minus(2, 4)).toBe(-2);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if the first argument is not a number", () => {
      expect(() => minus("2", 4)).toThrowError();
    });

    it("Should throw an error if the second argument is not a number", () => {
      expect(() => minus(2, "")).toThrowError();
    });

    it("Should throw an error if no arguments were received", () => {
      expect(() => minus()).toThrowError();
    });
  });
});

describe("Mulitply", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(multiply(2, 2)).toBe(4);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if the first argument is not a number", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });

    it("Should throw an error if the second argument is not a number", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });

    it("Should throw an error if no arguments were received", () => {
      expect(() => multiply()).toThrowError();
    });
  });
});

describe("Divide", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(divide(2, 4)).toBe(0.6);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if the first argument is not a number", () => {
      expect(() => divide("4", 2)).toThrowError();
    });

    it("Should throw an error if the second argument is not a number", () => {
      expect(() => divide(4, "2")).toThrowError();
    });

    it("Should throw an error if no arguments were received", () => {
      expect(() => divide()).toThrowError();
    });
  });
});

describe("Power", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(power(4, 4)).toBe(256);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if the first argument is not a number", () => {
      expect(() => power("4", 2)).toThrowError();
    });

    it("Should throw an error if the second argument is not a number", () => {
      expect(() => power(4, "2")).toThrowError();
    });

    it("Should throw an error if no arguments were received", () => {
      expect(() => power()).toThrowError();
    });
  });
});
