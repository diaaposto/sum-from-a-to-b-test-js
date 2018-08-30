function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  //if 3 >= 7, return 3
  if (fromN >= toN) {
    return fromN;
  }
  
  return fromN + sum((fromN + 1), toN)

}

module.exports = sum;
