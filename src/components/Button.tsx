import React from "react";


type ButtonProps = {
    isVaild: boolean;
    isLoading: boolean;
    actionText: string;
}

const Button: React.FC<ButtonProps> = ({ isVaild, actionText, isLoading }) => {
    return (
        <button className={`w-full px-5 py-3 text-white focus:outline-none transition-colors duration-300 ${ 
            isVaild ?    
            `bg-lime-700 hover:bg-lime-800 ${isLoading ? 'bg-opacity-80 hover:bg-opacity-80' : ''}` :
            'bg-gray-200 pointer-events-none'
        }`} >
            { isLoading ? 'Loading...' : actionText }
        </button>
    )
}

export default Button