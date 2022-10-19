import { Input } from "antd";
import React from "react";
import './Search.scss'
const Search = () => {
  return (
    <div className="search-input">
      <Input.Search size="large"/>
    </div>
  );
};

export default Search;
