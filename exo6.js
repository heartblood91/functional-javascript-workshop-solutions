function countWords(inputWords) {
  return inputWords.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1
    } else {
      acc[val] = 1
    }
    
    return acc
  }, {})
}

module.exports = countWords
