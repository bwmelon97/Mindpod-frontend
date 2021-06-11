import React from "react";
// import gql from "graphql-tag";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { LOCALSTORAGE_TOKEN } from "@constants";
import Logo from "@components/Logo";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

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

    const menu = (
        <Menu>
            <Menu.Item key={1}>
                <Link to='/edit-profile' >Edit Profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={2}>
                <button onClick={logout} >Logout</button>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className='bg-white w-full py-3 px-4 flex items-center justify-between fixed top-0' >
            <Logo size='sm' />
            
            <div className='flex items-center'>
                <Dropdown overlay={menu} trigger={['click']} placement='bottomRight' arrow >
                    <div className='w-6 h-6 bg-gray-200 rounded-full' >

                    </div>
                </Dropdown>
                
            </div>
        </div>
    )   
}

export default Header