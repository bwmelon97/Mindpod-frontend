import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateAccountPage, HomePage, LoginPage } from "../pages";

function LoggedOutRouter () {
    return (
        <Switch>
            <Route exact path='/' > <HomePage /> </Route>
            <Route path='/login' >  <LoginPage /> </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default LoggedOutRouter