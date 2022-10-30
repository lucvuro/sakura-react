import { Skeleton, Spin } from "antd";
import React from "react";
import { useParams } from "react-router";
import CardDetail from "./components/CardDetail";
import useDetail from "./hook/useDetail";
import "./Detail.scss";
const Detail = () => {
  const params = useParams();
  const { cardDetail, loading } = useDetail({ params });
  return (
    <>
      <Spin spinning={loading}>
        <div className="detail">
          <CardDetail card={cardDetail} />
        </div>
      </Spin>
    </>
  );
};

export default Detail;
