import React from "react";
import "./ChatApp.css";
const ChatApp = () => {
  return (
    <div
      className="container flex"
      style={{ margin: "150px 100px 2px 100px", padding: "20px", color:"white"}}
    >
      <div className="form-container">
        <div className="form-group text-center " >
          <h1>{`<>DevRooms</>`}</h1>
          <input className="form-control input" type="text" placeholder="Username..." />
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
  );
};

export default ChatApp;
