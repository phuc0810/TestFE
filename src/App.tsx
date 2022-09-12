import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch } from "react-router-dom";
import Section1 from "./pages/Section1";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Section1 />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
