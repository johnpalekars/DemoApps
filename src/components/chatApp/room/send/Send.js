import React, { Fragment,useState } from "react";
import "./Send.css";

const Send = ({socket,user,room}) => {
  const [message, setMessage] = useState('');


  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      socket.emit('send_message', { user, room, message, __createdtime__ });
      setMessage('');
    }
  };

  const handleKeyDown=(event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      sendMessage();
    }
  }

  return (
    <Fragment>
      <div className="container msg">
        <input
          className="form-control-sm w-100 h-75 d-inline-block"
          type="text"
          placeholder="Type a massage"
          onKeyDown={handleKeyDown}
          onChange={(e)=>{setMessage(e.target.value)}}
          value={message}
        />
      </div>
    </Fragment>
  );
};

export default Send;
