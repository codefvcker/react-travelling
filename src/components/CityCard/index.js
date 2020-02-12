import React from "react";

import { Image, Avatar, Label } from "../";

import "./CityCard.css";

export const CityCard = () => {
  return (
    <div className="card">
      <div className="card__image-wrap">
        <Image
          src="https://lp-cms-production.imgix.net/2019-06/GettyImages-538096543_medium.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
          alt="City"
          className="city"
        />
      </div>
      <div className="card__content-wrap">
        <div className="card__content">
          <Label type="light">{new Date().toLocaleDateString()}</Label>
          <Label type="semi">New York, United States</Label>
        </div>
        <div className="card__users">
          <Avatar
            src="https://bigpicture.ru/wp-content/uploads/2019/10/valcat_70259146_175928106871851_2808159803858577905_n.jpg"
            alt="user"
          />
          <Avatar
            src="https://bigpicture.ru/wp-content/uploads/2019/10/valcat_70259146_175928106871851_2808159803858577905_n.jpg"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};
