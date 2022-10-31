// import { Popover } from "antd";
import React from "react";
// import PopoverCard from "../PopoverCard";
import "./Card.scss";
import useCard from "./hook/useCard";
const Card = (props: any) => {
    const {onClickCard} = useCard()
  return (
      // <Popover
      // color="rgba(255,255,255,0.7)"
      //   mouseEnterDelay={0}
      //   mouseLeaveDelay={0}
      //   placement="right"
      //   content={<PopoverCard card={props.card.data} />}
      // >
        <div className="card" onClick={() => onClickCard(props.card.id)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={props.card.data.link_clow} alt={props.card.data.name} />
            </div>
            <div className="card-back">
              <img src={props.card.data.link_sakura} alt={props.card.data.name}/>
            </div>
          </div>
        </div>
      // </Popover>
  );
};

export default Card;
