const adjacentElementsProduct = require("../katas/adjacentElementsProduct");

/*
Task:
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

Tests
- Should return a number
- Should return zero if input array is empty
- Should return zero if input array has only 1 index
- Should return zero if input array has 2 elements but one of the is 0;
- Should return multiple of indexes if array has 2 elements and both elements are greater than 0
- Should return multiple of two adjacent elements if array has more than 2 indexes
*/

describe("adjacentElementsProduct", () => {
  test("should return a number", () => {
    //acr
    const result = adjacentElementsProduct([]);
    //assert
    expect(typeof result === "number").toBe(true);
  });
  test("Should return zero if input array is empty", () => {
    //arrange
    const input = [];
    const expectedOutput = 0;
    //act
    const result = adjacentElementsProduct(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("Should return zero if inpit array has only 1 index", () => {
    //arrange
    const input = [5];
    const expectedOutput = 0;
    //act
    const resilt = adjacentElementsProduct(input);
    //assert
    expect(resilt).toBe(expectedOutput);
  });
  test("Should return zero if index array has 2 elements but one of the is 0", () => {
    //arrange
    const input = [5, 0];
    const expectedOutput = 0;
    //act
    const result = adjacentElementsProduct(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("Should return multiple of indexes if array has 2 elements and both elements are greater than 0", () => {
    //arrange
    const input = [5, 5];
    const expectedOutput = 25;
    //act
    const result = adjacentElementsProduct(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
});
