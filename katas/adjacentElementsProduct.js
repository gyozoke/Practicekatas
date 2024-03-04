function adjacentElementsProduct(arr) {
  if (arr.length === 0 || arr.length === 1) return 0;
  //   if ((arr.length === 2 && arr[0] === 0) || arr[1] === 0) {
  //     return 0;
  //   }
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 2 && arr[i] > 0) {
      return arr[i] * arr[i];
    } else if (arr[i] === 0) {
      return 0;
    }
  }
}

module.exports = adjacentElementsProduct;
