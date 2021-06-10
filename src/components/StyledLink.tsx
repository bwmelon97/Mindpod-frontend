import React from "react"; 
import { Link } from "react-router-dom";

type StyledLinkProps = {
    to: string
    linkText: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ to, linkText }) => {
    return (
        <Link to={to} className='text-lime-700 hover:underline' > 
            {linkText}
        </Link>
    )
}

export default StyledLink