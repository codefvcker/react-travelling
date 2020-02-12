import React from "react";
import { Route, Switch } from "react-router-dom";

import Feed from "./pages/Feed";
import { Location } from "./pages";
import { Profile } from "./pages";
import { City } from "./pages";

import { Navigation } from "./containers";

function App({ children }) {
  return (
    <>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/location" component={Location} />
          <Route path="/profile" component={Profile} />
          <Route path="/city/:name" component={City} />
        </Switch>
      </div>
      <Navigation />
    </>
  );
}

export default App;
