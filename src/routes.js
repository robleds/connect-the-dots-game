import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Result from "./pages/result";

const Routes = () => (
    // <BrowserRouter basename='/kibon/'>
    <BrowserRouter basename=''>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/result/:winner" component={Result} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
