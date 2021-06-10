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