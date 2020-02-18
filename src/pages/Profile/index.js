import React, { Component } from "react";

import { Button } from "../../components/add/Button";
import { Label } from "../../components/add/Label";
import { Input } from "../../components/add/Input";
import { LogIn } from "../../components/add/LogIn";

import "./Profile.css";

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <LogIn />
      </div>
    );
  }
}
