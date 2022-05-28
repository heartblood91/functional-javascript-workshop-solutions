const loadUsers = async(userIds, load, done) => {
  var users = []

  for (var i = 0; i < userIds.length; i++) {
    await users.push(load(userIds[i]))
  }

  return done(users)
}

module.exports = () => loadUsers
