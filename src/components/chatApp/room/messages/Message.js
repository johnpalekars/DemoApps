import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Message.css";
import { useState } from "react";
import Loader from "../../../loader/Loader";

const Message = ({ socket, user }) => {
  const [messages, setMessages] = useState([]);
  const mesRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessages((state) => [
        ...state,
        {
          message: data.message,
          user: data.user,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    socket.on("left_room", (data) => {
      console.log(data);
      setMessages((state) => [
        ...state,
        {
          message: "" + data.user + " has left the chat",
          user: "chat_bot",
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    socket.on("last_100_messages", (last100Messages) => {
      last100Messages = sortMessagesByDate(last100Messages);
      setMessages((state) => [...last100Messages, ...state]);
    });

    scrollToBottom();

    return () => {
      socket.off("receive_message");
      socket.off("left_room");
      socket.off("last_100_messages");
    };
  }, [socket, messages]);

  const scrollToBottom = () => {
    if (mesRef.current) {
      mesRef.current.scrollTop = mesRef.current.scrollHeight;
    }
  };

  function sortMessagesByDate(messages) {
    return messages.sort(
      (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
    );
  }

  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  if (messages.length === 0) {
    return (
      <Fragment>
        <Loader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="outer-box" ref={mesRef}>
        {messages.map((msg, i) => (
          <div
            className={msg.user !== user ? "inner-box-left" : "inner-box-right"}
            key={i}
          >
            <span className="text-primary text-start fs-6 fw-bold">
              {msg.user}
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="">{msg.message}</span>
              <span className="date-time" style={{ alignSelf: "end" }}>
                {formatDateFromTimestamp(msg.__createdtime__)}
              </span>
            </div>
            <br />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Message;
