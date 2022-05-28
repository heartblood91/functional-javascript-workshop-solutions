const repeat = async (operation, num) => {
  // modify this so it can be interrupted
  if (num <= 0) return
  operation()
  return await repeat(operation, --num)
}

module.exports = (...args) => repeat(...args)
