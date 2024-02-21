const multipleof3or5 = require("../katas/multiplesof3or5");

/*
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
    //act
    //assert
  });
});
