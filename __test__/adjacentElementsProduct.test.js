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
- should return null if input array contains less than 2 elements
- Should return multiple of two adjacent elements if array has more than 2 indexes
- Should not mutate input array
*/

describe("adjacentElementsProduct", () => {
  test("should return a number", () => {
    //acr
    const result = adjacentElementsProduct([]);
    //assert
    expect(typeof result === "number").toBe(true);
  });
  test("should return null if input array contains less than 2 elements", () => {
    //arrange
    const input = [2];
    const expectedOutput = 0;
    //act
    const result = adjacentElementsProduct(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("Should return multiple of two adjacent elements if array has more than 2 indexes", () => {
    //arrange
    const input = [1, 7, 5, 5];
    const expectedOutput = 35;
    //act
    const result = adjacentElementsProduct(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
});
