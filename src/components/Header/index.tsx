import React from "react";
import { Link } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';

const Header: React.FunctionComponent = () => {
    useLogger({componentName: 'Header'});

    return (
        <header className="c-header">
            <Link to="/posts" className="c-header__link">
                Posts Fetcher
            </Link>
        </header>
    );
}

export default Header
