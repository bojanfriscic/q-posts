import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import Routes from '../Routes';

const Layout: React.FunctionComponent = () => {
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default Layout;