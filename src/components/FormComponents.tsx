import React from "react";
import tw from "twin.macro"


const baseSize = `
    px-5 
    py-3
`

export const BaseInput = tw.input`
    ${baseSize}
    border border-gray-200 
    focus:border-lime-700 focus:border-opacity-70 focus:outline-none
    
    transition
    duration-300
`;

export const LogoutPageWrapper: React.FC = ({ children }) => (
    <div className='flex justify-center h-screen' >
        {children}
    </div>
)

export const FormContainer: React.FC = ({ children }) => (
    <div className='bg-white w-full max-w-xl flex flex-col items-center pt-10 px-5 lg:pt-20'>
        {children}
    </div>
)