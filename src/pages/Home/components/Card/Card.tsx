import React from "react";
import "./Card.scss";
const Card = (props: any) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.card.link_clow} alt={props.card.name} />
        </div>
        <div className="card-back">
          <img src={props.card.link_sakura} alt={props.card.name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
