const Spy = (target, method) => {
  const oldMethod = target[method]

  const res = {
    count: 0
  }

  target[method] = (...args) => {
    res.count += 1
    
    return oldMethod(...args)
  }

  return res
}

module.exports = Spy

