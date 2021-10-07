import React from "react";
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
    return (
        <header className="c-header">
            <Link to="/posts" className="c-header__link">
                Posts Fetcher
            </Link>
        </header>
    );
}

export default Header
