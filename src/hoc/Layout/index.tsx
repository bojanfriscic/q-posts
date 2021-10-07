import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import Header from '../../components/Header';
import Routes from '../Routes';

const Layout: React.FunctionComponent = () => {
    useLogger({ componentName: 'Layout' });

    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default Layout;