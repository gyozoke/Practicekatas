const toupperorlower = require("../katas/toupperorlower");

/*
The challenge is to implement a function which takes a sentence and converts it to upper or lower camel case.
The function takes two arguments; the sentence, and a boolean, true if UpperCamelCase is to be returned and false if lowerCamelCase is to be returned.

sentenceToCamelCase("this sentence", true);
// should return "ThisSentence"
sentenceToCamelCase("this sentence", false);
// should return "thisSentence"

tests: 
- resturn uppercamelcase if booleen is true 
- return lowercamelcase if booleen is false 
*/

describe("toupperorlower", () => {
  test(" return uppercamelcase if booleen is true", () => {
    //arrange
    const inputstr = "this sentence";
    const inputbool = true;

    const expectedOutput = "ThisSentence";
    //act
    const result = toupperorlower(inputstr, inputbool);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("return lowercamelcase if booleen is false", () => {
    //arrange
    const inputstr = "this sentence";
    const inputbool = false;

    const expectedOutput = "thisSentence";
    //act
    const result = toupperorlower(inputstr, inputbool);
    //assert
    expect(result).toBe(expectedOutput);
  });
});
