import React from 'react'
import Thread from "./Thread"
import Conversation from "./Conversation"

const Messenger = (props) =>  (

<div className="messenger">
  <Thread users={props.users} selectedUser={props.selectedUser} selectUser={props.selectUser} showSettings={props.showSettings} />
  <Conversation selectedUser={props.selectedUser} />
</div>

)

export default Messenger
