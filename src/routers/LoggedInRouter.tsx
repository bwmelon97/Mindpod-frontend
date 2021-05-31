import React from "react";
import { Route, Switch } from "react-router";
import { MainPage } from "@pages/client";
import Header from "@components/Header";

function LoggedInRouter () {
    return (
        <div className='bg-gray-100 min-h-screen' >
            <Header />
            <Switch>
                <Route path='/main'> <MainPage /> </Route>
            </Switch>
        </div>
    )
}

export default LoggedInRouter