import React from "react";
import useListCards from "./hook/useListCards";
import './ListCards.scss'

const ListCards = () => {
  const { listCards } = useListCards();
  console.log(listCards)
  return (
    <div className="list-cards">
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
      <div className="list-cards__card">
        <img src="https://static.wikia.nocookie.net/ccs/images/8/80/ClowArrow.jpg" />
      </div>
    </div>
  );
};

export default ListCards;
