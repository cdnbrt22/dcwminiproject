import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "./components/main/main";
import Signin from "./components/signin/Signin";



const Router = () => (
    <Switch>
        <Route exact path="/" component={main} />
        <Route exact oath="signin" component={Signin} />

    </Switch>
)

export default Router;