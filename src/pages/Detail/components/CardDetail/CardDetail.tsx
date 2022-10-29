import { Descriptions, Divider, Typography } from "antd";
import React from "react";
import "./CardDetail.scss";
import { levelTypo } from "./constant";
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
            <div className="information__name">
              <Typography.Title>
                {props.card.nameCard.toUpperCase()}
              </Typography.Title>
            </div>
            <Divider />
            <Descriptions title="" bordered layout="vertical">
              <Descriptions.Item label="Sign" labelStyle={{fontWeight: "bold"}}>
                {props.card.sign}
              </Descriptions.Item>
              <Descriptions.Item label="Magic Type" labelStyle={{fontWeight: "bold"}}>
                {props.card.magicType}
              </Descriptions.Item>
              <Descriptions.Item label="Captured Anime" labelStyle={{fontWeight: "bold"}}>
                {props.card.capturedAnime}
              </Descriptions.Item>
              <Descriptions.Item label="Captured Manga" labelStyle={{fontWeight: "bold"}}>
                {props.card.capturedManga}
              </Descriptions.Item>
              <Descriptions.Item label="Transformed Anime" labelStyle={{fontWeight: "bold"}}>
                {props.card.transformedAnime}
              </Descriptions.Item>
              <Descriptions.Item label="Transformed Manga" labelStyle={{fontWeight: "bold"}}>
                {props.card.transformedManga}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;
