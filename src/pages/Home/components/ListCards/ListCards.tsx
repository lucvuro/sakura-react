import { Spin } from "antd";
import React from "react";
import useListCards from "./hook/useListCards";
import "./ListCards.scss";

const ListCards = () => {
  const { cardModel, loading } = useListCards();
  return (
    <Spin spinning={loading}>
      <div className="list-cards">
        {cardModel.listCard.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="list-cards__card">
                <img src={item.data.link_clow} alt={item.data.link_clow} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Spin>
  );
};

export default ListCards;
