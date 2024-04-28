const till = require("../katas/till");

/*
Cash up the cafe till at the end of the day
The challenge is to implement a function which cashes up a till at the end of the day. The function should always return a string.

Examples
The till can contain the following denominations:

1p piece

2p piece

5p piece

10p piece

20p piece

50p piece

£1 coin

£2 coin

£5 note

£10 note

£20 note

£50 note
*/

/*
- should return and empty string if given and empty object
- should return a string showing the correct amount if object contains at least one piece or note or coin
- should return a string showing the correct amount if object contains more pieces or notes or coins
*/

describe("till", () => {
  test("should return and empty string if given and empty object", () => {
    //arrange
    const input = {};
    const expectedOutput = "";
    //act
    const result = till(input);
    //assert
    expect(result).toBe(expectedOutput);
  });
  test("should return a string showing the correct amount if object contains at least one piece or note or coin", () => {
    const input = { "1p": 1 };
    const expectedOutput = "£0.01";

    const result = till(input);

    expect(result).toBe(expectedOutput);
  });
  test("should return a string showing the correct amount if object contains more pieces of coins", () => {
    const input = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 };
    const expectedOutput = "£0.38";

    const result = till(input);

    expect(result).toBe(expectedOutput);
  });
  test("should return a string showing the correct amount if object contains more pieces of notes and coins", () => {
    const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 };
    const expectedOutput = "£1.85";

    const result = till(input);

    expect(result).toBe(expectedOutput);
  });
});
