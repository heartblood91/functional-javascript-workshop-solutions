const logger = (namespace) => (...args) => {
  return console.log(namespace, ...args)
}

module.exports = logger
