function duckCount(...args) {
  return args.reduce((acc, val) => {
    if (Object.prototype.hasOwnProperty.call(val, 'quack')) {
      return acc += 1
    } else {
      return acc
    }

  }, 0)
}

module.exports = duckCount
