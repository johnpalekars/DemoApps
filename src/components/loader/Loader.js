import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div className="middle spinner-border text-success " style={{width:"160px",height:"160px"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
