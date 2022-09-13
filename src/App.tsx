import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SectionOne from "./pages/SectionOne";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Section1 /> */}
        <Route exact path="/section" component={SectionOne} />
        <Route exact path="/section-three" component={SectionThree} />
        <Route exact path="/section-four" component={SectionFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
