function getShortMessages(input) {
  const array_of_messages = input.map((value) => value.message)
  return array_of_messages.filter((message) => message.length < 50)
}

module.exports = getShortMessages
