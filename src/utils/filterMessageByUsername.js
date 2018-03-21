

const filterMessageByUsername = ({ username } = {}) => message => (
  message.from === username ||
  message.to === username
)

export default filterMessageByUsername
