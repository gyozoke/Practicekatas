function multipleof3or5(num) {
  const multiplesOfThree = [];
  const multiplesOfFive = [];

  for (let i = 3; i < num; i = i + 3) {
    multiplesOfThree.push(i);
  }

  for (let i = 5; i < num; i = i + 5) {
    multiplesOfFive.push(i);
  }

  const sumOfMultipleOfThree = multiplesOfThree.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumOfMultipleOfFive = multiplesOfFive.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const result = sumOfMultipleOfThree + sumOfMultipleOfFive;

  return result;
}

module.exports = multipleof3or5;
