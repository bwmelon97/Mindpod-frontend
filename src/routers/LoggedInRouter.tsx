import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { MainPage, PodcastDetail } from "@pages/client";
import Header from "@components/Header";

function LoggedInRouter () {
    return (
        <div className='bg-gray-100 min-h-screen' >
            <Header />
            <Switch>
                <Route path='/main'> <MainPage /> </Route>
                <Route path='/podcast/:id'> <PodcastDetail /> </Route>
                <Redirect to='/main' />
            </Switch>
        </div>
    )
}

export default LoggedInRouter