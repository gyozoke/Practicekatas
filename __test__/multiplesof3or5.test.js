const multipleof3or5 = require("../katas/multiplesof3or5");

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3 5 6  and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

- Should return a number
- Should return 23 that is  multiples  of 3 and 5 below 10 
*/

describe("multipleof3or5", () => {
  test("Should return a number", () => {
    //arrange
    const input = "number";
    //act
    const result = multipleof3or5(input);
    //assert
    expect(typeof result === "number").toBe(true);
  });
  test("Should return 23 that is  multiples  of 3 and 5 below 10 ", () => {
    //arrange
    const input = 10;
    const expectedOutput = 23;
    //act
    const result = multipleof3or5(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("Should return 266333 that is multiple of 3 and 5 below 1000", () => {
    //arrange
    const input = 1000;
    const expectedOutput = 266333;
    //act
    const result = multipleof3or5(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
});
