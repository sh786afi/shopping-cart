import React from "react";
import "./Title.css";
const title = props => {
  return (
    <div className="row">
      <div className="col">
        <h1>
          {props.name}
          <br />
          <strong>{props.title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default title;
