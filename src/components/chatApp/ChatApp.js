import React, { Fragment } from "react";
import "./ChatApp.css";
const ChatApp = () => {
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
            />
            <select className="form-control input">
              <option>-- Select Room --</option>
              <option value="javascript">JavaScript</option>
              <option value="AmongUs">AmongUs</option>
              <option value="node">Node</option>
              <option value="express">Express</option>
              <option value="react">React</option>
            </select>
            <button className="btn btn-secondary input">Join Room</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChatApp;
