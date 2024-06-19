function toupperorlower(str, bool) {
  const strArr = str.split(" ");

  let newStrTrue = "";
  let newStrFalse = str.split(" ")[0].toLowerCase();
  if (bool === true) {
    for (let i = 0; i < strArr.length; i++) {
      newStrTrue = newStrTrue + strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return newStrTrue;
  } else if (bool === false) {
    for (let i = 0; i < strArr.length; i++) {
      strArr.shift(0);
      newStrFalse =
        newStrFalse + strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return newStrFalse;
  }
}

module.exports = toupperorlower;
