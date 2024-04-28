function till(obj) {
  if (Object.keys(obj).length === 0) return "";
  let noteSum = 0;
  let coinSum = 0;
  for (const key in obj) {
    if (key.startsWith("£")) {
      noteSum += Number(key.substr(1));
    } else if (key.endsWith("p")) {
      coinSum += Number(key.slice(0, -1) / 100);
    }
  }
  return `£${noteSum + coinSum}`;
}

module.exports = till;
