import React from "react";

import { Image, Avatar, Label } from "../";

import "./CityCard.css";

export const CityCard = ({ src, alt, name, country, users }) => {
  return (
    <div className="card">
      <div className="card__image-wrap">
        <Image src={src} alt={alt} className="city" />
      </div>
      <div className="card__content-wrap">
        <div className="card__content">
          <Label type="light">{new Date().toLocaleDateString()}</Label>
          <Label type="semi">
            {name}, {country}
          </Label>
        </div>
        <div className="card__users">
          {users.map(item => {
            const { photo, altname, id } = item;
            if (item.currentCity === name)
              return <Avatar key={id} src={photo} alt={altname} />;
          })}
        </div>
      </div>
    </div>
  );
};
