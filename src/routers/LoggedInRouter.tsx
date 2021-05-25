import React from "react";
import { isLoggedInvar } from "../apollo";

function LoggedInRouter () {
    const onClick = () => isLoggedInvar(false);
    return (
        <div> 
            <p> Logged in </p> 
            <button onClick={onClick} > Logout </button>
        </div>
    )
}

export default LoggedInRouter