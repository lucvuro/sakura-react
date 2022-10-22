import { Popover } from "antd";
import React from "react";
import PopoverCard from "../PopoverCard";
import "./Card.scss";
const Card = (props: any) => {
  return (
      <Popover
      color="rgba(255,255,255,0.7)"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        placement="right"
        content={<PopoverCard card={props.card} />}
      >
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
      </Popover>
  );
};

export default Card;
