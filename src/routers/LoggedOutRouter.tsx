import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateAccountPage, LoginPage } from "../pages";

function LoggedOutRouter () {
    return (
        <Switch>
            <Route exact path='/' > <CreateAccountPage /> </Route>
            <Route path='/login' >  <LoginPage /> </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default LoggedOutRouter