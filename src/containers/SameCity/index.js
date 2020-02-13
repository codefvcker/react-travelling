import React from "react";

import { Avatar, Icon, Label } from "../../components";

import "./SameCity.css";

export const SameCity = () => {
  return (
    <div className="same-city">
      <div className="same-city__top-wrap">
        <div className="same-sity__top--left">
          <Label type="semi">Same city</Label>
        </div>
      </div>
      <div className="same-city__content-wrap">
        <div className="same-city__content--left">
          <Label type="semi">28604</Label>
        </div>
        <div className="same-city__content--right">
          <span className="same-city__avatars-wrap">
            <Avatar
              src="https://i.pinimg.com/originals/c3/b2/5b/c3b25bd16502879004f97217a07fc574.jpg"
              alt="user"
            />
            <Avatar
              src="https://i.pinimg.com/originals/c3/b2/5b/c3b25bd16502879004f97217a07fc574.jpg"
              alt="user"
            />
            <Avatar
              src="https://i.pinimg.com/originals/c3/b2/5b/c3b25bd16502879004f97217a07fc574.jpg"
              alt="user"
            />
          </span>
          <span className="same-city__icon-wrap">
            <Icon name="angle-right" />
          </span>
        </div>
      </div>
    </div>
  );
};
