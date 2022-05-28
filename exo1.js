function upperCaser(input) {
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else {
    return input
  }
}

module.exports = upperCaser
