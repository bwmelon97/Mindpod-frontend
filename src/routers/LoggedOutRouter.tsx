import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateAccountPage, HomePage, LoginPage } from "@pages/logouts";

function LoggedOutRouter () {
    return (
        <Switch>
            <Route exact path='/' > <HomePage /> </Route>
            <Route path='/login' >  <LoginPage /> </Route>
            <Route path='/create-account' >  <CreateAccountPage /> </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default LoggedOutRouter