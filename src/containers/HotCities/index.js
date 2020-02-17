import React, { Component } from "react";
import { Link } from "react-router-dom";

import { TravelService } from "../../services/travelService";

import { PlaceCard, Label } from "../../components";

import "./HotCities.css";

export class HotCities extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    this.updateData();
  }

  updateData = () => {
    TravelService.getAllCities()
      .then(this.onCitiesLoad)
      .catch(this.onError);
  };

  onCitiesLoad = data => {
    const cities = data.splice(0, 3);
    this.setState({
      cities
    });
  };

  renderCities = cities => {
    return cities.map((item, index) => {
      const { photos, name } = item;
      return (
        <PlaceCard
          key={item + index}
          src={photos[0]}
          name={name}
          alt={name}
          className="hot-cities__place-card"
        />
      );
    });
  };

  onError = () => {
    console.error("Something went wrong!");
  };

  render() {
    const { cities } = this.state;
    return (
      <div className="hot-cities">
        <div className="hot-cities__top-wrap">
          <div className="hot-cities__top-wrap--left">
            <Label type="semi">City</Label>
            <span className="hot-wrap">
              <Label type="light">Hot</Label>
            </span>
          </div>
          <div className="hot-cities__top-wrap--right">
            <Link to="#">
              <Label type="light">More</Label>
            </Link>
          </div>
        </div>
        <div className="hot-cities__bottom-wrap">
          {this.renderCities(cities)}
        </div>
      </div>
    );
  }
}
