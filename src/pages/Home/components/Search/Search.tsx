import { Input } from "antd";
import React from "react";
import './Search.scss'
const Search = () => {
  return (
    <div className="search-input">
      <Input.Search size="large" placeholder="Search by name card"/>
    </div>
  );
};

export default Search;
