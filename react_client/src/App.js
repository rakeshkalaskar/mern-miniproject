import React from "react";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Heading from "./components/Heading";
import Login from "./components/Login";
import Call from "./components/Call";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Errorpage from "./components/Errorapage";
import Policy from "./components/Policy";
import Checkouts from "./components/Checkouts";
import About from "./components/About";
import { StateProvider } from "./components/StateProvider";

const App = () => {
  return (
    <>
      <StateProvider>
        <BrowserRouter>
          <Heading className="header" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/call">
              <Call />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/policy">
              <Policy />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/checkouts">
              <Checkouts />
            </Route>
            <Route path="*">
              <Errorpage />
            </Route>
          </Switch>
        </BrowserRouter>
      </StateProvider>
    </>
  );
};

export default App;
