import { LOGO_IMG_URL } from "@constants";
import React from "react";

type LogoProps = {
    size: 'xl' | 'sm'
}

const Logo: React.FC<LogoProps> = ({ size }) => {
    
    let logoStyle: {
        imgWidth: string;
        textSize: string;
    }

    switch(size) {
        case "sm": 
            logoStyle = {
                imgWidth: 'w-5',
                textSize: 'text-base'
            }
            break;
        
        case "xl": 
            logoStyle = {
                imgWidth: 'w-10',
                textSize: 'text-4xl'
            }
            break;
    }
    
    return (
        <div className='flex items-center'>
            <img src={LOGO_IMG_URL} className={logoStyle.imgWidth} alt='logo' />
            <span className={`font-extrabold tracking-tighter select-none ${logoStyle.textSize}`} > Mindpod </span>
        </div>
    )
}

export default Logo