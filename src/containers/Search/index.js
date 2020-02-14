import React from "react";

import { Label } from "../../components";

import { SearchBox } from "./SearchBox";

import "./Search.css";

export const Search = () => {
  return (
    <div className="search">
      <div className="search__top-wrap">
        <Label className="feed__label--top" type="bold">
          Hi Mike,
        </Label>
        <Label className="feed__label--top" type="bold">
          Where do you want to go?
        </Label>
      </div>
      <div className="search__search-box">
        <SearchBox />
      </div>
    </div>
  );
};
