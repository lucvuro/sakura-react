import React from "react";
import ListCards from "./components/ListCards";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__search">
        <div className="home-page__search-input">
          <Search />
        </div>
        <div className="home-page__filter-button">
          <Filter />
        </div>
      </div>
      <div className="home-page__listcards">
        <ListCards />
      </div>
    </div>
  );
};

export default Home;
