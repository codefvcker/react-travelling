import React from "react";
import { Link } from "react-router-dom";

import { PlaceCard } from "../../components/PlaceCard";
import { Label } from "../../components/Label";

import "./HotCities.css";

export const HotCities = () => {
  return (
    <div className="hot-cities">
      <div className="hot-cities__top-wrap">
        <div className="hot-cities__top-wrap--left">
          <Label type="semi">City</Label>
          <span className="hot-wrap">
            <Label type="light">Hot</Label>
          </span>
        </div>
        <div className="hot-cities__top-wrap--right">
          <Link to="#">
            <Label type="light">More</Label>
          </Link>
        </div>
      </div>
      <div className="hot-cities__bottom-wrap">
        <PlaceCard
          src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
          alt="Berlin"
          className="hot-cities__place-card"
        />
        <PlaceCard
          src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
          alt="Berlin"
          className="hot-cities__place-card"
        />
        <PlaceCard
          src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
          alt="Berlin"
          className="hot-cities__place-card"
        />
      </div>
    </div>
  );
};
