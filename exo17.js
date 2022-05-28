const curryN = (fn, n) => {
  const fn_size = n ?? fn.length

  return recurse = (...args) => {
    if (fn_size <= args.length) {
      return fn(...args)
    } else {
      return (arg) => {
        return recurse(...args, arg)
      }
    }
  }
}

module.exports = curryN
