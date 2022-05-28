function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    return operation()
  } 
}

// Do not remove the line below
module.exports = repeat

