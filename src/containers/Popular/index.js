import React from "react";
import { Link } from "react-router-dom";

import { Label } from "../../components";
import { PopularCard } from "./PopularCard";
import { PopularInfo } from "./PopularInfo";

import "./Popular.css";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular__top-wrap">
        <div className="popular__top--left">
          <Label type="semi">Popular</Label>
        </div>
        <div className="popular__top--right">
          <Link to="#">
            <Label type="light">More</Label>
          </Link>
        </div>
      </div>
      <div className="popular__content-wrap">
        <div className="popular__content--top">
          <PopularCard
            src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
            alt="City"
          />
        </div>
        <div className="popular__content--bottom">
          <PopularInfo />
        </div>
      </div>
    </div>
  );
};
