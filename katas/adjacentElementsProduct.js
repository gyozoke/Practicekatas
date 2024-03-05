function adjacentElementsProduct(arr) {
  if (arr.length < 2) return 0;
  let maxProduct = arr[0] * arr[1];
  let maxPair = [arr[0], arr[1]];

  for (let i = 0; i < arr.length; i++) {
    const currentProduct = arr[i] * arr[i + 1];

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
      maxPair = [arr[i], arr[i + 1]];
    }
  }

  return maxPair[0] * maxPair[1];
}

module.exports = adjacentElementsProduct;
