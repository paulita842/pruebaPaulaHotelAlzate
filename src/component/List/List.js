/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";

const List = ({ listItems }) => {
  return (
    <div className="list">
      {listItems.map(({ img }) => (
        <div className="item">
          <div className="img">
            <img src={img} alt="image description" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;