import React, { Component } from "react";

import { Article } from "../../components";
import { Search, Master, HotCities, Scenery } from "../../containers";

import TravelService from "../../services/travelService";

import "./Feed.css";

import { withFeed } from "../../proxy-props";

class Feed extends Component {
  state = {
    cities: [],
    users: []
  };

  TravelService = new TravelService();

  componentDidMount() {
    this.onUpdate();
  }

  onUpdate = () => {
    this.TravelService.getAllData()
      .then(this.onLoad)
      .catch(this.onError);
  };

  onLoad = data => {
    console.log(data);
    const { cities, users } = data;
    this.setState({
      cities,
      users
    });
  };

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
