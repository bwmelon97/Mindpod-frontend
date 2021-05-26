import React from "react";
import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";

function LoggedInRouter () {
    const logout = () => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, '')
        authTokenVar('')
        isLoggedInVar(false);
    }
    return (
        <div> 
            <p> Logged in </p> 
            <button onClick={logout} > Logout </button>
        </div>
    )
}

export default LoggedInRouter