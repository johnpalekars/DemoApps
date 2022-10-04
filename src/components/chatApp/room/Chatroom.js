import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoom, setUser, setSocket } from "../../../Store/reducers/chatRoom";
import Loader from "../../loader/Loader";

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

  const leaveRoom = () => {
    dispatch(setSocket(""));
    dispatch(setUser(""));
    dispatch(setRoom(""));
    navigate("/chatApp");
  };

  if (socket === "") {
    return <Loader />;
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row text-white text-left">
          <button
            className="btn btn-sm btn-outline-primary"
            style={{ width: "70px" }}
            onClick={() => leaveRoom()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <hr />
        <div className="row text-white">
          <div className="col-3">hi</div>
          <div className="col-9">
            <div className="row">hi2</div>
            <div className="row">hi3</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chatroom;
