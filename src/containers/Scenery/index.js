import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Label, CityCard } from "../../components";
import { TravelService } from "../../services/travelService";

import "./Scenery.css";

export class Scenery extends Component {
  state = {
    cities: [],
    users: []
  };

  componentDidMount() {
    this.updateDate();
  }

  updateDate = () => {
    TravelService.getAllData()
      .then(this.onDataLoad)
      .catch(this.onError);
  };

  onDataLoad = data => {
    console.log("sd", data);
    const { cities, users } = data;
    this.setState({
      cities,
      users
    });
  };

  renderCards = cities => {
    return cities.map(item => {
      const { name, country, photos, alt, id } = item;
      return (
        <CityCard
          key={id}
          name={name}
          country={country}
          src={photos[2]}
          alt={alt}
          users={this.state.users}
        />
      );
    });
  };

  render() {
    const { cities } = this.state;
    return (
      <div className="scenery">
        <div className="scenery__top-wrap">
          <div className="scenery__top-wrap__left">
            <Label type="semi">Daily Scenery</Label>
            <Label type="semi" className="updated">
              Updated
            </Label>
          </div>
          <div className="scenery__top-wrap__right">
            <Link to="#">
              <Label type="light">More</Label>
            </Link>
          </div>
        </div>
        <div className="scenery__bottom-wrap">{this.renderCards(cities)}</div>
      </div>
    );
  }
}
