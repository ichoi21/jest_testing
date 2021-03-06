const add = (num1, num2) => {
  if (typeof num1 != "number")
    throw new Error("First Argument must be a number");
  if (typeof num2 != "number")
    throw new Error("Second Argument must be a number");
  return num1 + num2;
};

const minus = (num1, num2) => {
  if (typeof num1 != "number")
    throw new Error("First Argument must be a number");
  if (typeof num2 != "number")
    throw new Error("Second Argument must be a number");
  return num1 - num2;
};

const multiply = (num1, num2) => {
  if (typeof num1 != "number")
    throw new Error("First Argument must be a number");
  if (typeof num2 != "number")
    throw new Error("Second Argument must be a number");
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (typeof num1 != "number")
    throw new Error("First Argument must be a number");
  if (typeof num2 != "number")
    throw new Error("Second Argument must be a number");
  return num1 / num2;
};

const power = (num1, num2) => {
  if (typeof num1 != "number")
    throw new Error("First Argument must be a number");
  if (typeof num2 != "number")
    throw new Error("Second Argument must be a number");
  return Math.pow(num1, num2);
};

module.exports = { add, minus, multiply, divide, power };
