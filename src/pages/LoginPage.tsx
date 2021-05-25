import React from "react";

function LoginPage () {

    return (
        <div className='bg-gray-200 flex justify-center h-screen items-center'>
            <div className='bg-white w-full max-w-xl flex flex-col items-center py-16 px-10 shadow-xl rounded-xl'>
                <h3 className='mb-10 text-2xl font-light select-none' > Login </h3>
                <form>
                    <input 
                        className='mb-6 w-full px-5 py-3 rounded-md ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
                        placeholder='Email'
                    />
                    <input 
                        className='mb-6 w-full px-5 py-3 rounded-md ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
                        placeholder='Password'
                    />
                    <button
                        className='w-full px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white focus:outline-none'
                    > 
                        Login 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage