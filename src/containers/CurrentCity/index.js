import React from "react";

import { Label, Chip } from "../../components";

import "./CurrentCity.css";

export const CurrentCity = () => {
  return (
    <div className="current-city">
      <div className="current-city__top-wrap">
        <div className="current-city__name">
          <Label type="semi">I am in Beijing</Label>
        </div>
        <div className="current-city__weather">
          <Label type="light">Weather</Label>
        </div>
      </div>
      <div className="current-city__content-wrap">
        <div className="current-city__content">
          <Chip className="mychip" iconName="search" withIcon withClose>
            Tiananmen
          </Chip>
          <Chip className="mychip" withIcon withClose>
            Gugong
          </Chip>
        </div>
      </div>
    </div>
  );
};
