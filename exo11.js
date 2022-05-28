module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, val) => {
    const res = fn(val)
    acc.push(res)

    return acc
  }, [])
}

