import React, { Component } from "react";

import { Label } from "../../components/Label";
import { Search } from "../../containers";
import { Article } from "../../components/Article";
import { Scenery } from "../../containers/Scenery";
import { HotCities } from "../../containers/HotCities";
import { Master } from "../../containers/Master";

import TravelService from "../../services/travelService";

import "./Feed.css";

import { withFeed } from "../../proxy-props";

class Feed extends Component {
  state = {
    data: {}
  };

  TravelService = new TravelService();

  componentDidMount() {
    this.onUpdate();
  }

  onUpdate = () => {
    this.TravelService.getAllCitiesData()
      .then(this.onLoad)
      .catch(this.onError);
  };

  onLoad = data => {
    console.log(data);
    this.setState({
      data
    });
  };
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
        <Article onClick={() => console.log(this.state.data)}>
          <Master />
        </Article>
      </section>
    );
  }
}

export default withFeed(Feed);
