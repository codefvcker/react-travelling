import React, { Component } from "react";

import { Article } from "../../components";
import { Search, Master, HotCities, Scenery } from "../../containers";

import "./Feed.css";

import { withFeed } from "../../proxy-props";

class Feed extends Component {
  render() {
    return (
      <section className="feed">
        <Article>
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
