function changecalculator(num) {
  //   if (num === 0) return {};
  //   if (num === 1) return { 1: 1 };
  const coins = [50, 20, 10, 5, 2, 1];
  let result = {};
  console.log(result);

  for (const coin of coins) {
    const count = Math.floor(num / coin);
    if (count > 0) {
      result[coin.toString()] = count;
      num = num - count * coin;
    }
  }
  return result;
}

module.exports = changecalculator;
