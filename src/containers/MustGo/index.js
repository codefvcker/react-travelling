import React from "react";
import { Link } from "react-router-dom";

import { Image, Label } from "../../components";

import "./MustGo.css";

export const MustGo = () => {
  return (
    <div className="must-go">
      <div className="must-go__top-wrap">
        <div className="must-go__top--left">
          <Label type="semi">Must go</Label>
        </div>
        <div className="must-go__top--right">
          <Link to="#">
            <Label type="light">More</Label>
          </Link>
        </div>
      </div>
      <div className="must-go__content-wrap">
        <div className="must-go__content--left">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8dMHkl6D-E7WmI_MNUKzgj8C4fZ32n1t4l7kt83iRMsCwX4d"
            alt="must"
            className="must-go__img"
          />
        </div>
        <div className="must-go__content--right">
          <div className="must-go__content--right--big">
            <Image
              src="https://www.gpsmycity.com/img/gd/1144.jpg"
              alt="must"
              className="must-go__img"
            />
          </div>
          <div className="must-go__content--right--small">
            <span>
              <Image
                src="https://100resilientcities.org/wp-content/uploads/2017/06/Paris-hero-crop-e1539202545467.jpg"
                alt="must"
                className="must-go__img"
              />
            </span>
            <span>
              <Image
                src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg"
                alt="must"
                className="must-go__img"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
