import React, { Component } from "react";

import { CurrentCity, Popular, MustGo, SameCity } from "../../containers";
import { Article } from "../../components";

import "./Location.css";

export class Location extends Component {
  render() {
    return (
      <section className="location">
        <Article>
          <CurrentCity />
        </Article>
        <Article>
          <Popular />
        </Article>
        <Article>
          <MustGo />
        </Article>
        <Article>
          <SameCity />
        </Article>
      </section>
    );
  }
}
