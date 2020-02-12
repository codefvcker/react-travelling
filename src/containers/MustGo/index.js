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
            src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
            alt="must"
            className="must-go__img"
          />
        </div>
        <div className="must-go__content--right">
          <div className="must-go__content--right--big">
            <Image
              src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
              alt="must"
              className="must-go__img"
            />
          </div>
          <div className="must-go__content--right--small">
            <span>
              <Image
                src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
                alt="must"
                className="must-go__img"
              />
            </span>
            <span>
              <Image
                src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
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
