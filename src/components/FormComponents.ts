import tw from "twin.macro"


const baseSize = `
    px-5 
    py-3
    rounded-md
`

export const BaseInput = tw.input`
    ${baseSize}
    ring-2 ring-gray-200 
    
    focus:ring-2 focus:ring-indigo-400 focus:outline-none
`;