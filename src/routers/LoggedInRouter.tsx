import React from "react";
import { isLoggedInVar } from "../apollo";

function LoggedInRouter () {
    const onClick = () => isLoggedInVar(false);
    return (
        <div> 
            <p> Logged in </p> 
            <button onClick={onClick} > Logout </button>
        </div>
    )
}

export default LoggedInRouter