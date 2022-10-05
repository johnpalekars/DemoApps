import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoom, setUser, setSocket } from "../../../Store/reducers/chatRoom";
import Loader from "../../loader/Loader";
import "./Chatroom.css";
import Send from "./send/Send";
import Sidebar from "./sidebar/Sidebar";

const Chatroom = () => {
  const { user, room, socket } = useSelector((state) => state.chat);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(socket);
    return () => {
      dispatch(setSocket(""));
      dispatch(setUser(""));
      dispatch(setRoom(""));
      console.log("Left chat");
    };
  }, []);



  if (socket === "") {
    return <Loader />;
  }
  return (
    <Fragment>
      <div className="container" style={{ height: "100%" }}>
        <div className="row text-white" style={{ height: "100%" }}>
          <div className=" col-4" style={{ height: "100%" }}>
            <div className="sidebar">
              <Sidebar/>
            </div>
          </div>
          <div className="col-8 messages">
            <div className="row " style={{height:"87%"}}>
              <div className="h-100" >hi</div>
            </div>
            <div className="row" style={{height:"13%"}}>
              <div className="" >
                <Send/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chatroom;
