import React, { Fragment } from "react";
import { useNavigate, useParams} from "react-router-dom";


const User = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  alert("you clicked on number"+id);
  return (
    <Fragment>
      <button onClick={()=>navigate("/list")}>Back</button>
      <div style={{ color: "white" }}>{id}</div>
    </Fragment>
  );
};

export default User;
