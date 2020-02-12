import React, { Component } from "react";

import { Label } from "../../components/Label";
import { Search } from "../../containers";
import { Article } from "../../components/Article";
import { Scenery } from "../../containers/Scenery";
import { HotCities } from "../../containers/HotCities";
import { Master } from "../../containers/Master";

import "./Feed.css";

import { withFeed } from "../../proxy-props";

class Feed extends Component {
  render() {
    return (
      <section className="feed">
        <Article>
          <Label className="feed__label--top" type="bold">
            Hi Mike,
          </Label>
          <Label className="feed__label--top" type="bold">
            Where do you want to go?
          </Label>
          <Search />
        </Article>
        <Scenery />
        <Article>
          <HotCities />
        </Article>
        <Article>
          <Master />
        </Article>
      </section>
    );
  }
}

export default withFeed(Feed);
