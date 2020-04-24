import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "./components/main/main";



const Router = () => (
    <Switch>
        <Route exact path="/" component={main} />

    </Switch>
)

export default Router;