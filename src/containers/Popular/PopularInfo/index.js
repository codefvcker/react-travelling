import React from "react";
import { Link } from "react-router-dom";

import { Label, Icon } from "../../../components";

import "./PopularInfo.css";

export const PopularInfo = () => {
  return (
    <div className="popular-info">
      <div className="popular-info__content--details">
        <Link to="#" className="popular-info__content-inner">
          <Label>Details</Label>
          <Icon name="angle-right" />
        </Link>
      </div>
      <div className="popular-info__content--navigation">
        <span className="popular-info__content--border"></span>
        <Link to="#" className="popular-info__content-inner">
          <Label>Navigation</Label>
          <Icon name="angle-right" />
        </Link>
      </div>
    </div>
  );
};
