import React from "react";
import "./style.css";

const List = ({ listItems }) => {
  return (
    <div className="list">
      {listItems.map(({ img, hotel }) => (
        <div className="item">
          <div className="img">
            1 habitación en: {hotel}
            <img src={img} alt="description" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;