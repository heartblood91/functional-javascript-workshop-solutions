function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  return () => {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

const trampoline = (fn) => {
  while (fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = (operation, num) => {
  // You probably want to call your trampoline here!
  trampoline(() => repeat(operation, num))
}
