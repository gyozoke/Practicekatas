function findindex(str) {
  if (str.length === 0) return 0;

  if (str.includes("movies")) {
    return str.split(" ").indexOf("movies") + 1;
  } else if (!str.includes("movies")) {
    return str.indexOf("movies");
  }
}

module.exports = findindex;
