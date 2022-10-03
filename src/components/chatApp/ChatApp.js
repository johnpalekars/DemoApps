import React, { Fragment, useEffect } from "react";
import "./ChatApp.css";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setRoom, setSocket } from "../../Store/reducers/chatRoom";
import { useNavigate } from "react-router-dom";

const ChatApp = () => {
  const { user, room, socket } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const socketIO = io.connect(
      "https://demoappsbackend--4000.local.webcontainer.io"
    );

    dispatch(setSocket(socketIO));
  }, [dispatch]);

  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", { user, room });
      navigate("chatroom");
    } else {
      alert("Please enter required field!");
    }
  };

  return (
    <Fragment>
      <div className="form-container">
        <div className="container flex" style={{ color: "white" }}>
          <div className="form-group text-center ">
            <h1>{`<>DevRooms</>`}</h1>
            <input
              className="form-control input"
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                dispatch(setUser(e.target.value));
              }}
            />
            <select
              className="form-control input"
              onChange={(e) => {
                dispatch(setRoom(e.target.value));
              }}
            >
              <option>-- Select Room --</option>
              <option value="javascript">JavaScript</option>
              <option value="AmongUs">AmongUs</option>
              <option value="node">Node</option>
              <option value="express">Express</option>
              <option value="react">React</option>
            </select>
            <button
              className="btn btn-secondary input"
              onClick={() => joinRoom()}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChatApp;
