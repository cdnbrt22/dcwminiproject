import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/main";



const Router = () => (
    <Switch>
        <Route exact path="/" component={Main} />
    </Switch>
)

export default Router;