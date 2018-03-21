import React from 'react'
import users from "./mocks/users.js"
import messages from "./mocks/messages.js"
import filterMessageByUsername from "./utils/filterMessageByUsername"

const Thread = (props) => (

<div className="threads">
  <div className="thread-bar">
    <h2>
      <a onClick={this.showSettings}>
        <i className="icon fas fa-cog" />
      </a>
      Messenger
      <i className="icon fas fa-edit" />
    </h2>
  </div>
  <ul className="thread-list">
    {props.users.map((user, i) => (
      <li key={i} onClick={() => props.selectUser(user)}>
        <img
          src={`images/${user.username}_lg.jpg`}
          alt={`${user.username}`}
          className="avatar large"
        />
        <div className="user-name">
          <span>{`${user.name.first} ${user.name.last}`}</span>
          <small>message preview</small>
        </div>
      </li>
    ))}
  </ul>
</div>
)

export default Thread
