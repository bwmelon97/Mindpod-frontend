import React from "react";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { LOCALSTORAGE_TOKEN } from "@constants";
import Logo from "@components/Logo";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

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
            <Menu.Item key={2} onClick={logout}> Logout </Menu.Item>
        </Menu>
    )

    return (
        <div className='bg-white w-full py-3 px-4 flex items-center justify-between fixed top-0' >
            <Logo size='sm' />
            
            <div className='flex items-center'>
                <Dropdown overlay={menu} trigger={['click']} placement='bottomRight' arrow className='cursor-pointer' >
                    <div className='w-6 h-6 bg-gray-200 rounded-full' >

                    </div>
                </Dropdown>
                
            </div>
        </div>
    )   
}

export default Header