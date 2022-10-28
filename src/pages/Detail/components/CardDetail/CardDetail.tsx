import { Divider, Typography } from "antd";
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
            <div className="information__content">
              <div className="information__item">
                <div className="information__label">Sign:</div>
                <div className="information__data">{props.card.sign}</div>
              </div>
              <div className="information__item">
                <div className="information__label">Magic Type:</div>
                <div className="information__data">{props.card.magicType}</div>
              </div>
              <div className="information__item">
                <div className="information__label">Captured Anime:</div>
                <div className="information__data">
                  {props.card.capturedAnime}
                </div>
              </div>
              <div className="information__item">
                <div className="information__label">Captured Manga:</div>
                <div className="information__data">
                  {props.card.capturedManga}
                </div>
              </div>
              <div className="information__item">
                <div className="information__label">Transformed Anime:</div>
                <div className="information__data">
                  {props.card.transformedAnime}
                </div>
              </div>
              <div className="information__item">
                <div className="information__label">Transformed Manga:</div>
                <div className="information__data">
                  {props.card.transformedManga}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;
