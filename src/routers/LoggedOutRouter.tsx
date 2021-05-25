import React from "react";
import { Route, Switch } from 'react-router-dom';
import { CreateAccountPage, LoginPage } from "../pages";

function LoggedOutRouter () {
    return (
        <Switch>
            <Route exact path='/' > <CreateAccountPage /> </Route>
            <Route path='/login' >  <LoginPage /> </Route>
        </Switch>
    )
}

export default LoggedOutRouter