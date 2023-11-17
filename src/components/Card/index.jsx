import React from "react";
import "./card.css";

const Card = ({ img, title, text }) => {
  return (
    <div className="main-div">
      <div className="card">
        <img src={img} alt="" />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="#" className="button">
            Saiba mais
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
