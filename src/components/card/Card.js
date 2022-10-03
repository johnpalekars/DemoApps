import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <Fragment>
      <Link to={"/user/"+props.user.id}>
      <div className="customCard">
        {props.children}, {props.user.name}
      </div></Link>
    </Fragment>
  );
};

export default Card;
