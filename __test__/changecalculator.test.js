const changecalculator = require("../katas/changecalculator");

/*
The challenge is to implement a function that calculates the coins you would use to give a customer their change in a shop. The function takes one argument, which is the amount of change needed, in pence. The function should always return an object.

changeCalculator(1);
// should return {'1':1}
changeCalculator(2);
// should return {'2':1}
changeCalculator(7);
// should return {'5':1,'2':1}
changeCalculator(13);
// should return {'10':1,'2':1,'1':1}

tetst

- should return an empty object if change is 0
- should return an object with {'1' : 1} if needed change is 1
- should return the correct amount of change if needed change is 7 or 13
*/

describe("changecalculator", () => {
  test("should return an empty object if change is 0", () => {
    //arrange
    const input = 0;
    const expectedOutput = {};
    //act
    const result = changecalculator(input);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("should return an object with {'1' : 1} if needed change is 1", () => {
    //arrange
    const input = 1;
    const expectedOutput = { 1: 1 };
    //act
    const result = changecalculator(input);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("should return the correct amount of change if needed change is 7 or 13", () => {
    //arrange
    const input = 7;
    const expectedOutput = { 5: 1, 2: 1 };
    //act
    const result = changecalculator(input);
    //assert
    expect(result).toEqual(expectedOutput);
  });
});
