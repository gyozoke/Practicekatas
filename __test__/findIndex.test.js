const findindex = require("../katas/findIndex");

/*
Have to find the word "movies" in a string and return its actual position
example:
The word we are looking for is movies
"I love to watch movies in my free time" should return 5

tests

- return 0 if string is empty
- return -1 if word does not exist in the string
- return the correct position of the word if it exists in the string
*/

describe("findindex", () => {
  test("return 0 if sting is empty", () => {
    //arrange
    const input = "";
    const expectedOutput = 0;
    //act
    const result = findindex(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("return 0 if word does not exist in the string", () => {
    //arrange
    const input = "I love to watch cats in my free time";
    const expectedOutput = -1;
    //act
    const result = findindex(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("return the correct position of the word if it exists in the string", () => {
    //arrange
    const input = "I love to watch movies in my free time";
    const expectedOutput = 5;
    //act
    const result = findindex(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
});
