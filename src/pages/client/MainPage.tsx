import React from "react";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { LOCALSTORAGE_TOKEN } from "@constants";

function MainPage () {

    const logout = () => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, '')
        authTokenVar('')
        isLoggedInVar(false);
    }

    return (
        <div>
            Main
            <button onClick={logout} > logout </button>
        </div>
    )
}

export default MainPage;