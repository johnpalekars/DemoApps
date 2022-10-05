import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoom, setUser, setSocket } from "../../../../Store/reducers/chatRoom";

const Sidebar = () => {
  const { user, room, socket } = useSelector((state) => state.chat);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const leaveRoom = () => {
    dispatch(setSocket(""));
    dispatch(setUser(""));
    dispatch(setRoom(""));
    navigate("/chatApp");
  };
  return (
    <Fragment>
      <div className="container text-white flex">
        <button
          className="btn btn-sm btn-outline-primary w-75"
          onClick={() => leaveRoom()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Exit
        </button>
      </div>
      <div className="container">
        <div className="text-start h3">
            Members
        </div>
        <ul className="list-group">
            <li className="list-group-item">abhi</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
