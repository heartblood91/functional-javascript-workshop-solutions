function reduce(arr, fn, initial) {
  if (0 < arr.length) {
    const new_arr = [...arr]
    const last_value = new_arr.pop()
    initial = fn(initial, last_value)

    return reduce(new_arr, fn, initial)  
  } else {
    return initial
  }
}

module.exports = reduce
