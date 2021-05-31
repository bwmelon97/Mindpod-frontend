import React from "react";
// import gql from "graphql-tag";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { LOCALSTORAGE_TOKEN } from "@constants";

// const ME_QUERY = gql`
//     query meQuery {
//         ok
//         error
//         user {
//             email
//         }
//     }
// `

function Header () {
    const logout = () => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, '')
        authTokenVar('')
        isLoggedInVar(false);
    }

    return (
        <div className='bg-white w-full py-3 px-4 flex items-center justify-between' >
            <div>
                Mindpod
            </div>
            <div>
                <button onClick={logout} >Logout</button>
                User
            </div>
        </div>
    )   
}

export default Header