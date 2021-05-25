import React from "react";
import { isLoggedInvar } from "../apollo";

function LoggedOutRouter () {
    const onClick = () => isLoggedInvar(true);
    return (
        <div> 
            <p> Logged out </p>
            <button onClick={onClick} > Login </button>
        </div>
    )
}

export default LoggedOutRouter