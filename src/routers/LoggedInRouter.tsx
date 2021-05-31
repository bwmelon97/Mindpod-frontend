import React from "react";
import { Route, Switch } from "react-router";
import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";
import { MainPage } from "@pages/client";

function LoggedInRouter () {
    const logout = () => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, '')
        authTokenVar('')
        isLoggedInVar(false);
    }
    return (
        <Switch>
            <Route path='/main'> <MainPage /> </Route>
        </Switch>
    )
}

export default LoggedInRouter