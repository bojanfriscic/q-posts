import React from "react";
import { Link } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import Container from '../../hoc/Container';

const Header: React.FunctionComponent = () => {
    useLogger({componentName: 'Header'});

    return (
        <header className="c-header">
            <Container>
                <Link to="/posts" className="c-header__link">
                    Posts Fetcher
                </Link>
            </Container>
        </header>
    );
}

export default Header
