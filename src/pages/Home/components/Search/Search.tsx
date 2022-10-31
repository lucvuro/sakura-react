import { Input } from "antd";
import React from "react";
import useSearch from "./hooks/useSearch";
import './Search.scss'
const Search = () => {
  const {search, onInputChange} = useSearch()

  return (
    <div className="search-input">
      <Input.Search value={search} onChange={(e) => onInputChange(e.target.value)} size="large" placeholder="Search by name card"/>
    </div>
  );
};

export default Search;
