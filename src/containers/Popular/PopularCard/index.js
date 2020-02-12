import React from "react";

import { Label, Image } from "../../../components";

import "./PopularCard.css";

export const PopularCard = ({ src, alt }) => {
  return (
    <div className="popular-card">
      <div className="popular-card__image-wrap">
        <Image src={src} alt={alt} className="popular-card__image" />
      </div>
      <div className="popular-card__content-wrap">
        <div className="popular-card__content--name">
          <Label>Tian'anmen square</Label>
        </div>
        <div className="popular-card__content--descr">
          <Label>Museum</Label>
          <Label>History</Label>
          <Label>Square</Label>
        </div>
        <div className="popular-card__content--info">
          <Label type="light">$5</Label>
          <Label type="light">6.2km</Label>
        </div>
      </div>
    </div>
  );
};
