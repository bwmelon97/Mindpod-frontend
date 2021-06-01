import React from "react";
// import gql from "graphql-tag";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { LOCALSTORAGE_TOKEN, LOGO_IMG_URL } from "@constants";

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
        <div className='bg-white w-full py-3 px-4 flex items-center justify-between fixed top-0' >
            <div className='flex items-center'>
                <img src={LOGO_IMG_URL} className='w-5' />
                <span className='font-extrabold tracking-tighter select-none' > Mindpod </span>
            </div>
            <div>
                <button onClick={logout} >Logout</button>
                {/* User */}
            </div>
        </div>
    )   
}

export default Header