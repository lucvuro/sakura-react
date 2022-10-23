import React from "react";
import "./CardDetail.scss";
const CardDetail = (props: any) => {
  return (
    <>
      {props.card && (
        <div className="card-detail">
          <div className="image-detail">
            <div className="image-front">
              <img src={props.card.link_clow} alt={props.card.nameCard} />
            </div>
            <div className="image-back">
              <img src={props.card.link_sakura} alt={props.card.nameCard} />
            </div>
          </div>
          <div className="information">
            <h2>{props.card.nameCard}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;
