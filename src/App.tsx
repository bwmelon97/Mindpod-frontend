import React from "react";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInvar } from "./apollo";
import { LoggedInRouter, LoggedOutRouter } from "./routers";

function App () {
    const isLoggedIn = useReactiveVar(isLoggedInvar)
    return (
        isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />
    )
}

export default App;